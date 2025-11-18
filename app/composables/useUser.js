// /app/composables/useUser.js
import { ref } from 'vue'

const user = ref(null)

export function useUser() {
  const setUser = (name, email) => {
    user.value = { name, email }
  }

  const clearUser = () => {
    user.value = null
  }

  return { user, setUser, clearUser }
}
