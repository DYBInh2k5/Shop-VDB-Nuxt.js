<template>
  <div class="max-w-7xl mx-auto px-6 py-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Left: Media -->
      <div>
        <div class="bg-white rounded-lg shadow p-4">
          <div class="flex gap-4">
            <div class="w-20 flex flex-col gap-3">
              <button v-for="(img, i) in images" :key="i" @click="activeIndex = i" :class="['rounded-md overflow-hidden', activeIndex===i ? 'ring-2 ring-offset-2 ring-[var(--color-primary)]' : '']">
                <img :src="img" class="w-20 h-20 object-cover" />
              </button>
            </div>

            <div class="flex-1">
              <div class="relative rounded-md overflow-hidden">
                <img :src="images[activeIndex]" @click="zoom(images[activeIndex])" class="w-full h-96 object-contain cursor-zoom-in" />
                <div v-if="videoUrl" class="absolute bottom-4 left-4">
                  <button @click="playVideo = !playVideo" class="bg-white/90 px-3 py-1 rounded-md">{{ playVideo ? 'Hide' : 'Play' }} video</button>
                </div>
              </div>

              <div v-if="playVideo" class="mt-4 rounded-md overflow-hidden">
                <video controls :src="videoUrl" class="w-full h-64 object-cover rounded-md"></video>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Purchase block -->
      <aside>
        <div class="bg-white rounded-lg shadow p-6 sticky top-28">
          <div class="text-sm text-gray-500 mb-1">{{ product?.category }}</div>
          <h1 class="text-2xl font-semibold mb-2">{{ product?.title }}</h1>
          <div class="text-2xl font-bold mb-4" :style="priceStyle">{{ product ? formatPrice(product.price) : '' }}</div>

          <!-- Variations -->
          <div class="mb-4">
            <div class="text-sm font-medium mb-2">Size</div>
            <div class="flex gap-2">
              <button v-for="s in sizes" :key="s" @click="selectedSize = s" :class="['px-3 py-1 rounded-md border', selectedSize===s ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white' : 'border-gray-200']">{{ s }}</button>
            </div>
          </div>

          <div class="mb-4">
            <div class="text-sm font-medium mb-2">Color</div>
            <div class="flex gap-2 items-center">
              <button v-for="c in colors" :key="c.name" @click="selectedColor = c.name" :title="c.name" :style="{ background: c.hex }" class="w-8 h-8 rounded-full border-2" :class="selectedColor===c.name ? 'ring-2 ring-offset-2 ring-[var(--color-primary)]' : ''"></button>
            </div>
          </div>

          <div class="flex items-center gap-3 mb-4">
            <div class="text-sm text-gray-600">Quantity</div>
            <input type="number" min="1" v-model.number="qty" class="w-20 px-2 py-1 border rounded" />
          </div>

          <div class="mb-4">
            <button @click="addProductToCart" class="w-full text-white font-semibold py-3 rounded-md" :style="primaryCta">Add to cart</button>
          </div>

          <div class="flex gap-4 text-sm text-gray-600">
            <div class="flex items-center gap-2"><span class="text-[var(--color-primary)]">✓</span> Free shipping</div>
            <div class="flex items-center gap-2"><span class="text-[var(--color-primary)]">↺</span> 30-day returns</div>
          </div>
        </div>

        <!-- Key info icons -->
        <div class="mt-6 bg-white rounded-lg shadow p-4">
          <div class="flex items-center gap-4 text-sm text-gray-700">
            <div class="flex items-center gap-2"><span class="text-[var(--color-primary)]">🚚</span><div>Free Shipping over $50</div></div>
          </div>
        </div>
      </aside>
    </div>

    <!-- Tabs: Description, Size Guide, Materials -->
    <div class="mt-8 bg-white rounded-lg shadow p-6">
      <div class="flex gap-4 border-b mb-4">
        <button v-for="t in tabs" :key="t" @click="currentTab = t" :class="['py-2 px-3', currentTab===t ? 'border-b-2 border-[var(--color-primary)] font-semibold' : 'text-gray-600']">{{ t }}</button>
      </div>
      <div>
        <div v-if="currentTab==='Description'" class="text-gray-700" v-html="product?.description"></div>
        <div v-else-if="currentTab==='Size Guide'" class="text-gray-700">Sizes run true to size. See the chart below.</div>
        <div v-else-if="currentTab==='Materials'" class="text-gray-700">Material: 100% cotton. Care: machine wash cold.</div>
      </div>
    </div>

    <!-- Cross-sell -->
    <div class="mt-8">
      <h3 class="text-xl font-semibold mb-4">You Might Also Like</h3>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div v-for="p in related" :key="p.id" class="bg-white rounded-lg p-3 shadow">
          <NuxtLink :to="`/products/${p.id}`">
            <div class="w-full h-36 overflow-hidden mb-2"><img :src="p.image" class="w-full h-full object-cover"/></div>
            <div class="text-sm text-gray-500">{{ p.title }}</div>
            <div class="font-medium">{{ formatPrice(p.price) }}</div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Zoom modal -->
    <div v-if="zoomImage" class="fixed inset-0 z-60 bg-black/70 flex items-center justify-center" @click.self="zoomImage=null">
      <div class="max-w-4xl w-full p-4">
        <img :src="zoomImage" class="w-full h-[70vh] object-contain bg-white rounded" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAsyncData } from '#app'
