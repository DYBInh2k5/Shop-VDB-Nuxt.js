<template>
  <div class="flex flex-col min-h-screen bg-[var(--bg-primary,#fff)]">
    <!-- Header -->
    <Header />

    <!-- Nội dung chính -->
    <main class="flex-1 w-full">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
        <NuxtPage />
      </div>
    </main>

    <!-- Footer -->
    <footer class="mt-24 py-16 bg-[var(--color-primary)] text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <!-- Brand -->
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-11 h-11 rounded-lg flex items-center justify-center font-bold text-lg shadow-md" :style="{ background: 'linear-gradient(90deg,var(--brand-from),var(--brand-via))', color: 'white' }">VDB</div>
              <h3 class="text-2xl font-bold heading-serif">VÕ DUY BÌNH</h3>
            </div>
            <p class="text-gray-300 text-base leading-relaxed">
              Cửa hàng trực tuyến VÕ DUY BÌNH — cung cấp sản phẩm chất lượng với dịch vụ tận tâm.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-bold text-lg mb-4">Danh mục</h4>
            <ul class="space-y-2">
              <li><NuxtLink to="/" class="text-gray-300 hover:text-[var(--color-accent)] transition">Trang chủ</NuxtLink></li>
              <li><NuxtLink to="/products" class="text-gray-300 hover:text-[var(--color-accent)] transition">Sản phẩm</NuxtLink></li>
              <li><NuxtLink to="/users" class="text-gray-300 hover:text-[var(--color-accent)] transition">Người dùng</NuxtLink></li>
              <li><NuxtLink to="/cart" class="text-gray-300 hover:text-[var(--color-accent)] transition">Giỏ hàng</NuxtLink></li>
            </ul>
          </div>

          <!-- Support -->
          <div>
            <h4 class="font-bold text-lg mb-4">Hỗ trợ</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-300 hover:text-[var(--color-accent)] transition">Liên hệ</a></li>
              <li><a href="#" class="text-gray-300 hover:text-[var(--color-accent)] transition">FAQ</a></li>
              <li><a href="#" class="text-gray-300 hover:text-[var(--color-accent)] transition">Chính sách</a></li>
              <li><a href="#" class="text-gray-300 hover:text-[var(--color-accent)] transition">Điều khoản</a></li>
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
          <div class="flex justify-center gap-6 mb-6">
            <a href="#" class="w-10 h-10 rounded-lg flex items-center justify-center transition hover:scale-110 bg-[var(--color-accent)] text-[var(--color-primary)]">
              <span class="font-bold">f</span>
            </a>
            <a href="#" class="w-10 h-10 rounded-lg flex items-center justify-center transition hover:scale-110 bg-[var(--color-accent)] text-[var(--color-primary)]">
              <span class="font-bold">📷</span>
            </a>
            <a href="#" class="w-10 h-10 rounded-lg flex items-center justify-center transition hover:scale-110 bg-[var(--color-accent)] text-[var(--color-primary)]">
              <span class="font-bold">𝕏</span>
            </a>
            <a href="#" class="w-10 h-10 rounded-lg flex items-center justify-center transition hover:scale-110 bg-[var(--color-accent)] text-[var(--color-primary)]">
              <span class="font-bold">▶</span>
            </a>
          </div>
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
