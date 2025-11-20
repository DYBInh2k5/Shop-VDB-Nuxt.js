<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
      <div class="flex justify-between items-center py-4 gap-6">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="w-11 h-11 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md" :style="{ background: 'linear-gradient(90deg,var(--brand-from),var(--brand-via))' }">
            VDB
          </div>
          <span class="text-2xl font-bold heading-serif heading-gradient hidden md:inline" style="letter-spacing:0.02em;">VÕ DUY BÌNH</span>
        </NuxtLink>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center gap-8 ml-8">
          <NuxtLink 
            to="/" 
            class="text-gray-700 font-semibold px-2 py-1 rounded transition duration-200 relative group hover:text-[var(--color-accent)]"
          >
            Trang chủ
            <span class="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" :style="{ backgroundColor: 'var(--color-accent)' }"></span>
          </NuxtLink>
          <NuxtLink 
            to="/products" 
            class="text-gray-700 font-semibold px-2 py-1 rounded transition duration-200 relative group hover:text-[var(--color-accent)]"
          >
            Sản phẩm
            <span class="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" :style="{ backgroundColor: 'var(--color-accent)' }"></span>
          </NuxtLink>
          <NuxtLink 
            to="/users" 
            class="text-gray-700 font-semibold px-2 py-1 rounded transition duration-200 relative group hover:text-[var(--color-accent)]"
          >
            Người dùng
            <span class="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" :style="{ backgroundColor: 'var(--color-accent)' }"></span>
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="text-gray-700 font-semibold px-2 py-1 rounded transition duration-200 relative group hover:text-[var(--color-accent)]"
          >
            Về chúng tôi
            <span class="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" :style="{ backgroundColor: 'var(--color-accent)' }"></span>
          </NuxtLink>
        </nav>

        <!-- Right side -->
        <div class="flex items-center gap-4">
          <!-- Cart Button -->
          <NuxtLink 
            to="/cart" 
            class="relative flex items-center gap-2 bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold py-2 px-4 rounded-lg transition duration-300 hover:shadow-lg hover:scale-105"
            :style="{ boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }"
          >
            <span class="text-lg">🛒</span>
            <span class="hidden sm:inline">{{ cart.totalItems }}</span>
            <span v-if="cart.totalItems > 0" class="absolute -top-1 -right-1 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center bg-red-500">
              {{ cart.totalItems }}
            </span>
          </NuxtLink>

          <!-- Auth -->
          <template v-if="user">
            <div class="hidden sm:flex items-center gap-3 border-l border-gray-200 pl-4">
                <NuxtLink to="/profile" class="flex items-center gap-2">
                  <div class="w-9 h-9 rounded-full flex items-center justify-center font-bold bg-[var(--color-accent)] text-[var(--color-primary)]">
                    {{ user.name.charAt(0) }}
                  </div>
                  <span class="text-base font-semibold text-gray-800" :style="{ color: 'var(--color-primary)' }">{{ user.name }}</span>
                </NuxtLink>
                <button
                  @click="logout"
                  class="font-semibold py-1.5 px-4 rounded-lg transition text-sm bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-yellow-400"
                >
                  Logout
                </button>
              </div>
          </template>

          <template v-else>
            <div class="hidden sm:flex items-center gap-2 border-l border-gray-200 pl-4">
              <NuxtLink
                to="/auth/login"
                class="font-semibold py-1.5 px-4 rounded-lg transition text-sm border border-gray-300 text-[var(--color-primary)] bg-white hover:bg-gray-50"
              >
                Login
              </NuxtLink>
              <NuxtLink
                to="/auth/register"
                class="font-semibold py-1.5 px-4 rounded-lg transition text-sm bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-yellow-400"
              >
                Sign Up
              </NuxtLink>
            </div>
          </template>
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

const logout = () => {
  clearUser()
}
</script>
