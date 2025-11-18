<template>
  <header class="backdrop-blur-md border-b sticky top-0 z-50 shadow-sm" :style="{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-gray)' }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-3">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm transition" :style="{ background: 'linear-gradient(90deg,var(--brand-from),var(--brand-via))' }">
            VDB
          </div>
          <span class="text-xl font-bold heading-serif heading-gradient hidden sm:inline">VÕ DUY BÌNH</span>
        </NuxtLink>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink 
            to="/" 
            class="text-gray-700 font-medium transition duration-300 relative group"
          >
            Trang chủ
            <span class="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" :style="{ backgroundColor: 'var(--color-accent)' }"></span>
          </NuxtLink>
          <NuxtLink 
            to="/products" 
            class="text-gray-700 font-medium transition duration-300 relative group"
          >
            Sản phẩm
            <span class="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" :style="{ backgroundColor: 'var(--color-accent)' }"></span>
          </NuxtLink>
          <NuxtLink 
            to="/users" 
            class="text-gray-700 font-medium transition duration-300 relative group"
          >
            Người dùng
            <span class="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" :style="{ backgroundColor: 'var(--color-accent)' }"></span>
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="text-gray-700 font-medium transition duration-300 relative group"
          >
            Về chúng tôi
            <span class="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" :style="{ backgroundColor: 'var(--color-accent)' }"></span>
          </NuxtLink>
        </nav>

        <!-- Right side -->
        <div class="flex items-center gap-3">
          <!-- Cart Button -->
          <NuxtLink 
            to="/cart" 
            class="relative flex items-center gap-2 btn-primary text-white font-semibold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105 shadow-md"
            :style="{ boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }"
          >
            <span class="text-lg">🛒</span>
            <span class="hidden sm:inline">{{ cart.totalItems }}</span>
            <span v-if="cart.totalItems > 0" class="absolute -top-1 -right-1 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center" :style="{ backgroundColor: 'var(--color-accent)' }">
              {{ cart.totalItems }}
            </span>
          </NuxtLink>

          <!-- Auth -->
          <template v-if="user">
            <div class="hidden sm:flex items-center gap-3 border-l border-gray-300 pl-3">
                <NuxtLink to="/profile" class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold" :style="{ backgroundColor: 'rgba(var(--color-accent-rgb, 212,175,55),0.15)', color: 'var(--color-primary)' }">
                    {{ user.name.charAt(0) }}
                  </div>
                  <span class="text-sm text-gray-700" :style="{ color: 'var(--color-primary)' }">{{ user.name }}</span>
                </NuxtLink>
                <button
                  @click="logout"
                  class="font-semibold py-1.5 px-3 rounded-lg transition text-sm"
                  :style="{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }"
                >
                  Logout
                </button>
              </div>
          </template>

          <template v-else>
            <div class="hidden sm:flex items-center gap-2 border-l border-gray-300 pl-3">
              <NuxtLink
                to="/auth/login"
                class="font-semibold py-1.5 px-3 rounded-lg transition text-sm"
                :style="{ border: '1px solid var(--border-gray)', color: 'var(--color-primary)', background: 'transparent' }"
              >
                Login
              </NuxtLink>
              <NuxtLink
                to="/auth/register"
                class="font-semibold py-1.5 px-3 rounded-lg transition text-sm"
                :style="{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }"
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
