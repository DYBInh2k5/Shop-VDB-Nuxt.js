<template>
  <div class="min-h-screen flex flex-col bg-[var(--bg,#fff)]" :style="rootStyle">
    <!-- Sticky header: transparent until scrolled -->
    <header :class="['fixed inset-x-0 top-0 z-50 transition-all duration-300', scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent']">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <nav class="flex items-center gap-6">
          <NuxtLink to="/" class="text-2xl font-extrabold tracking-tight" :style="logoStyle">{{ brand }}</NuxtLink>
          <div class="hidden md:flex items-center gap-4 text-sm text-gray-700">
            <NuxtLink to="/" class="hover:text-gray-900">Home</NuxtLink>
            <NuxtLink to="/products" class="hover:text-gray-900">Shop</NuxtLink>
            <NuxtLink to="/about" class="hover:text-gray-900">About</NuxtLink>
            <NuxtLink to="/blog" class="hover:text-gray-900">Blog</NuxtLink>
            <NuxtLink to="/contact" class="hover:text-gray-900">Contact</NuxtLink>
          </div>
        </nav>

        <div class="flex items-center gap-4">
          <button aria-label="Search" class="p-2 rounded-md text-gray-600 hover:text-gray-900">🔍</button>
          <NuxtLink to="/cart" class="p-2 rounded-md text-gray-600 hover:text-gray-900">🛒</NuxtLink>
          <NuxtLink to="/auth/login" class="p-2 rounded-md text-gray-600 hover:text-gray-900">👤</NuxtLink>
        </div>
      </div>
    </header>

    <main class="flex-1 pt-24"> <!-- pad for fixed header -->

      <!-- Hero: blurred background image/video with concise H1 and CTA -->
      <section class="relative w-full h-[70vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=6a9e2b4a1f2d4e7c8d9f0a1b2c3d4e5f" alt="Hero background" class="absolute inset-0 w-full h-full object-cover filter blur-sm scale-105" />
        <div class="absolute inset-0 bg-black/30"></div>
        <div class="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div class="max-w-2xl text-white">
            <div class="text-sm font-semibold uppercase tracking-wide mb-4" :style="{ color: 'rgba(255,255,255,0.85)' }">{{ productType }}</div>
            <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-4 heading-serif">Discover the finest <span class="block" :style="{ background: 'linear-gradient(90deg,var(--color-primary),var(--color-accent))', WebkitBackgroundClip: 'text', color: 'transparent' }">{{ tagline }}</span></h1>
            <p class="text-lg text-white/90 mb-6">{{ heroSub }}</p>
            <div class="flex items-center gap-4">
              <NuxtLink to="/products" class="rounded-md shadow-md text-white inline-flex items-center" :style="primaryCta">Discover the Collection</NuxtLink>
              <NuxtLink to="/about" class="text-sm font-medium text-white/90">Our Story</NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- Shop by Category -->
      <section class="max-w-7xl mx-auto px-6 py-12">
        <h2 class="text-2xl font-semibold mb-6">Shop by Category</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div v-for="cat in categories" :key="cat.id" class="relative rounded-lg overflow-hidden hover:scale-105 transition shadow-lg border border-transparent hover:border-[var(--color-primary)]">
            <img :src="cat.image" :alt="cat.name" class="w-full h-44 object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
              <div class="text-white font-semibold">{{ cat.name }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- New Arrivals: horizontal scroll with quick-view -->
      <section class="max-w-7xl mx-auto px-6 py-8">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-semibold">New Arrivals</h3>
          <NuxtLink to="/products" class="text-sm text-gray-600 hover:text-gray-900">See all</NuxtLink>
        </div>
        <div class="overflow-x-auto no-scrollbar">
          <div class="flex gap-4 py-2">
            <div v-for="p in newArrivals" :key="p.id" class="min-w-[220px] bg-white rounded-lg p-3 shadow hover:shadow-lg transition relative">
              <div class="w-full h-40 overflow-hidden rounded-md mb-3">
                <img :src="p.image" :alt="p.name" class="w-full h-full object-cover" />
              </div>
                <div class="text-sm text-gray-500">{{ p.brand }}</div>
                <div class="font-medium text-gray-900 heading-serif">{{ p.name }}</div>
              <div class="mt-2 flex items-center justify-between">
                <div class="text-lg font-semibold" :style="priceStyle">{{ formatPrice(p.price) }}</div>
                <button @click="addToCart(p)" class="text-sm px-3 py-1 rounded-md" :style="miniCtaStyle">Add</button>
              </div>

              <div class="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/30 opacity-0 hover:opacity-100 transition">
                <button @click="openQuickView(p)" class="bg-white/90 text-gray-900 px-3 py-2 rounded-md">Quick view</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick view modal -->
      <div v-if="showQuick" class="fixed inset-0 z-60 flex items-center justify-center bg-black/50">
        <div class="bg-white rounded-lg max-w-3xl w-full mx-4 p-6 relative">
          <button @click="closeQuick" class="absolute top-4 right-4 text-gray-600">✕</button>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="w-full h-72 bg-gray-100 rounded-md overflow-hidden">
              <img :src="selected.image" class="w-full h-full object-cover" />
            </div>
            <div>
              <h4 class="text-lg font-semibold">{{ selected.name }}</h4>
              <div class="text-sm text-gray-500 mb-4">{{ selected.brand }}</div>
              <div class="text-2xl font-bold mb-4">{{ formatPrice(selected.price) }}</div>
              <p class="text-gray-600 mb-6">{{ selected.description || 'A beautiful addition to your wardrobe.' }}</p>
              <div class="flex items-center gap-3">
                <button @click="addToCart(selected)" class="px-4 py-2 rounded-md text-white" :style="primaryCta">Add to cart</button>
                <NuxtLink to="/products" class="text-sm text-gray-600">View product</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Social proof / testimonials -->
      <section class="max-w-7xl mx-auto px-6 py-12">
        <h3 class="text-2xl font-semibold mb-6 heading-serif">What Our Customers Say</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="t in testimonials" :key="t.id" class="bg-white p-6 rounded-lg shadow">
            <div class="text-gray-700">“{{ t.text }}”</div>
            <div class="mt-4 text-sm font-semibold">— {{ t.name }}</div>
          </div>
        </div>
      </section>

    </main>

    <!-- Footer: minimalist with quick links and subscription -->
    <footer class="bg-[#0b0b0b] text-white py-10">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div class="text-xl font-bold">{{ brand }}</div>
          <div class="text-sm text-gray-300 mt-2">Handmade. Thoughtful. Timeless.</div>
        </div>

        <div class="text-sm text-gray-300">
          <div class="font-semibold mb-2">Quick links</div>
          <div class="flex flex-col gap-2">
            <NuxtLink to="/products" class="hover:text-white">Shop</NuxtLink>
            <NuxtLink to="/about" class="hover:text-white">About</NuxtLink>
            <NuxtLink to="/contact" class="hover:text-white">Contact</NuxtLink>
          </div>
        </div>

        <div>
          <div class="font-semibold mb-2">Subscribe</div>
          <div class="flex gap-2">
            <input v-model="email" type="email" placeholder="you@email.com" class="px-3 py-2 rounded-l-md w-full text-black" />
            <button @click="subscribe" class="px-4 py-2 rounded-r-md text-white" :style="primaryCta">Subscribe</button>
          </div>
          <div class="text-xs text-gray-400 mt-2">We respect your privacy.</div>
        </div>
      </div>
      <div class="mt-8 text-center text-sm text-gray-400">© {{ year }} {{ brand }} — All rights reserved.</div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useCartStore } from '~/stores/useCartStore'

