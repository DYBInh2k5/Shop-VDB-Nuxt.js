<template>
  <div class="max-w-3xl mx-auto">
    <div class="card p-8">
      <div class="flex items-center gap-6">
        <div class="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-3xl">
          {{ userInitial }}
        </div>
        <div>
          <h1 class="text-3xl font-bold text-gray-900">{{ user?.name || 'Người Dùng' }}</h1>
          <p class="text-gray-600">{{ user?.email || 'Không có email' }}</p>
        </div>
      </div>

      <div class="mt-8 space-y-4">
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="font-semibold text-gray-700 mb-1">Thông tin cơ bản</h3>
          <p class="text-gray-600">Họ và tên: <span class="font-medium text-gray-900">{{ user?.name || '-' }}</span></p>
          <p class="text-gray-600">Email: <span class="font-medium text-gray-900">{{ user?.email || '-' }}</span></p>
        </div>

        <div class="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
          <div>
            <h3 class="font-semibold text-gray-700">Bảo mật</h3>
            <p class="text-sm text-gray-600">Bạn có thể đăng xuất nếu đang sử dụng thiết bị chung.</p>
          </div>
          <div>
            <button @click="logout" class="btn-ghost">Đăng xuất</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { user, clearUser } = useUser()
const userInitial = computed(() => user.value?.name?.charAt(0).toUpperCase() || 'U')

const logout = async () => {
  clearUser()
  await navigateTo('/')
}
</script>

<style scoped></style>
