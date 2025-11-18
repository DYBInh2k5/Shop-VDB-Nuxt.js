<template>
  <form @submit.prevent="handleSubmit" class="space-y-4 p-4 border rounded-lg bg-gray-50">
    <div class="space-y-2">
      <label for="name" class="block font-medium text-gray-700">Tên người dùng:</label>
      <input
        id="name"
        v-model="formData.name"
        type="text"
        required
        class="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500"
        placeholder="Nhập tên"
      />
    </div>

    <div class="space-y-2">
      <label for="email" class="block font-medium text-gray-700">Email:</label>
      <input
        id="email"
        v-model="formData.email"
        type="email"
        required
        class="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500"
        placeholder="Nhập email"
      />
    </div>

    <button
      type="submit"
      class="w-full btn-primary text-white font-semibold py-2 px-4 rounded-md transition duration-150"
      :disabled="loading"
    >
      {{ loading ? 'Đang xử lý...' : 'Thêm Người Dùng' }}
    </button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loading = ref(false)

// State cho form
const formData = reactive({
  name: '',
  email: '',
})

// Định nghĩa emits để gửi sự kiện lên component cha (trang)
const emit = defineEmits(['user-added'])

const handleSubmit = async () => {
  loading.value = true

  // 1. Gửi dữ liệu lên API (Sử dụng API giả Post)
  try {
    const newUser = await $fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    
    // API giả lập sẽ trả về dữ liệu cùng với ID = 101, xác nhận thêm thành công.
    console.log('Người dùng được thêm (giả lập API):', newUser)
    
    // 2. Thông báo thành công và chuyển hướng
    alert(`Đã thêm người dùng ${newUser.name} thành công! (ID: ${newUser.id})`)
    
    // Gửi sự kiện lên component cha để component cha cập nhật lại danh sách nếu cần
    emit('user-added', newUser) 
    
    // Chuyển hướng về trang danh sách người dùng
    router.push('/users')

  } catch (e) {
    alert('Lỗi khi thêm người dùng. Vui lòng kiểm tra console.')
    console.error(e)
  } finally {
    loading.value = false
  }
}
</script>