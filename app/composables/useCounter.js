export const useCounter = () => {
  const count = ref(0)

  const double = computed(() => count.value * 2)

  watch(count, (newVal) => {
    console.log('Giá trị mới:', newVal)
  })

  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => (count.value = 0)

  return { count, double, increment, decrement, reset }
}
