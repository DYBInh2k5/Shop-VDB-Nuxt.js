<template>
  <div class="space-y-8">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-5xl font-bold text-gray-900">🛒 Giỏ Hàng Của Bạn</h1>
        <p class="text-gray-600 mt-2">{{ cart.items.length }} sản phẩm</p>
      </div>
      <div class="bg-gradient-to-br from-red-50 to-red-100 px-6 py-3 rounded-xl">
        <p class="text-sm text-gray-600">Tổng giá trị</p>
        <p class="text-3xl font-bold text-red-600">${{ cart.totalPrice.toFixed(2) }}</p>
      </div>
    </div>

    <!-- Empty Cart State -->
    <div v-if="cart.items.length === 0" class="card text-center p-16">
      <div class="text-8xl mb-6">🛒</div>
      <h2 class="text-3xl font-bold mb-3 text-gray-900">Giỏ Hàng Của Bạn Trống</h2>
      <p class="text-gray-600 mb-8 text-lg">Hãy thêm một số sản phẩm để bắt đầu mua sắm</p>
      <NuxtLink to="/products" class="btn-primary inline-flex items-center gap-2 text-lg">
        ← Quay lại cửa hàng
      </NuxtLink>
    </div>

    <!-- Cart Items -->
    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Items List -->
      <div class="lg:col-span-2 space-y-4">
        <div
          v-for="item in cart.items"
          :key="item.id"
          class="card flex gap-6 items-center"
        >
          <img 
            v-if="item.image" 
            :src="item.image" 
            :alt="item.title" 
            class="w-28 h-28 object-contain rounded-lg shadow-md bg-white p-2" 
          />
          <div class="flex-1">
            <h3 class="font-bold text-lg mb-2 text-gray-900">{{ item.title }}</h3>
            <p class="text-sm text-gray-600 line-clamp-2 mb-4">{{ item.description }}</p>
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-4">
                <span class="text-gray-600 font-semibold">Giá:</span>
                <span class="text-2xl font-bold text-red-600">${{ item.price.toFixed(2) }}</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="bg-gray-100 px-4 py-2 rounded-lg font-bold text-lg">
                  x{{ item.quantity }}
                </div>
                <span class="font-bold text-lg text-gray-900">${{ (item.price * item.quantity).toFixed(2) }}</span>
                <button 
                  @click="cart.removeFromCart(item.id)" 
                  class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition font-bold ml-2"
                >
                  🗑️
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary Sidebar -->
      <div class="lg:col-span-1">
        <div class="card sticky top-24 p-6">
          <h2 class="text-2xl font-bold mb-6 text-gray-900">Tóm Tắt Đơn Hàng</h2>
          
          <div class="space-y-4 mb-6 pb-6 border-b-2">
            <div class="flex justify-between text-gray-700">
              <span class="font-semibold">Tổng sản phẩm:</span>
              <span class="font-bold">{{ cart.items.length }}</span>
            </div>
            <div class="flex justify-between text-gray-700">
              <span class="font-semibold">Tổng số lượng:</span>
              <span class="font-bold">{{ cart.items.reduce((sum, item) => sum + item.quantity, 0) }}</span>
            </div>
            <div class="flex justify-between text-gray-700">
              <span class="font-semibold">Tiền hàng:</span>
              <span class="font-bold">${{ cart.totalPrice.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-gray-700">
              <span class="font-semibold">Phí vận chuyển:</span>
              <span class="text-green-600 font-bold">Miễn phí</span>
            </div>
          </div>

          <div class="flex justify-between mb-6 p-4 bg-gray-50 rounded-lg">
            <span class="text-xl font-bold text-gray-900">Tổng cộng:</span>
            <span class="text-3xl font-bold text-red-600">${{ cart.totalPrice.toFixed(2) }}</span>
          </div>

          <NuxtLink to="/checkout" class="btn-primary w-full mb-3 text-lg inline-flex items-center justify-center">✓ Thanh Toán</NuxtLink>

          <button @click="cart.clearCart()" class="btn-ghost w-full mb-2">🗑️ Xóa Tất Cả</button>

          <NuxtLink to="/products" class="block mt-4 text-center text-red-600 hover:text-red-700 font-semibold transition">← Tiếp tục mua sắm</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/useCartStore'

const cart = useCartStore()
</script>
