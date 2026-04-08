<template>
  <div class="space-y-8 pb-12">
    <header class="space-y-4">
      <p class="section-label">New in</p>
      <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 class="heading-serif text-4xl sm:text-5xl lg:text-7xl">New Arrivals</h1>
          <p class="mt-5 max-w-2xl text-sm leading-7 text-[color:var(--text-soft)]">A quick look at the latest pieces in the collection, styled to match the editorial system.</p>
        </div>
        <NuxtLink to="/products" class="text-[10px] uppercase tracking-[0.28em] text-[color:var(--text-soft)]">View full collection</NuxtLink>
      </div>
    </header>

    <div v-if="pending" class="py-24 text-center text-[color:var(--text-soft)]">Loading products...</div>
    <div v-else-if="error" class="card p-8 text-[color:var(--primary)]">{{ error.message }}</div>

    <section v-else class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <article v-for="item in products.slice(0, 8)" :key="item.id" class="overflow-hidden rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)]">
        <NuxtLink :to="`/products/${item.id}`">
          <div class="relative aspect-[4/5] overflow-hidden bg-[color:var(--surface-muted)]">
            <img :src="item.image" :alt="item.title" class="h-full w-full object-contain p-6" />
            <span class="badge-pill absolute left-4 top-4">Async</span>
          </div>
          <div class="p-5">
            <h2 class="line-clamp-2 heading-serif text-xl">{{ item.title }}</h2>
            <p class="mt-3 font-medium text-[color:var(--primary)]">{{ formatPrice(item.price) }}</p>
          </div>
        </NuxtLink>
      </article>
    </section>
  </div>
</template>

<script setup>
const { data: products, pending, error } = await useFetch('https://fakestoreapi.com/products')

function formatPrice(value) {
  return `$${Number(value).toFixed(2)}`
}
</script>