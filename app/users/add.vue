<template>
  <div class="p-6 max-w-lg mx-auto">
    <h1 class="text-3xl font-bold mb-6 text-center text-red-600">➕ Thêm Người Dùng Mới</h1>
    
    <UserForm />

    <div class="mt-6 text-center">
        <NuxtLink to="/users" class="text-red-500 hover:underline">
            ⬅ Quay lại Danh sách Người dùng
        </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Nuxt 3 tự động import UserForm.vue nên không cần import thủ công.
</script>