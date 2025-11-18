<template>
  <div class="min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-red-50 py-12 px-4">
    <div class="max-w-md mx-auto">
      <!-- Card -->
      <div class="bg-white rounded-2xl shadow-2xl p-8">
        <!-- Logo -->
        <div class="flex justify-center mb-8">
          <div class="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
            ✓
          </div>
        </div>

        <!-- Title -->
        <h1 class="text-3xl font-bold text-center text-gray-900 mb-2">Đăng Ký</h1>
        <p class="text-center text-gray-600 mb-8">Tạo tài khoản VÕ DUY BÌNH của bạn</p>

        <!-- Form -->
        <form @submit.prevent="handleRegister" class="space-y-5">
          <!-- Full Name -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Họ và tên</label>
            <input
              v-model="fullName"
              type="text"
              placeholder="Nhập tên của bạn"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none transition"
              required
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input
              v-model="email"
              type="email"
              placeholder="your@email.com"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none transition"
              required
            />
          </div>

          <!-- Password -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Mật khẩu</label>
            <input
              v-model="password"
              type="password"
              placeholder="Tối thiểu 8 ký tự"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none transition"
              required
            />
            <p class="text-xs text-gray-500 mt-1">Mật khẩu phải có tối thiểu 8 ký tự</p>
          </div>

          <!-- Confirm Password -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Xác nhận mật khẩu</label>
            <input
              v-model="confirmPassword"
              type="password"
              placeholder="Nhập lại mật khẩu"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none transition"
              required
            />
          </div>

          <!-- Terms -->
          <label class="flex items-start gap-3">
            <input type="checkbox" class="w-4 h-4 rounded border-gray-300 mt-1" required />
            <span class="text-sm text-gray-600">
              Tôi đồng ý với
              <a href="#" class="text-green-600 hover:text-green-700 font-semibold">Điều khoản dịch vụ</a>
              và
              <a href="#" class="text-green-600 hover:text-green-700 font-semibold">Chính sách bảo mật</a>
            </span>
          </label>

          <!-- Register Button -->
          <button
            type="submit"
            class="w-full btn-primary text-white font-bold py-3 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Tạo Tài Khoản
          </button>
        </form>

        <!-- Login Link -->
        <div class="text-center mt-6">
          <p class="text-gray-600">Đã có tài khoản?
            <NuxtLink to="/auth/login" class="text-green-600 hover:text-green-700 font-bold">
              Đăng nhập
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const fullName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const handleRegister = async () => {
  // Validation
  if (!fullName.value || !email.value || !password.value || !confirmPassword.value) {
    alert('Vui lòng điền tất cả các trường')
    return
  }

  if (password.value.length < 8) {
    alert('Mật khẩu phải có tối thiểu 8 ký tự')
    return
  }

  if (password.value !== confirmPassword.value) {
    alert('Mật khẩu không khớp')
    return
  }

  // Giả lập đăng ký thành công
  alert('Đăng ký thành công! Vui lòng đăng nhập.')
  
  // Redirect sang login page
  await navigateTo('/auth/login')
}
</script>
