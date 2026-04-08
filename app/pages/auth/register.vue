<template>
  <main class="grid min-h-[calc(100vh-140px)] overflow-hidden rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] lg:grid-cols-2">
    <section class="flex items-center justify-center p-8 md:p-24 bg-[color:var(--surface)]">
      <div class="w-full max-w-md space-y-8">
        <div class="text-center md:text-left">
          <h2 class="heading-serif text-3xl text-[color:var(--text)] mb-2">Create Account</h2>
          <p class="text-[color:var(--text-soft)]">Join our curated collection and save your profile for a faster checkout.</p>
        </div>
        <form class="space-y-4" @submit.prevent="handleRegister">
          <input v-model="fullName" class="input-luxe" type="text" placeholder="Full name" required />
          <input v-model="email" class="input-luxe" type="email" placeholder="Email address" required />
          <input v-model="password" class="input-luxe" type="password" placeholder="Password" required />
          <input v-model="confirmPassword" class="input-luxe" type="password" placeholder="Confirm password" required />
          <button type="submit" class="btn-primary w-full py-4 text-sm">Create Account</button>
        </form>
        <p class="text-center text-sm text-[color:var(--text-soft)]">Already have an account? <NuxtLink to="/auth/login" class="font-bold text-[color:var(--primary)]">Sign In</NuxtLink></p>
      </div>
    </section>

    <section class="relative hidden lg:block">
      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD54pl8QmB2_dInVS2RD8HH_Ws2dr3V3NacoqvSMYvbtHSRLZTQnLw1O_QVk_Xz_reNR-tLiMtrHioh6QbZMq3Wl6h-NrNPjv496ddJ7u98PXXfPsAfsas1PliWJS0Q1DEk6-g6m5lFXFiopeJ_E2OPia1BHf4k6XgTgNFW1YNdacxO1NF1UF_p8ap96ljC-Kui99pL8cTVddqX-iBnqOWvOpa6IyLgX3FIS2V7FUzmvPC-sDU44SYXB7sgfsIv4LW5rUjgnouWUiqS" class="absolute inset-0 h-full w-full object-cover" alt="Fashion" />
      <div class="absolute inset-0 bg-black/15"></div>
      <div class="relative z-10 flex h-full items-end p-16 text-white">
        <div>
          <h1 class="heading-serif text-lg uppercase tracking-[0.35em]">VÕ DUY BÌNH</h1>
          <p class="mt-6 max-w-md heading-serif text-5xl leading-tight">A refined place to belong.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
const fullName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
async function handleRegister() { if (!fullName.value || !email.value || !password.value || password.value !== confirmPassword.value) return; await navigateTo('/auth/login') }
</script>