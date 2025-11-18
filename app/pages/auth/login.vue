<template>
  <div class="min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-red-50 py-12 px-4">
    <div class="max-w-md mx-auto">
      <!-- Card -->
      <div class="bg-white rounded-2xl shadow-2xl p-8">
        <!-- Logo -->
        <div class="flex justify-center mb-8">
          <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-2xl">
            VDB
          </div>
        </div>

        <!-- Title -->
        <h1 class="text-3xl font-bold text-center text-gray-900 mb-2">Đăng Nhập</h1>
        <p class="text-center text-gray-600 mb-8">Chào mừng quay lại VÕ DUY BÌNH</p>

        <!-- Form -->
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Email -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input
              v-model="email"
              type="email"
              placeholder="your@email.com"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition"
              required
            />
          </div>

          <!-- Password -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Mật khẩu</label>
            <input
              v-model="password"
              type="password"
              placeholder="••••••••"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition"
              required
            />
          </div>

          <!-- Remember Me -->
          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <input type="checkbox" class="w-4 h-4 rounded border-gray-300" />
              <span class="ml-2 text-sm text-gray-600">Nhớ mật khẩu</span>
            </label>
            <NuxtLink to="/forgot-password" class="text-sm text-red-600 hover:text-red-700 font-semibold">
              Quên mật khẩu?
            </NuxtLink>
          </div>

          <!-- Login Button -->
          <button
            type="submit"
            class="w-full btn-primary text-white font-bold py-3 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Đăng Nhập
          </button>
        </form>

        <!-- Divider -->
        <div class="relative my-8">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t-2 border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-600">Hoặc</span>
          </div>
        </div>

        <!-- Social Login -->
        <div class="grid grid-cols-2 gap-4 mb-8">
          <button class="flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-red-600 py-3 rounded-lg transition font-semibold">
            <span>f</span>
            <span class="hidden sm:inline">Facebook</span>
          </button>
          <button class="flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-red-600 py-3 rounded-lg transition font-semibold">
            <span>G</span>
            <span class="hidden sm:inline">Google</span>
          </button>
        </div>

        <!-- Sign Up Link -->
        <div class="text-center">
          <p class="text-gray-600">Chưa có tài khoản?
            <NuxtLink to="/register" class="text-red-600 hover:text-red-700 font-bold">
              Đăng ký ngay
            </NuxtLink>
          </p>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-8 text-center text-gray-600">
        <p class="text-sm">Bằng cách đăng nhập, bạn đồng ý với</p>
        <div class="flex justify-center gap-4 text-sm mt-2">
          <a href="#" class="text-red-600 hover:text-red-700">Điều khoản dịch vụ</a>
          <span>•</span>
          <a href="#" class="text-red-600 hover:text-red-700">Chính sách bảo mật</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  if (!email.value || !password.value) {
    alert('Vui lòng nhập email và mật khẩu')
    return
  }

  // Giả lập đăng nhập thành công
  alert('Đăng nhập thành công!')
  
  // Lưu thông tin vào composable useUser
  const { setUser } = useUser()
  setUser(email.value.split('@')[0], email.value)
  
  // Redirect về trang profile
  await navigateTo('/profile')
}
</script>
