<template>
  <div class="mx-auto max-w-5xl pb-12">
    <div class="grid gap-8 lg:grid-cols-[320px,1fr]">
      <aside class="rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-8 text-center lg:sticky lg:top-28 lg:h-fit">
        <div class="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[color:var(--primary)] text-3xl font-bold text-white">
          {{ userInitial }}
        </div>
        <h1 class="mt-6 heading-serif text-4xl">{{ user?.name || 'Guest' }}</h1>
        <p class="mt-3 text-sm text-[color:var(--text-soft)]">{{ user?.email || 'No email saved yet' }}</p>
        <div class="mt-8 space-y-3 text-left text-sm">
          <div class="rounded-[0.75rem] border border-[color:var(--line)] bg-white/70 p-4">
            <p class="section-label mb-2">Account</p>
            <p class="text-[color:var(--text-soft)]">Name: <span class="font-semibold text-[color:var(--text)]">{{ user?.name || '-' }}</span></p>
            <p class="mt-2 text-[color:var(--text-soft)]">Email: <span class="font-semibold text-[color:var(--text)]">{{ user?.email || '-' }}</span></p>
          </div>
          <div class="rounded-[0.75rem] border border-[color:var(--line)] bg-white/70 p-4">
            <p class="section-label mb-2">Security</p>
            <p class="text-[color:var(--text-soft)]">Use Logout if you are on a shared device.</p>
            <button class="btn-ghost mt-4 w-full" @click="logout">Logout</button>
          </div>
        </div>
      </aside>

      <section class="space-y-6">
        <div class="rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-8 sm:p-10">
          <p class="section-label mb-4">Profile</p>
          <h2 class="heading-serif text-4xl sm:text-5xl">Your private atelier account</h2>
          <p class="mt-5 max-w-2xl text-sm leading-7 text-[color:var(--text-soft)]">Manage your saved details, review your order history, and keep your checkout experience fast and consistent.</p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <article class="rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
            <p class="text-[10px] uppercase tracking-[0.24em] text-[color:var(--text-soft)]">Orders</p>
            <p class="mt-4 heading-serif text-3xl">12</p>
          </article>
          <article class="rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
            <p class="text-[10px] uppercase tracking-[0.24em] text-[color:var(--text-soft)]">Wishlist</p>
            <p class="mt-4 heading-serif text-3xl">08</p>
          </article>
          <article class="rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
            <p class="text-[10px] uppercase tracking-[0.24em] text-[color:var(--text-soft)]">Member since</p>
            <p class="mt-4 heading-serif text-3xl">2026</p>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUser } from '~/composables/useUser'

const { user, clearUser } = useUser()
const userInitial = computed(() => user.value?.name?.charAt(0).toUpperCase() || 'U')

async function logout() {
  clearUser()
  await navigateTo('/')
}
</script>