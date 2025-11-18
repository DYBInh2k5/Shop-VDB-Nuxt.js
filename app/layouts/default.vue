<template>
  <div class="flex flex-col min-h-screen" :style="{ backgroundColor: 'var(--bg-primary, #fff)' }">
    <!-- Header -->
    <Header />

    <!-- Nội dung chính -->
    <main class="flex-1 w-full">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <NuxtPage />
      </div>
    </main>

    <!-- Footer -->
    <footer class="mt-20 py-16" :style="{ background: 'var(--color-primary)', color: 'white' }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <!-- Brand -->
          <div>
            <div class="flex items-center gap-2 mb-4">
                <div class="w-10 h-10 rounded-lg flex items-center justify-center font-bold" :style="{ background: 'linear-gradient(90deg,var(--brand-from),var(--brand-via))', color: 'white' }">
                  VDB
                </div>
                <h3 class="text-xl font-bold heading-serif">VÕ DUY BÌNH</h3>
              </div>
            <p class="text-gray-400 text-sm leading-relaxed">
              Cửa hàng trực tuyến VÕ DUY BÌNH — cung cấp sản phẩm chất lượng với dịch vụ tận tâm.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-bold text-lg mb-4">Danh mục</h4>
            <ul class="space-y-2">
              <li><NuxtLink to="/" class="text-gray-400 hover:text-red-400 transition">Trang chủ</NuxtLink></li>
              <li><NuxtLink to="/products" class="text-gray-400 hover:text-red-400 transition">Sản phẩm</NuxtLink></li>
              <li><NuxtLink to="/users" class="text-gray-400 hover:text-red-400 transition">Người dùng</NuxtLink></li>
              <li><NuxtLink to="/cart" class="text-gray-400 hover:text-red-400 transition">Giỏ hàng</NuxtLink></li>
            </ul>
          </div>

          <!-- Support -->
          <div>
            <h4 class="font-bold text-lg mb-4">Hỗ trợ</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-red-400 transition">Liên hệ</a></li>
              <li><a href="#" class="text-gray-400 hover:text-red-400 transition">FAQ</a></li>
              <li><a href="#" class="text-gray-400 hover:text-red-400 transition">Chính sách</a></li>
              <li><a href="#" class="text-gray-400 hover:text-red-400 transition">Điều khoản</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="font-bold text-lg mb-4">Liên hệ</h4>
            <ul class="space-y-3">
              <li class="flex items-center gap-2">
                <span :style="{ color: 'var(--color-accent)' }">📧</span>
                <span class="text-gray-200">binh.vd01500@sinhvien.hoasen.edu.vn</span>
              </li>
              <li class="flex items-center gap-2">
                <span :style="{ color: 'var(--color-accent)' }">📱</span>
                <span class="text-gray-200">1900-xxxx</span>
              </li>
              <li class="flex items-center gap-2">
                <span :style="{ color: 'var(--color-accent)' }">📍</span>
                <span class="text-gray-200">Hà Nội, Việt Nam</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-gray-700 pt-8">
          <!-- Social Links -->
            <div class="flex justify-center gap-6 mb-6">
            <a href="#" class="w-10 h-10 rounded-lg flex items-center justify-center transition transform hover:scale-110" :style="{ background: 'var(--color-accent)', color: 'var(--color-primary)' }">
              <span class="font-bold">f</span>
            </a>
            <a href="#" class="w-10 h-10 rounded-lg flex items-center justify-center transition transform hover:scale-110" :style="{ background: 'var(--color-accent)', color: 'var(--color-primary)' }">
              <span class="font-bold">📷</span>
            </a>
            <a href="#" class="w-10 h-10 rounded-lg flex items-center justify-center transition transform hover:scale-110" :style="{ background: 'var(--color-accent)', color: 'var(--color-primary)' }">
              <span class="font-bold">𝕏</span>
            </a>
            <a href="#" class="w-10 h-10 rounded-lg flex items-center justify-center transition transform hover:scale-110" :style="{ background: 'var(--color-accent)', color: 'var(--color-primary)' }">
              <span class="font-bold">▶</span>
            </a>
          </div>

          <!-- Copyright -->
          <div class="text-center text-gray-400 text-sm">
            <p>&copy; 2025 VÕ DUY BÌNH. All rights reserved. | Designed with ❤️ by Your Team</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
</script>
