<template>
  <div class="space-y-10 pb-12">
    <header class="space-y-6 pt-2">
      <p class="section-label">Limited Edition</p>
      <div class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-3xl">
          <h1 class="heading-serif text-4xl sm:text-5xl lg:text-7xl">Autumn Collection</h1>
          <p class="mt-5 max-w-2xl text-sm leading-7 text-[color:var(--text-soft)] sm:text-base">A curated selection of refined garments where modern silhouettes meet artisanal construction.</p>
        </div>
        <div class="flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.24em] text-[color:var(--text-soft)]">
          <button v-for="filter in filters" :key="filter" class="rounded-full border border-[color:var(--line)] bg-white/60 px-4 py-2 transition hover:bg-white">{{ filter }}</button>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-4 border-y border-[color:var(--line)] py-4 text-[10px] uppercase tracking-[0.28em] text-[color:var(--text-soft)]">
        <div class="flex flex-wrap gap-3">
          <span class="badge-pill">Category</span>
          <span class="badge-pill">Men</span>
          <span class="badge-pill">Color</span>
          <span class="badge-pill">Price</span>
        </div>
        <div class="flex flex-wrap gap-6">
          <span>64 results</span>
          <span>Sort by newest</span>
        </div>
      </div>
    </header>

    <div v-if="pending" class="py-24 text-center text-[color:var(--text-soft)]">Loading collection...</div>
    <div v-else-if="error" class="card p-8 text-[color:var(--primary)]">{{ error.message }}</div>

    <section v-else class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <article v-for="item in visibleProducts" :key="item.id" class="group overflow-hidden rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] transition hover:-translate-y-1">
        <NuxtLink :to="`/products/${item.id}`" class="block">
          <div class="relative aspect-[4/5] overflow-hidden bg-[color:var(--surface-muted)]">
            <img :src="item.image" :alt="item.title" class="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-105" />
            <span class="badge-pill absolute left-4 top-4">New Arrivals</span>
          </div>
          <div class="p-4 sm:p-5">
            <p class="text-[10px] uppercase tracking-[0.24em] text-[color:var(--text-soft)]">Collection</p>
            <h2 class="mt-2 line-clamp-2 heading-serif text-lg sm:text-xl">{{ item.title }}</h2>
            <div class="mt-4 flex items-center justify-between gap-3">
              <p class="text-sm text-[color:var(--text-soft)]">{{ categoryName(item.category) }}</p>
              <p class="font-medium text-[color:var(--primary)]">{{ formatPrice(item.price) }}</p>
            </div>
          </div>
        </NuxtLink>
        <div class="flex items-center justify-between px-4 pb-4 sm:px-5">
          <p class="text-[10px] uppercase tracking-[0.24em] text-[color:var(--text-soft)]">{{ item.rating?.rate ? `${item.rating.rate.toFixed(1)} / 5` : '4.8 / 5' }}</p>
          <button class="btn-primary !px-4 !py-2" @click="cart.addToCart({ ...item, quantity: 1 })">Add to cart</button>
        </div>
      </article>
    </section>

    <div class="flex items-center justify-center gap-3 pt-2 text-[10px] uppercase tracking-[0.28em] text-[color:var(--text-soft)]">
      <button class="inline-flex items-center gap-2">← Previous</button>
      <span class="rounded-full border border-[color:var(--line)] bg-white px-3 py-2 text-[color:var(--text)]">01</span>
      <span>02</span>
      <span>03</span>
      <button class="inline-flex items-center gap-2">Next →</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '~/stores/useCartStore'

const cart = useCartStore()
const filters = ['Category', 'Men', 'Color', 'Price']
const { data: products, pending, error } = await useFetch('https://fakestoreapi.com/products')
const visibleProducts = computed(() => (products.value || []).slice(0, 8))

function formatPrice(value) {
  return `$${Number(value).toFixed(2)}`
}

function categoryName(category) {
  if (!category) return 'Collection'
  return String(category).replace(/\b\w/g, (letter) => letter.toUpperCase())
}
</script>
