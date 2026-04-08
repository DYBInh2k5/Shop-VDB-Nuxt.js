<template>
  <div class="mx-auto max-w-4xl pb-12">
    <div class="rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-8 sm:p-10">
      <div v-if="pending" class="text-center text-[color:var(--text-soft)]">Loading user...</div>
      <div v-else-if="error" class="text-[color:var(--primary)]">Unable to load user.</div>
      <div v-else-if="user">
        <p class="section-label mb-3">User detail</p>
        <h1 class="heading-serif text-4xl">{{ user.name }}</h1>
        <div class="mt-8 grid gap-6 sm:grid-cols-2">
          <div class="rounded-[0.75rem] border border-[color:var(--line)] bg-white/70 p-5">
            <p class="text-sm text-[color:var(--text-soft)]">Username</p>
            <p class="mt-1 font-semibold">{{ user.username }}</p>
          </div>
          <div class="rounded-[0.75rem] border border-[color:var(--line)] bg-white/70 p-5">
            <p class="text-sm text-[color:var(--text-soft)]">Email</p>
            <p class="mt-1 font-semibold">{{ user.email }}</p>
          </div>
          <div class="rounded-[0.75rem] border border-[color:var(--line)] bg-white/70 p-5">
            <p class="text-sm text-[color:var(--text-soft)]">Phone</p>
            <p class="mt-1 font-semibold">{{ user.phone }}</p>
          </div>
          <div class="rounded-[0.75rem] border border-[color:var(--line)] bg-white/70 p-5">
            <p class="text-sm text-[color:var(--text-soft)]">Company</p>
            <p class="mt-1 font-semibold">{{ user.company.name }}</p>
          </div>
        </div>
      </div>
      <div v-else class="text-center text-[color:var(--text-soft)]">No user found for ID {{ userId }}</div>
      <NuxtLink to="/users" class="btn-ghost mt-8">Back to users</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const userId = route.params.id
const { data: user, pending, error } = await useFetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
</script>