// Configurable site variables
const brand = 'VÕ DUY BÌNH'
const productType = 'Sustainable Fashion'
const tagline = 'Luxury you can feel'
const heroSub = 'Beautifully made, sustainably sourced collections.'
const year = new Date().getFullYear()

// Jewelry brand palette: off-white background, deep charcoal primary, gold accents
const palette = {
  primary: '#1B1B1B', // deep charcoal
  accent: '#D4AF37',  // luxury gold
  neutral: '#FBF9F5'  // warm off-white
}

const rootStyle = computed(() => ({
  '--color-primary': palette.primary,
  '--color-accent': palette.accent,
  '--color-neutral': palette.neutral,
  '--bg': palette.neutral
}))

const logoStyle = { color: 'var(--color-primary)', fontFamily: `Georgia, 'Times New Roman', serif` }
const primaryCta = { background: `linear-gradient(90deg, ${palette.primary}, ${palette.accent})`, color: 'white', padding: '0.6rem 1.1rem', borderRadius: '0.5rem', boxShadow: '0 6px 18px rgba(0,0,0,0.12)' }
const miniCtaStyle = { background: palette.accent, color: palette.primary, borderRadius: '0.35rem' }
const priceStyle = { color: 'var(--color-primary)', fontFamily: `Georgia, 'Times New Roman', serif` }

