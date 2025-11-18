<!-- <template>
  <div>
    <h1>Thông tin người dùng</h1>
    <p>ID người dùng: {{ $route.params.id }}</p>
    <NuxtLink to="/">⬅ Quay lại Trang chủ</NuxtLink>
  </div>
</template> -->

<template>
  <div class="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
    <h1 class="text-3xl font-bold mb-6 text-red-600">Thông tin chi tiết Người dùng</h1>

    <div v-if="pending" class="text-center text-gray-500">
      <p>Đang tải dữ liệu người dùng...</p>
    </div>

    <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
      <strong class="font-bold">Lỗi:</strong>
      <span class="block sm:inline">Không thể tải thông tin người dùng.</span>
    </div>

    <div v-else-if="user">
      <h2 class="text-2xl font-semibold mb-4">{{ user.name }}</h2>
      
      <div class="space-y-3 text-gray-700">
        <p><strong>ID người dùng:</strong> {{ user.id }}</p>
        <p><strong>Tên người dùng (Username):</strong> {{ user.username }}</p>
        <p><strong>Email:</strong> <a :href="`mailto:${user.email}`" class="text-red-500 hover:underline">{{ user.email }}</a></p>
        <p><strong>Số điện thoại:</strong> {{ user.phone }}</p>
        <p><strong>Website:</strong> <a :href="`http://${user.website}`" target="_blank" class="text-red-500 hover:underline">{{ user.website }}</a></p>
        
        <h3 class="text-xl font-semibold mt-4 border-t pt-3">Địa chỉ</h3>
        <p><strong>Đường:</strong> {{ user.address.street }}, {{ user.address.suite }}</p>
        <p><strong>Thành phố:</strong> {{ user.address.city }}</p>
        <p><strong>Mã bưu điện:</strong> {{ user.address.zipcode }}</p>

        <h3 class="text-xl font-semibold mt-4 border-t pt-3">Công ty</h3>
        <p><strong>Tên công ty:</strong> {{ user.company.name }}</p>
        <p><strong>Slogan:</strong> "{{ user.company.catchPhrase }}"</p>
      </div>

    </div>

    <div v-else class="text-center py-10 text-gray-600">
      Không tìm thấy người dùng có ID: {{ userId }}
    </div>

    <NuxtLink to="/users" class="mt-8 inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-150">
      ⬅ Quay lại Danh sách Người dùng
    </NuxtLink>
  </div>
</template>

<script setup>
// 1. Lấy ID từ URL
const route = useRoute()
const userId = route.params.id

// 2. Gọi API để lấy dữ liệu chi tiết
const { data: user, pending, error } = await useFetch(
  `https://jsonplaceholder.typicode.com/users/${userId}`
)

// Nuxt 3 tự động xử lý lỗi 404 cho API request (ví dụ: user.value là null)

</script>