<template>
  <div class="max-w-3xl mx-auto">
    <div class="card p-8">
      <h1 class="text-2xl font-bold mb-4">Thanh toán</h1>

      <div v-if="cart.items.length === 0" class="text-center py-12">
        <p class="text-gray-600 mb-4">Giỏ hàng của bạn đang trống.</p>
        <NuxtLink to="/products" class="btn-primary">Quay lại cửa hàng</NuxtLink>
      </div>

      <form v-else @submit.prevent="handleCheckout" class="grid grid-cols-1 gap-6">
        <div>
          <h3 class="font-semibold mb-2">Thông tin giao hàng</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input v-model="form.name" placeholder="Họ và tên" class="w-full px-4 py-2 border rounded-lg focus-ring" required />
            <input v-model="form.email" type="email" placeholder="Email" class="w-full px-4 py-2 border rounded-lg focus-ring" required />
            <input v-model="form.address" placeholder="Địa chỉ" class="sm:col-span-2 w-full px-4 py-2 border rounded-lg focus-ring" required />
            <input v-model="form.city" placeholder="Thành phố" class="w-full px-4 py-2 border rounded-lg focus-ring" required />
            <input v-model="form.zip" placeholder="Mã bưu chính" class="w-full px-4 py-2 border rounded-lg focus-ring" required />
            <input v-model="form.country" placeholder="Quốc gia" class="w-full px-4 py-2 border rounded-lg focus-ring" required />
          </div>
        </div>

        <div>
          <h3 class="font-semibold mb-2">Thông tin thanh toán</h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input v-model="form.cardNumber" placeholder="Số thẻ (16 số)" maxlength="19" class="sm:col-span-3 w-full px-4 py-2 border rounded-lg focus-ring" required />
            <input v-model="form.expiry" placeholder="MM/YY" class="w-full px-4 py-2 border rounded-lg focus-ring" required />
            <input v-model="form.cvc" placeholder="CVC" maxlength="4" class="w-full px-4 py-2 border rounded-lg focus-ring" required />
            <input v-model="form.nameOnCard" placeholder="Tên trên thẻ" class="w-full px-4 py-2 border rounded-lg focus-ring" required />
          </div>
        </div>

        <div class="bg-gray-50 p-4 rounded-lg">
          <div class="flex justify-between items-center">
            <div>
              <p class="text-sm text-gray-600">Tổng hàng</p>
              <p class="font-bold text-xl text-red-600">${{ cart.totalPrice.toFixed(2) }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm text-gray-600">Số sản phẩm</p>
              <p class="font-semibold">{{ cart.items.length }}</p>
            </div>
          </div>
        </div>

        <div class="flex gap-4">
          <button type="submit" :disabled="processing" class="btn-primary flex-1">
            <span v-if="!processing">Thanh toán và đặt hàng</span>
            <span v-else>Đang xử lý...</span>
          </button>
          <NuxtLink to="/cart" class="btn-ghost">Quay lại giỏ</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const cart = useCartStore()

const form = ref({
  name: '',
  email: '',
  address: '',
  city: '',
  zip: '',
  country: '',
  cardNumber: '',
  expiry: '',
  cvc: '',
  nameOnCard: ''
})

const processing = ref(false)

const handleCheckout = async () => {
  // basic validation
  if (!form.value.name || !form.value.email || !form.value.address) {
    alert('Vui lòng điền đầy đủ thông tin giao hàng')
    return
  }

  processing.value = true

  // simulate payment processing
  await new Promise((res) => setTimeout(res, 1800))

  // create a pseudo order id
  const orderId = 'ORD-' + Date.now().toString().slice(-6)

  // clear cart
  cart.clearCart()

  processing.value = false

  // redirect to success page with order id and total
  await navigateTo({ path: '/order-success', query: { id: orderId, total: ('' + (form.value.total || 0) || cart.totalPrice) } })
}
</script>
