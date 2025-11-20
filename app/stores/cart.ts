// stores/cart.ts
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as { id: number; name: string; price: number; quantity: number }[],
  }),
  getters: {
    total: (state) => state.items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    count: (state) => state.items.length,
  },
  actions: {
    addItem(item: { id: number; name: string; price: number; quantity?: number }) {
      const existing = this.items.find(i => i.id === item.id)
      if (existing) existing.quantity += item.quantity || 1
      else this.items.push({ ...item, quantity: item.quantity || 1 })
    },
    removeItem(id: number) {
      this.items = this.items.filter(i => i.id !== id)
    },
    clear() {
      this.items = []
    }
  }
})


// cart.ts: Cửa hàng Pinia để quản lý trạng thái giỏ hàng (thêm, xóa, tính tổng).