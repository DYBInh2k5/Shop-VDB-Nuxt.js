<template>
  <div class="min-h-screen bg-[color:var(--background)] text-[color:var(--text)]">
    <Header />

    <main class="pb-20 pt-6 lg:pt-8">
      <div class="page-shell">
        <slot />
      </div>
    </main>

    <footer class="border-t border-[color:var(--line)] bg-[rgba(255,253,248,0.92)] py-14">
      <div class="page-shell">
        <div class="grid gap-10 md:grid-cols-4">
          <div>
            <div class="heading-serif text-lg uppercase tracking-[0.35em]">VÕ DUY BÌNH</div>
            <p class="mt-4 max-w-sm text-sm leading-7 text-[color:var(--text-soft)]">
              Curated fashion essentials for the modern wardrobe with a focus on editorial aesthetics and subdued elegance.
            </p>
          </div>
          <div>
            <div class="section-label">Shop</div>
            <div class="mt-5 space-y-3 text-sm text-[color:var(--text-soft)]">
              <NuxtLink to="/products">Collection</NuxtLink>
              <NuxtLink to="/products-async">New Arrivals</NuxtLink>
              <NuxtLink to="/cart">Cart</NuxtLink>
              <NuxtLink to="/checkout">Checkout</NuxtLink>
            </div>
          </div>
          <div>
            <div class="section-label">Customer Care</div>
            <div class="mt-5 space-y-3 text-sm text-[color:var(--text-soft)]">
              <NuxtLink to="/about">About</NuxtLink>
              <NuxtLink to="/profile">Profile</NuxtLink>
              <NuxtLink to="/users">Users</NuxtLink>
            </div>
          </div>
          <div>
            <div class="section-label">Newsletter</div>
            <div class="mt-5 flex gap-3">
              <input class="input-luxe" placeholder="Email address" type="email" />
              <button class="btn-primary !px-4">Subscribe</button>
            </div>
            <p class="mt-4 text-xs uppercase tracking-[0.24em] text-[color:var(--text-soft)]">
              Crafted in Vietnam, shipped worldwide.
            </p>
          </div>
        </div>
        <div class="mt-12 flex flex-col gap-4 border-t border-[color:var(--line)] pt-6 text-xs uppercase tracking-[0.24em] text-[color:var(--text-soft)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 VÕ DUY BÌNH. All rights reserved.</p>
          <p>Luxury tailoring · Quiet confidence · Modern heritage</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
</script>