const cart = useCartStore()

const categories = ref([
  { id: 'women', name: 'Women', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3a9b1e2a5c6d7f8e9b0a1b2c3d4e5f6a' },
  { id: 'men', name: 'Men', image: 'https://images.unsplash.com/photo-1520975911695-0444b3ce2f3b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=9b8e0bd1f3c8f1a5b6a2e1f4d3c6b7a2' },
  { id: 'accessories', name: 'Accessories', image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=74a2d6f1d7b6f0b2a6a3d3e1d2c4f6a7' }
])

const newArrivals = ref([
  { id: 'n1', name: 'Classic Linen Shirt', brand: 'VDB Studio', price: 79, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=74a2d6f1d7b6f0b2a6a3d3e1d2c4f6a7', description: 'Lightweight linen, perfect for summer.' },
  { id: 'n2', name: 'Tailored Blazer', brand: 'VDB Studio', price: 199, image: 'https://images.unsplash.com/photo-1520975911695-0444b3ce2f3b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=9b8e0bd1f3c8f1a5b6a2e1f4d3c6b7a2', description: 'Structured yet comfortable.' },
  { id: 'n3', name: 'Everyday Tee', brand: 'VDB Basics', price: 39, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3a9b1e2a5c6d7f8e9b0a1b2c3d4e5f6a', description: 'Soft cotton for daily wear.' },
  { id: 'n4', name: 'Relaxed Trousers', brand: 'VDB Studio', price: 109, image: 'https://images.unsplash.com/photo-1520975911695-0444b3ce2f3b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=9b8e0bd1f3c8f1a5b6a2e1f4d3c6b7a2', description: 'Comfortable and refined.' }
])

const testimonials = ref([
  { id: 1, name: 'Anh H.', text: 'Great quality and fast delivery!' },
  { id: 2, name: 'Linh T.', text: 'Love the fabrics and the fit.' },
  { id: 3, name: 'Minh P.', text: 'Customer support was very helpful.' }
])

const email = ref('')
function subscribe() {
  // simple front-end stub — replace with real API call
  if (!email.value) return alert('Please enter an email')
  alert(`Subscribed ${email.value}`)
  email.value = ''
}

// Quick view modal
const showQuick = ref(false)
const selected = ref({})
function openQuickView(p) { selected.value = p; showQuick.value = true }
function closeQuick() { showQuick.value = false; selected.value = {} }

function addToCart(item) { cart.addToCart({ ...item, quantity: 1 }) }
function formatPrice(n) { return `$${n.toFixed(2)}` }

// header scroll state
const scrolled = ref(false)
function onScroll() { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
.text-gradient { background: linear-gradient(90deg, var(--color-primary), var(--color-accent)); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
</style>