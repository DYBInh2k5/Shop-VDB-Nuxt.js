<template>
  <div class="mx-auto max-w-4xl pb-12">
    <div class="rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-8 text-center sm:p-10">
      <p class="section-label mb-4">Order Confirmed</p>
      <h1 class="heading-serif text-4xl sm:text-6xl">Thank you for your order</h1>
      <p class="mt-6 text-sm text-[color:var(--text-soft)]">Order ID: <span class="font-semibold text-[color:var(--text)]">{{ orderId }}</span></p>
      <p class="mt-2 text-sm text-[color:var(--text-soft)]">Total paid: <span class="font-semibold text-[color:var(--primary)]">${{ total }}</span></p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <NuxtLink to="/" class="btn-primary">Back home</NuxtLink>
        <NuxtLink to="/profile" class="btn-ghost">View profile</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const orderId = route.query.id || '—'
const total = route.query.total || '0.00'
</script>