import { useCartStore } from '~/stores/useCartStore'

// local palette for PDP (matches site jewelry palette)
const palette = { primary: '#1B1B1B', accent: '#D4AF37', neutral: '#FBF9F5' }

const rootStyle = computed(() => ({
  '--color-primary': palette.primary,
  '--color-accent': palette.accent,
  '--bg': palette.neutral
}))

const route = useRoute()
const id = route.params.id

const { data: product } = await useAsyncData(['product', id], () => $fetch(`https://fakestoreapi.com/products/${id}`))

// related products fetch
const { data: related } = await useAsyncData('related', () => $fetch('https://fakestoreapi.com/products?limit=8'))

const images = computed(() => {
  const base = product.value?.image || ''
  return base ? [base, base, base] : []
})

const activeIndex = ref(0)
const zoomImage = ref(null)
const playVideo = ref(false)
const videoUrl = ''

const sizes = ['S','M','L','XL']
const colors = [{ name: 'Black', hex: '#111827' }, { name: 'White', hex: '#F9FAFB' }, { name: 'Olive', hex: '#6B7280' }]
const selectedSize = ref(sizes[1])
const selectedColor = ref(colors[0].name)
const qty = ref(1)

const tabs = ['Description','Size Guide','Materials']
const currentTab = ref('Description')

const cart = useCartStore()

function zoom(src) { zoomImage.value = src }
function openQuickView(p) { /* noop for now */ }
function addProductToCart() {
  if (!product.value) return
  cart.addToCart({ id: product.value.id, title: product.value.title, price: product.value.price, image: images.value[0], quantity: qty.value, size: selectedSize.value, color: selectedColor.value })
  // non-blocking subtle confirmation — replace with toast later
  const el = document.createElement('div')
  el.innerText = 'Added to cart'
  el.style.position = 'fixed'
  el.style.right = '20px'
  el.style.bottom = '20px'
  el.style.background = palette.primary
  el.style.color = palette.neutral
  el.style.padding = '10px 14px'
  el.style.borderRadius = '8px'
  el.style.boxShadow = '0 6px 18px rgba(0,0,0,0.12)'
  document.body.appendChild(el)
  setTimeout(()=> el.remove(), 1500)
}

const priceStyle = { color: 'var(--color-primary)', fontFamily: `Georgia, 'Times New Roman', serif` }
const primaryCta = { background: `linear-gradient(90deg,var(--color-primary),var(--color-accent))`, color: 'white' }

function formatPrice(n){ return `$${n.toFixed(2)}` }
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none }

/* Gallery: high-contrast border and subtle shadow */
.product-gallery img { border: 2px solid var(--color-primary); box-shadow: 0 8px 24px rgba(0,0,0,0.06); }
.heading-serif { font-family: Georgia, 'Times New Roman', serif; }
</style>
