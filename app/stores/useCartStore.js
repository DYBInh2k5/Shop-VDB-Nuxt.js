import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),

  getters: {
    totalItems: (state) =>
      state.items.reduce((sum, item) => sum + (item.quantity || 1), 0),
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  },

  actions: {
    addToCart(product) {
      const existing = this.items.find((item) => item.id === product.id)
      const quantity = Number(product.quantity || 1)

      if (existing) {
        existing.quantity += quantity
        existing.size = product.size || existing.size
        existing.color = product.color || existing.color
      } else {
        this.items.push({ ...product, quantity })
      }
    },
    removeFromCart(id) {
      this.items = this.items.filter((item) => item.id !== id)
    },
    updateQuantity(id, quantity) {
      const item = this.items.find((entry) => entry.id === id)
      if (!item) return

      if (quantity <= 0) {
        this.removeFromCart(id)
        return
      }

      item.quantity = quantity
    },
    clearCart() {
      this.items = []
    },
  },
})
