<template>
  <div v-if="pending" class="py-24 text-center text-[color:var(--text-soft)]">Loading product...</div>
  <div v-else-if="error" class="card p-8 text-[color:var(--primary)]">{{ error.message }}</div>

  <div v-else class="space-y-12 pb-12">
    <section class="grid gap-8 lg:grid-cols-[88px,1fr,0.9fr] lg:items-start">
      <div class="order-3 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
        <button v-for="(img, index) in images" :key="index" class="h-20 w-20 flex-none overflow-hidden rounded-[0.75rem] border border-[color:var(--line)] bg-white/70" @click="activeIndex = index">
          <img :src="img" class="h-full w-full object-contain p-2" alt="Thumbnail" />
        </button>
      </div>

      <div class="order-1 rounded-[0.75rem] bg-[color:var(--surface)] p-4 sm:p-6 lg:order-2">
        <img :src="images[activeIndex]" :alt="product?.title" class="h-[560px] w-full object-contain" />
      </div>

      <aside class="order-2 lg:order-3">
        <div class="space-y-6 pt-2 lg:sticky lg:top-28">
          <div>
            <p class="section-label mb-4">Limited Collection</p>
            <div class="flex items-start justify-between gap-4">
              <h1 class="heading-serif text-3xl sm:text-5xl leading-tight">{{ product?.title }}</h1>
              <span class="text-[10px] uppercase tracking-[0.24em] text-[color:var(--text-soft)]">4.9 ★</span>
            </div>
            <p class="mt-4 text-2xl font-medium text-[color:var(--primary)]">{{ formatPrice(product?.price || 0) }}</p>
          </div>

          <div class="space-y-3">
            <p class="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--text-soft)]">Color</p>
            <div class="flex gap-3">
              <button v-for="color in colors" :key="color.name" class="h-8 w-8 rounded-full border border-[color:var(--line)]" :class="selectedColor === color.value ? 'ring-2 ring-[color:var(--primary)] ring-offset-4' : ''" :style="{ background: color.value }" @click="selectedColor = color.value"></button>
            </div>
          </div>

          <div class="space-y-3">
            <p class="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--text-soft)]">Size</p>
            <div class="grid grid-cols-4 gap-3">
              <button v-for="size in sizes" :key="size" class="rounded-[0.75rem] border px-3 py-3 text-sm font-semibold transition" :class="selectedSize === size ? 'border-[color:var(--primary)] bg-[color:var(--primary)] text-white' : 'border-[color:var(--line)] bg-white/70'" @click="selectedSize = size">{{ size }}</button>
            </div>
          </div>

          <div class="space-y-3">
            <p class="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--text-soft)]">Quantity</p>
            <input v-model.number="qty" type="number" min="1" class="input-luxe w-28" />
          </div>

          <div class="grid gap-3 sm:grid-cols-2">
            <button class="btn-primary" @click="addProductToCart">Thêm vào giỏ hàng</button>
            <NuxtLink to="/cart" class="btn-ghost">Mở giỏ hàng</NuxtLink>
          </div>

          <div class="lux-divider"></div>
          <div class="space-y-4 text-sm leading-7 text-[color:var(--text-soft)]">
            <p>{{ product?.description }}</p>
            <div class="flex items-center justify-between border-t border-[color:var(--line)] pt-4 text-[10px] uppercase tracking-[0.28em]">
              <span>Materials</span>
              <span>Size guide</span>
              <span>Care</span>
            </div>
          </div>
        </div>
      </aside>
    </section>

    <section>
      <div class="flex items-end justify-between gap-4">
        <div>
          <p class="section-label mb-3">Curated Selection</p>
          <h2 class="heading-serif text-3xl sm:text-4xl">Sản phẩm liên quan</h2>
        </div>
        <NuxtLink to="/products" class="text-[10px] uppercase tracking-[0.28em] text-[color:var(--text-soft)]">Xem thêm</NuxtLink>
      </div>
      <div class="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <article v-for="item in related" :key="item.id" class="overflow-hidden rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)]">
          <NuxtLink :to="`/products/${item.id}`">
            <img :src="item.image" class="h-56 w-full object-contain bg-[color:var(--surface-muted)] p-5" :alt="item.title" />
            <div class="p-5">
              <h3 class="line-clamp-2 heading-serif text-lg">{{ item.title }}</h3>
              <p class="mt-2 text-[color:var(--primary)]">{{ formatPrice(item.price) }}</p>
            </div>
          </NuxtLink>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '~/stores/useCartStore'

const route = useRoute()
const { data: product, pending, error } = await useAsyncData(`product-${route.params.id}`, () => $fetch(`https://fakestoreapi.com/products/${route.params.id}`))
const { data: related } = await useAsyncData('related-products', () => $fetch('https://fakestoreapi.com/products?limit=8'))
const cart = useCartStore()
const activeIndex = ref(0)
const qty = ref(1)
const selectedSize = ref('M')
const selectedColor = ref('#111111')
const sizes = ['S', 'M', 'L', 'XL']
const colors = [
  { name: 'Black', value: '#111111' },
  { name: 'Wine', value: '#7c2d12' },
  { name: 'Cream', value: '#f8f4ef' },
]

const images = computed(() => {
  const image = product.value?.image || ''
  return image ? [image, image, image] : []
})

function addProductToCart() {
  if (!product.value) return
  cart.addToCart({
    id: product.value.id,
    title: product.value.title,
    price: product.value.price,
    image: product.value.image,
    quantity: qty.value,
    size: selectedSize.value,
    color: selectedColor.value,
  })
}

function formatPrice(value) {
  return `$${Number(value).toFixed(2)}`
}
</script>