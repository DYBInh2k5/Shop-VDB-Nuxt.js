<template>
  <div class="space-y-8">
    <!-- Header -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div>
        <h1 class="text-5xl font-bold text-gray-900">👥 Danh Sách Người Dùng</h1>
        <p class="text-gray-600 mt-2 text-lg">Tất cả người dùng từ hệ thống</p>
      </div>
      <NuxtLink 
        to="/users/add" 
        class="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-6 rounded-lg transition shadow-lg transform hover:scale-105"
      >
        ➕ Thêm Người Dùng
      </NuxtLink>
    </div>

    <!-- Stats -->
    <div class="card text-center">
      <p class="text-sm text-gray-600 font-semibold">Tổng Người Dùng</p>
      <p class="text-4xl font-bold text-red-600">{{ users?.length || 0 }}</p>
    </div>

    <!-- Loading State -->
    <div v-if="pending" class="flex flex-col justify-center items-center py-20">
      <div class="animate-spin rounded-full h-16 w-16 border-4 border-red-200 border-t-red-600 mb-4"></div>
      <span class="text-lg text-gray-600 font-semibold">Đang tải dữ liệu...</span>
      <p class="text-gray-500 mt-2">Vui lòng chờ một chút</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="bg-red-50 border-2 border-red-300 text-red-800 px-8 py-6 rounded-xl">
      <p class="font-bold text-lg mb-2">⚠️ Lỗi khi tải dữ liệu</p>
      <p class="text-red-700">{{ error.message }}</p>
    </div>

    <!-- Users Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div 
        v-for="user in users" 
        :key="user.id"
        class="card group border-l-4 border-red-600"
      >
        <div class="flex items-start gap-4">
          <!-- Avatar -->
          <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
            {{ user.name.charAt(0).toUpperCase() }}
          </div>

          <!-- Content -->
          <div class="flex-1">
            <div class="flex justify-between items-start mb-2">
              <div>
                <h3 class="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition">{{ user.name }}</h3>
                <p class="text-sm text-gray-600 italic">@{{ user.username }}</p>
              </div>
              <div class="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                ID: {{ user.id }}
              </div>
            </div>

            <!-- Info Grid -->
            <div class="space-y-2 mt-4">
              <div class="flex items-center gap-2">
                <span class="text-red-600 font-bold">📧</span>
                <span class="text-gray-700">{{ user.email }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-red-600 font-bold">📱</span>
                <span class="text-gray-700">{{ user.phone }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-red-600 font-bold">🌐</span>
                <span class="text-gray-700">{{ user.website }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-red-600 font-bold">🏢</span>
                <span class="text-gray-700 font-semibold">{{ user.company.name }}</span>
              </div>
            </div>

            <!-- Action Button -->
            <button class="mt-4 w-full btn-primary">Xem Chi Tiết →</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Counter Demo -->
    <div class="card text-center">
      <h2 class="text-3xl font-bold mb-2">🔢 Bộ Đếm Demo</h2>
      <p class="text-gray-700 mb-8 text-lg">Giá trị hiện tại: <span class="text-5xl font-bold">{{ count }}</span></p>
      <div class="flex justify-center gap-4 flex-wrap">
        <button @click="increment" class="btn-primary">➕ Tăng</button>
        <button @click="decrement" class="btn-ghost">➖ Giảm</button>
        <button @click="reset" class="btn-ghost">🔄 Reset</button>
      </div>
    </div>
  </div>
</template>

<script setup>

import useCounter from '../composables/useCounter'
const { data: users, pending, error } = await useFetch(
  'https://jsonplaceholder.typicode.com/users'
)

const { count, increment, decrement, reset } = useCounter()
</script>


<!-- users.vue: Trang danh sách người dùng với trạng thái tải và bộ đếm demo. -->