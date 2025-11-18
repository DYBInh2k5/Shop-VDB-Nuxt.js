<template>
  <div class="p-6">
    <div class="card">
      <h1 class="text-2xl font-bold mb-4">Sản phẩm (useAsyncData)</h1>
      <div v-if="pending">Đang tải...</div>
      <div v-else-if="error" class="text-red-600">{{ error.message }}</div>

      <ul v-else class="space-y-2">
        <li v-for="item in products" :key="item.id" class="flex justify-between">
          <span>{{ item.title }}</span>
          <span class="font-semibold text-red-600">${{ item.price }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { data: products, pending, error } = await useAsyncData('products', () =>
  $fetch('https://fakestoreapi.com/products')
)
</script>
