import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),

  getters: {
    totalItems: (state) => state.items.length,
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  },

  actions: {
    addToCart(product) {
      const existing = this.items.find((p) => p.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(id) {
      this.items = this.items.filter((p) => p.id !== id)
    },
    clearCart() {
      this.items = []
    }
  }
})


//useCartStore.js: Quản lý trạng thái giỏ hàng (thêm, xóa, tính tổng...).