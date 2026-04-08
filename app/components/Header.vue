<template>
  <header class="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[rgba(251,249,244,0.82)] backdrop-blur-xl">
    <div class="page-shell">
      <div class="relative flex min-h-[72px] items-center justify-between gap-6 py-2">
        <div class="flex items-center gap-10">
          <NuxtLink to="/" class="heading-serif text-lg uppercase tracking-[0.35em] text-[color:var(--text)] sm:text-xl">
            VÕ DUY BÌNH
          </NuxtLink>
          <nav class="hidden items-center gap-8 md:flex">
            <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to" class="text-[11px] uppercase tracking-[0.28em] text-[color:var(--text-soft)] transition hover:text-[color:var(--text)]" active-class="text-[color:var(--text)]">
              {{ item.label }}
            </NuxtLink>
          </nav>
        </div>

        <div class="ml-auto flex items-center gap-3 sm:gap-4 text-[color:var(--text)]">
          <button class="hidden items-center justify-center transition hover:text-[color:var(--primary)] md:inline-flex" aria-label="Search">
            <span class="material-symbols-outlined text-[18px]">search</span>
          </button>
          <template v-if="user">
            <NuxtLink to="/profile" class="hidden items-center gap-2 md:inline-flex">
              <span class="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--line)] bg-white/80 text-sm font-semibold text-[color:var(--text)]">
                {{ user.name.charAt(0).toUpperCase() }}
              </span>
            </NuxtLink>
            <button class="btn-ghost !px-4 !py-2" @click="logout">Logout</button>
          </template>
          <template v-else>
            <NuxtLink to="/auth/login" class="hidden transition hover:text-[color:var(--primary)] md:inline-flex" aria-label="Account">
              <span class="material-symbols-outlined text-[18px]">person</span>
            </NuxtLink>
            <NuxtLink to="/auth/register" class="btn-primary !px-4 !py-2">Join</NuxtLink>
          </template>
          <NuxtLink to="/cart" class="relative inline-flex items-center justify-center transition hover:text-[color:var(--primary)]" aria-label="Cart">
            <span class="material-symbols-outlined text-[18px]">shopping_bag</span>
            <span v-if="cart.totalItems > 0" class="absolute -right-2 -top-2 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[color:var(--primary)] px-1 text-[10px] font-bold text-white">
              {{ cart.totalItems }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useUser } from '@/composables/useUser'
import { useCartStore } from '~/stores/useCartStore'

const cart = useCartStore()
const { user, clearUser } = useUser()

const navItems = [
  { label: 'Collection', to: '/products' },
  { label: 'New Arrivals', to: '/products-async' },
  { label: 'About', to: '/about' },
]

const logout = async () => {
  clearUser()
  await navigateTo('/')
}
</script>
