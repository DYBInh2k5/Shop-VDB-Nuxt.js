<template>
  <div class="space-y-8 pb-16 pt-2">
    <header class="space-y-2">
      <p class="text-[10px] uppercase tracking-[0.32em] text-[color:var(--text-soft)]">Your Selection</p>
      <h1 class="heading-serif text-5xl leading-tight sm:text-6xl">Shopping Cart</h1>
    </header>

    <div v-if="cart.items.length === 0" class="rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-10 text-center sm:p-16">
      <p class="heading-serif text-3xl">Your cart is empty</p>
      <p class="mx-auto mt-4 max-w-lg text-sm leading-7 text-[color:var(--text-soft)]">It looks like you haven't made your choice yet. Explore our latest collections to find something exceptional.</p>
      <NuxtLink to="/products" class="btn-primary mt-8">Continue shopping</NuxtLink>
    </div>

    <div v-else class="grid gap-12 lg:grid-cols-[1fr,400px] lg:items-start">
      <div class="space-y-12">
        <article v-for="item in cart.items" :key="item.id" class="group flex flex-col gap-6 border-b border-[color:var(--line)] pb-12 md:flex-row">
          <div class="w-full md:w-48 aspect-[3/4] overflow-hidden rounded-[0.75rem] bg-[color:var(--surface-muted)] flex-shrink-0">
            <img :src="item.image" class="w-full h-full object-cover transition duration-700 group-hover:scale-105" :alt="item.title" />
          </div>
          <div class="flex-1 flex flex-col justify-between py-1">
            <div class="flex justify-between items-start gap-6">
              <div>
                <h2 class="heading-serif text-2xl sm:text-3xl">{{ item.title }}</h2>
                <p class="text-sm text-[color:var(--text-soft)] mt-3">Item No. VDB-2024-0{{ item.id }}</p>
                <div class="mt-4 space-y-1 text-sm text-[color:var(--text-soft)]">
                  <p><span class="font-medium text-[color:var(--text)]">Color:</span> {{ item.color || 'Default' }}</p>
                  <p><span class="font-medium text-[color:var(--text)]">Size:</span> {{ item.size || 'M' }}</p>
                </div>
              </div>
              <p class="text-lg font-medium text-[color:var(--primary)]">{{ formatPrice(item.price * item.quantity) }}</p>
            </div>
            <div class="mt-8 flex items-end justify-between gap-4">
              <div class="flex items-center rounded-xl border border-[color:var(--line)] bg-white/70 px-2 py-1">
                <button class="p-2 transition hover:text-[color:var(--primary)]" @click="decrease(item)"><span class="material-symbols-outlined text-sm">remove</span></button>
                <span class="px-4 text-sm font-medium">{{ item.quantity }}</span>
                <button class="p-2 transition hover:text-[color:var(--primary)]" @click="increase(item)"><span class="material-symbols-outlined text-sm">add</span></button>
              </div>
              <button class="text-[10px] uppercase tracking-[0.24em] text-[color:var(--text-soft)] transition hover:text-[color:var(--primary)]" @click="cart.removeFromCart(item.id)">Remove</button>
            </div>
          </div>
        </article>
      </div>

      <aside class="lg:sticky lg:top-28">
        <div class="space-y-8 rounded-[0.75rem] bg-[color:var(--surface-muted)] p-8">
          <h2 class="heading-serif text-2xl border-b border-[color:var(--line)] pb-4">Order Summary</h2>
          <div class="space-y-4 text-sm">
            <div class="flex justify-between">
              <span class="text-[color:var(--text-soft)]">Subtotal</span>
              <span>{{ formatPrice(cart.totalPrice) }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-[color:var(--text-soft)]">Shipping</span>
              <span class="rounded bg-white px-2 py-0.5 text-[10px] uppercase tracking-[0.22em] text-[color:var(--text-soft)]">Calculated at next step</span>
            </div>
            <div class="flex justify-between">
              <span class="text-[color:var(--text-soft)]">Tax (VAT 8%)</span>
              <span>{{ formatPrice(cart.totalPrice * 0.08) }}</span>
            </div>
          </div>
          <div class="lux-divider"></div>
          <div class="flex items-baseline justify-between">
            <span class="heading-serif text-xl">Total</span>
            <span class="heading-serif text-3xl text-[color:var(--primary)]">{{ formatPrice(cart.totalPrice * 1.08) }}</span>
          </div>
          <div>
            <label class="mb-3 block text-[10px] uppercase tracking-[0.24em] text-[color:var(--text-soft)]">Discount Code</label>
            <div class="flex gap-2">
              <input class="input-luxe flex-1" placeholder="Enter code" type="text" />
              <button class="rounded-xl border border-[color:var(--line)] bg-white/80 px-5 text-[10px] uppercase tracking-[0.22em]">Apply</button>
            </div>
          </div>
          <NuxtLink to="/checkout" class="btn-primary w-full">Tiến hành thanh toán</NuxtLink>
          <div class="space-y-3 text-xs text-[color:var(--text-soft)]">
            <p class="flex items-center gap-3"><span class="material-symbols-outlined text-[18px]">verified_user</span> Secure encrypted checkout</p>
            <p class="flex items-center gap-3"><span class="material-symbols-outlined text-[18px]">local_shipping</span> Free shipping on orders over 10,000,000đ</p>
          </div>
          <NuxtLink to="/products" class="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[color:var(--text-soft)]">
            <span class="material-symbols-outlined text-sm">arrow_back</span>
            Quay lại mua sắm
          </NuxtLink>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/useCartStore'

const cart = useCartStore()

function formatPrice(value) {
  return `${Number(value).toLocaleString('vi-VN')}đ`
}

function increase(item) {
  cart.updateQuantity(item.id, item.quantity + 1)
}

function decrease(item) {
  cart.updateQuantity(item.id, item.quantity - 1)
}
</script>