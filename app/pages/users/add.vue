<template>
  <div class="mx-auto max-w-2xl pb-12">
    <div class="rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-8 sm:p-10">
      <p class="section-label mb-3">New user</p>
      <h1 class="heading-serif text-4xl">Add user</h1>
      <div class="mt-8">
        <UserForm />
      </div>
      <div class="mt-6 text-center">
        <NuxtLink to="/users" class="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]">Back to users</NuxtLink>
      </div>
    </div>
  </div>
</template>