// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Thêm Tailwind CSS
  css: [
    '~/assets/css/tailwind.css'  // đường dẫn tới file Tailwind CSS
  ],

  // Enable routes
  routeRules: {},

  // Tailwind sẽ tự động nhận các file vue/js/ts trong app/
  // Nếu muốn, bạn có thể thêm plugins Tailwind

  modules: ['@pinia/nuxt'],
})

//nuxt.config.ts: Cấu hình toàn bộ ứng dụng Nuxt (router, modules, tailwind, runtime config...).