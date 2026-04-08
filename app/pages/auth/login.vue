<template>
  <main class="grid min-h-[calc(100vh-140px)] overflow-hidden rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] lg:grid-cols-2">
    <section class="relative hidden lg:block">
      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD54pl8QmB2_dInVS2RD8HH_Ws2dr3V3NacoqvSMYvbtHSRLZTQnLw1O_QVk_Xz_reNR-tLiMtrHioh6QbZMq3Wl6h-NrNPjv496ddJ7u98PXXfPsAfsas1PliWJS0Q1DEk6-g6m5lFXFiopeJ_E2OPia1BHf4k6XgTgNFW1YNdacxO1NF1UF_p8ap96ljC-Kui99pL8cTVddqX-iBnqOWvOpa6IyLgX3FIS2V7FUzmvPC-sDU44SYXB7sgfsIv4LW5rUjgnouWUiqS" class="absolute inset-0 h-full w-full object-cover" alt="Fashion" />
      <div class="absolute inset-0 bg-black/15"></div>
      <div class="relative z-10 flex h-full flex-col justify-between p-16 text-white">
        <h1 class="heading-serif text-lg uppercase tracking-[0.35em]">VÕ DUY BÌNH</h1>
        <div class="max-w-md">
          <p class="heading-serif text-4xl leading-tight mb-6">Redefining modern tailoring through the lens of timeless elegance.</p>
          <div class="h-px w-24 bg-white/40"></div>
        </div>
      </div>
    </section>

    <section class="flex items-center justify-center p-8 md:p-24 bg-[color:var(--surface)]">
      <div class="w-full max-w-md space-y-8">
        <div class="text-center md:text-left">
          <div class="md:hidden mb-12">
            <h1 class="heading-serif text-2xl tracking-widest text-[color:var(--text)]">VÕ DUY BÌNH</h1>
          </div>
          <h2 class="heading-serif text-3xl text-[color:var(--text)] mb-2">Welcome Back</h2>
          <p class="text-[color:var(--text-soft)]">Enter your credentials to access your curated collection.</p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <button class="rounded-[0.75rem] bg-[color:var(--surface-muted)] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] transition hover:bg-[color:var(--surface-strong)]">Google</button>
          <button class="rounded-[0.75rem] bg-[color:var(--surface-muted)] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] transition hover:bg-[color:var(--surface-strong)]">Facebook</button>
        </div>
        <div class="relative flex items-center py-4">
          <div class="flex-grow border-t border-[color:var(--line)]"></div>
          <span class="mx-4 flex-shrink text-[10px] uppercase tracking-[0.22em] text-[color:var(--text-soft)]">OR LOGIN WITH</span>
          <div class="flex-grow border-t border-[color:var(--line)]"></div>
        </div>
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div class="space-y-1">
            <label class="text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--text-soft)]" for="email">Email Address</label>
            <input v-model="email" id="email" class="input-luxe" placeholder="name@example.com" type="email" required />
          </div>
          <div class="space-y-1">
            <div class="flex items-center justify-between">
              <label class="text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--text-soft)]" for="password">Password</label>
              <a class="text-[10px] uppercase tracking-[0.22em] text-[color:var(--primary)]" href="#">Forgot?</a>
            </div>
            <div class="relative">
              <input v-model="password" id="password" class="input-luxe pr-12" placeholder="••••••••" type="password" required />
              <button class="absolute right-4 top-1/2 -translate-y-1/2 text-[color:var(--text-soft)]" type="button"><span class="material-symbols-outlined text-xl">visibility</span></button>
            </div>
          </div>
          <div class="flex items-center gap-3 pt-2">
            <input id="remember" class="h-5 w-5 rounded border-[color:var(--line)] text-[color:var(--primary)]" type="checkbox" />
            <label class="text-sm text-[color:var(--text-soft)]" for="remember">Remember me on this device</label>
          </div>
          <button type="submit" class="btn-primary w-full py-4 text-sm">Sign In</button>
        </form>
        <p class="text-center text-sm text-[color:var(--text-soft)]">Don't have an account? <NuxtLink to="/auth/register" class="font-bold text-[color:var(--primary)]">Create Account</NuxtLink></p>
        <footer class="pt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 opacity-40 text-[10px] uppercase tracking-[0.22em] text-[color:var(--text-soft)]">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </footer>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useUser } from '~/composables/useUser'
const { setUser } = useUser()
const email = ref('')
const password = ref('')
async function handleLogin() { if (!email.value || !password.value) return; setUser(email.value.split('@')[0], email.value); await navigateTo('/profile') }
</script>