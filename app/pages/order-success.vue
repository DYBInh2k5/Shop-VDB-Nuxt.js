<template>
  <div class="max-w-2xl mx-auto">
    <div class="card p-8 text-center">
      <div class="text-6xl mb-4">✅</div>
      <h1 class="text-2xl font-bold mb-2">Cảm ơn! Đơn hàng của bạn đã được đặt.</h1>
      <p class="text-gray-600 mb-6">Mã đơn hàng: <span class="font-mono font-semibold">{{ orderId }}</span></p>
      <p class="mb-6">Tổng thanh toán: <span class="font-bold text-red-600">${{ total }}</span></p>

      <div class="flex justify-center gap-4">
        <NuxtLink to="/" class="btn-ghost">Về Trang Chủ</NuxtLink>
        <NuxtLink to="/profile" class="btn-primary">Xem Hồ Sơ</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const orderId = route.query.id || '—'
const total = route.query.total || '0.00'
</script>
