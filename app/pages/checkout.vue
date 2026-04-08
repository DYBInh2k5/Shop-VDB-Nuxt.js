<template>
  <div class="space-y-10 pb-16 pt-2">
    <header>
      <h1 class="heading-serif text-5xl sm:text-6xl">Checkout</h1>
      <p class="mt-3 text-[10px] uppercase tracking-[0.28em] text-[color:var(--text-soft)]">Complete your bespoke order</p>
    </header>

    <div class="grid gap-10 lg:grid-cols-[1fr,400px] lg:items-start">
      <form class="space-y-12" @submit.prevent="handleCheckout">
        <section class="space-y-8">
          <div class="flex items-center gap-4">
            <span class="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--primary)] text-xs font-bold text-white">1</span>
            <h2 class="heading-serif text-2xl">Shipping Information</h2>
          </div>
          <div class="grid gap-6 md:grid-cols-2">
            <div class="space-y-2">
              <label class="text-[10px] uppercase tracking-[0.22em] text-[color:var(--text-soft)]">First Name</label>
              <input v-model="form.firstName" class="input-luxe" placeholder="Enter first name" required />
            </div>
            <div class="space-y-2">
              <label class="text-[10px] uppercase tracking-[0.22em] text-[color:var(--text-soft)]">Last Name</label>
              <input v-model="form.lastName" class="input-luxe" placeholder="Enter last name" required />
            </div>
            <div class="md:col-span-2 space-y-2">
              <label class="text-[10px] uppercase tracking-[0.22em] text-[color:var(--text-soft)]">Address</label>
              <input v-model="form.address" class="input-luxe" placeholder="Street address, apartment, suite" required />
            </div>
            <div class="space-y-2">
              <label class="text-[10px] uppercase tracking-[0.22em] text-[color:var(--text-soft)]">City</label>
              <input v-model="form.city" class="input-luxe" placeholder="City" required />
            </div>
            <div class="space-y-2">
              <label class="text-[10px] uppercase tracking-[0.22em] text-[color:var(--text-soft)]">Postal Code</label>
              <input v-model="form.zip" class="input-luxe" placeholder="ZIP code" required />
            </div>
          </div>
        </section>

        <section class="space-y-8">
          <div class="flex items-center gap-4">
            <span class="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--primary)] text-xs font-bold text-white">2</span>
            <h2 class="heading-serif text-2xl">Delivery Method</h2>
          </div>
          <div class="space-y-4">
            <label class="flex items-center justify-between rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-5">
              <div class="flex items-center gap-4">
                <input checked class="h-4 w-4 border-[color:var(--line)] text-[color:var(--primary)]" name="delivery" type="radio" />
                <div>
                  <p class="font-medium">Standard Shipping</p>
                  <p class="text-xs text-[color:var(--text-soft)]">3-5 business days</p>
                </div>
              </div>
              <span class="heading-serif text-lg">$12.00</span>
            </label>
            <label class="flex items-center justify-between rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-5">
              <div class="flex items-center gap-4">
                <input class="h-4 w-4 border-[color:var(--line)] text-[color:var(--primary)]" name="delivery" type="radio" />
                <div>
                  <p class="font-medium">Express Courier</p>
                  <p class="text-xs text-[color:var(--text-soft)]">1-2 business days</p>
                </div>
              </div>
              <span class="heading-serif text-lg">$28.00</span>
            </label>
          </div>
        </section>

        <section class="space-y-8">
          <div class="flex items-center gap-4">
            <span class="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--primary)] text-xs font-bold text-white">3</span>
            <h2 class="heading-serif text-2xl">Payment Method</h2>
          </div>
          <div class="space-y-6">
            <div class="grid grid-cols-3 gap-4">
              <button type="button" class="rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-5 text-center transition hover:bg-white/70">
                <span class="material-symbols-outlined">credit_card</span>
                <span class="mt-3 block text-[10px] uppercase tracking-[0.22em]">Credit Card</span>
              </button>
              <button type="button" class="rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-5 text-center transition hover:bg-white/70">
                <span class="material-symbols-outlined">account_balance</span>
                <span class="mt-3 block text-[10px] uppercase tracking-[0.22em]">Bank Transfer</span>
              </button>
              <button type="button" class="rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-5 text-center transition hover:bg-white/70">
                <span class="material-symbols-outlined">payments</span>
                <span class="mt-3 block text-[10px] uppercase tracking-[0.22em]">COD</span>
              </button>
            </div>
            <div class="space-y-6 rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-6">
              <div class="space-y-2">
                <label class="text-[10px] uppercase tracking-[0.22em] text-[color:var(--text-soft)]">Card Number</label>
                <input v-model="form.cardNumber" class="input-luxe" placeholder="0000 0000 0000 0000" required />
              </div>
              <div class="grid gap-6 md:grid-cols-2">
                <div class="space-y-2">
                  <label class="text-[10px] uppercase tracking-[0.22em] text-[color:var(--text-soft)]">Expiry Date</label>
                  <input v-model="form.expiry" class="input-luxe" placeholder="MM / YY" required />
                </div>
                <div class="space-y-2">
                  <label class="text-[10px] uppercase tracking-[0.22em] text-[color:var(--text-soft)]">CVV</label>
                  <input v-model="form.cvc" class="input-luxe" placeholder="123" required />
                </div>
              </div>
            </div>
          </div>
        </section>

        <button type="submit" class="btn-primary w-full py-4 text-sm" :disabled="processing">{{ processing ? 'Processing...' : 'Complete Order' }}</button>
      </form>

      <aside>
        <div class="space-y-8 rounded-[0.75rem] bg-[color:var(--surface-muted)] p-8 lg:sticky lg:top-28">
          <h2 class="heading-serif text-2xl border-b border-[color:var(--line)] pb-4">Order Summary</h2>
          <div class="space-y-6">
            <div v-for="item in cart.items" :key="item.id" class="flex gap-4">
              <div class="h-24 w-20 flex-shrink-0 overflow-hidden rounded-[0.5rem] bg-[color:var(--surface)]">
                <img :src="item.image" class="h-full w-full object-cover" :alt="item.title" />
              </div>
              <div class="flex-1">
                <p class="heading-serif text-sm">{{ item.title }}</p>
                <p class="mt-1 text-xs uppercase tracking-[0.22em] text-[color:var(--text-soft)]">{{ item.color || 'Ivory' }} / {{ item.size || 'M' }}</p>
                <p class="mt-2 text-sm font-medium">{{ formatPrice(item.price * item.quantity) }}</p>
              </div>
            </div>
          </div>
          <div class="space-y-3 border-t border-[color:var(--line)] pt-6 text-sm">
            <div class="flex justify-between"><span class="text-[color:var(--text-soft)]">Subtotal</span><span>{{ formatPrice(cart.totalPrice) }}</span></div>
            <div class="flex justify-between"><span class="text-[color:var(--text-soft)]">Shipping</span><span>{{ formatPrice(12) }}</span></div>
            <div class="flex justify-between"><span class="text-[color:var(--text-soft)]">Tax (VAT 8%)</span><span>{{ formatPrice(cart.totalPrice * 0.08) }}</span></div>
            <div class="flex justify-between pt-4 text-lg font-semibold">
              <span>Total</span>
              <span class="text-[color:var(--primary)]">{{ formatPrice(cart.totalPrice * 1.08 + 12) }}</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '~/stores/useCartStore'

const cart = useCartStore()
const processing = ref(false)
const form = ref({ firstName: '', lastName: '', address: '', city: '', zip: '', cardNumber: '', expiry: '', cvc: '' })

async function handleCheckout() {
  if (!form.value.firstName || !form.value.lastName || !form.value.address) return
  processing.value = true
  await new Promise((resolve) => setTimeout(resolve, 1200))
  const orderId = `ORD-${Date.now().toString().slice(-6)}`
  const total = (cart.totalPrice * 1.08 + 12).toFixed(2)
  cart.clearCart()
  processing.value = false
  await navigateTo({ path: '/order-success', query: { id: orderId, total } })
}

function formatPrice(value) {
  return `${Number(value).toLocaleString('vi-VN')}đ`
}
</script>