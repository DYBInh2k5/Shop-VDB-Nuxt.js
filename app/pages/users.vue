<template>
  <div class="space-y-8 pb-12">
    <header class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="section-label mb-3">Community</p>
        <h1 class="heading-serif text-4xl sm:text-5xl">Users</h1>
      </div>
      <NuxtLink to="/users/add" class="btn-primary">Add user</NuxtLink>
    </header>

    <div class="grid gap-6 md:grid-cols-3">
      <article class="rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
        <p class="text-[10px] uppercase tracking-[0.24em] text-[color:var(--text-soft)]">Total users</p>
        <p class="mt-3 heading-serif text-4xl text-[color:var(--primary)]">{{ users?.length || 0 }}</p>
      </article>
      <article class="rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
        <p class="text-[10px] uppercase tracking-[0.24em] text-[color:var(--text-soft)]">Active</p>
        <p class="mt-3 heading-serif text-4xl">08</p>
      </article>
      <article class="rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
        <p class="text-[10px] uppercase tracking-[0.24em] text-[color:var(--text-soft)]">Featured</p>
        <p class="mt-3 heading-serif text-4xl">03</p>
      </article>
    </div>

    <div v-if="pending" class="py-24 text-center text-[color:var(--text-soft)]">Loading users...</div>
    <div v-else-if="error" class="rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-8 text-[color:var(--primary)]">{{ error.message }}</div>

    <div v-else class="grid gap-6 lg:grid-cols-2">
      <article v-for="item in users" :key="item.id" class="rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
        <div class="flex items-start gap-4">
          <div class="flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--primary)] text-lg font-bold text-white">{{ item.name.charAt(0).toUpperCase() }}</div>
          <div class="flex-1">
            <div class="flex items-start justify-between gap-4">
              <div>
                <h2 class="heading-serif text-2xl">{{ item.name }}</h2>
                <p class="text-sm text-[color:var(--text-soft)]">@{{ item.username }}</p>
              </div>
              <span class="badge-pill">ID {{ item.id }}</span>
            </div>
            <div class="mt-4 space-y-2 text-sm text-[color:var(--text-soft)]">
              <p>{{ item.email }}</p>
              <p>{{ item.phone }}</p>
              <p>{{ item.website }}</p>
            </div>
            <NuxtLink :to="`/users/${item.id}`" class="btn-ghost mt-5">View details</NuxtLink>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
const { data: users, pending, error } = await useFetch('https://jsonplaceholder.typicode.com/users')
</script>