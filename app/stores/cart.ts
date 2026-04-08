import { defineStore } from 'pinia'

export const useLegacyCartStore = defineStore('legacy-cart', {
  state: () => ({
    items: [] as { id: number; name: string; price: number; quantity: number }[],
  }),
  getters: {
    total: (state) => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    count: (state) => state.items.length,
  },
  actions: {
    addItem(item: { id: number; name: string; price: number; quantity?: number }) {
      const existing = this.items.find((entry) => entry.id === item.id)
      if (existing) existing.quantity += item.quantity || 1
      else this.items.push({ ...item, quantity: item.quantity || 1 })
    },
    removeItem(id: number) {
      this.items = this.items.filter((item) => item.id !== id)
    },
    clear() {
      this.items = []
    },
  },
})
