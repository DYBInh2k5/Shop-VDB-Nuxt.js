<template>
  <div class="space-y-8">
    <!-- Header -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div>
        <h1 class="text-5xl font-bold text-gray-900">📦 Danh Sách Sản Phẩm</h1>
        <p class="text-gray-600 mt-2 text-lg">Khám phá hàng trăm sản phẩm chất lượng cao từ các thương hiệu uy tín</p>
      </div>
      <div class="card px-6 py-3 text-center">
        <p class="text-sm text-gray-600">Tất cả Sản phẩm</p>
        <p class="text-2xl font-bold text-red-600">{{ products?.length || 0 }}</p>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="pending" class="flex flex-col justify-center items-center py-20">
      <div class="animate-spin rounded-full h-16 w-16 border-4 border-red-200 border-t-red-600 mb-4"></div>
      <span class="text-lg text-gray-600 font-semibold">Đang tải sản phẩm...</span>
      <p class="text-gray-500 mt-2">Vui lòng chờ một chút</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="bg-red-50 border-2 border-red-300 text-red-800 px-8 py-6 rounded-xl">
      <p class="font-bold text-lg mb-2">⚠️ Lỗi khi tải sản phẩm</p>
      <p class="text-red-700">{{ error.message }}</p>
    </div>

    <!-- Products Grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div
        v-for="item in products"
        :key="item.id"
        class="card group overflow-hidden flex flex-col hover:scale-105 transform"
      >
        <!-- Image Container -->
        <div class="relative bg-gray-50 h-56 flex items-center justify-center overflow-hidden">
          <img 
            :src="item.image" 
            :alt="item.title" 
            class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
          />
          <div class="absolute top-4 right-4 badge-pill">
            ${{ item.price.toFixed(2) }}
          </div>
        </div>

        <!-- Content -->
        <div class="p-5 flex-1 flex flex-col">
          <h3 class="font-semibold text-base line-clamp-2 mb-2 group-hover:text-red-600 transition h-12">{{ item.title }}</h3>
          <p class="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">{{ item.description }}</p>
          
          <!-- Rating -->
          <div class="flex items-center gap-2 mb-4 pb-4 border-b">
            <div class="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
            <span class="text-xs text-gray-500 font-semibold">(4.5)</span>
          </div>

          <!-- Add to Cart Button -->
          <button
            @click="cart.addToCart(item)"
            class="btn-primary w-full flex items-center justify-center gap-2"
          >
            <span>🛒</span>
            <span>Thêm vào giỏ</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/useCartStore'

const cart = useCartStore()

const { data: products, pending, error } = await useFetch('https://fakestoreapi.com/products')
</script>
