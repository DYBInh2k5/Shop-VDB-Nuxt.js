<template>
  <div class="space-y-16 pb-16 pt-2">
    <section class="space-y-6">
      <div class="relative overflow-hidden rounded-[0.75rem] bg-[color:var(--surface-muted)]">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoZp2EXJRX4KynAh7kE3_eCAF2KGCg6yVrIX8k4PShQWA8pTimBGIYv66yLio5Poctfcsa0D4mUOXy4eh-wEb28qP5FWzUIkVT8CwgBbY4Snj9nDzVu5aKlCndpUAiyGdec0lg5Acobc17dN1tq_zVsOPmOe6YVP6APT0IS_ruoBLArrD8eTJ7fUTTWSen60v9SJHUeL-wdUqwFJ0jAlnphpXZVPQ95K3S_El6cLF2vlovh3Y8CQ9d3EG9DPpuqLbeBjKMpMGezDHC" class="h-[320px] w-full object-cover sm:h-[420px]" alt="Atelier" />
        <div class="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent"></div>
        <div class="absolute left-6 top-6 text-white sm:left-10 sm:top-10">
          <div class="heading-serif text-lg uppercase tracking-[0.35em]">VÕ DUY BÌNH</div>
          <h1 class="mt-6 max-w-xl heading-serif text-4xl leading-tight sm:text-6xl">Nghệ thuật của sự tĩnh lặng.</h1>
        </div>
      </div>
      <p class="max-w-3xl text-sm leading-7 text-[color:var(--text-soft)] sm:text-base">From a small atelier to a refined fashion house, VO DUY BINH brings modern minimalism together with Vietnamese craft.</p>
    </section>

    <section class="grid gap-6 lg:grid-cols-[420px,1fr] lg:items-center">
      <div class="overflow-hidden rounded-[0.75rem] bg-[color:var(--surface-muted)] p-0">
        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop" class="h-[420px] w-full object-cover" alt="Craft" />
      </div>
      <div>
        <p class="section-label mb-4">Câu chuyện của chúng tôi</p>
        <h2 class="heading-serif text-4xl sm:text-5xl">Chúng tôi tạo ra những món đồ để mặc lâu dài, không phải theo mùa.</h2>
        <p class="mt-5 max-w-2xl text-sm leading-7 text-[color:var(--text-soft)] sm:text-base">Each piece is built with attention to silhouette, texture, and longevity. Breathable fabrics and clean finishes keep the collection timeless, while every detail is handled with quiet precision.</p>
      </div>
    </section>

    <section class="grid gap-6 md:grid-cols-3">
      <article class="rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
        <p class="section-label mb-3">Craft</p>
        <h3 class="heading-serif text-2xl">Carefully made</h3>
        <p class="mt-3 text-sm leading-7 text-[color:var(--text-soft)]">Each piece is built with attention to silhouette, texture, and longevity.</p>
      </article>
      <article class="rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
        <p class="section-label mb-3">Materials</p>
        <h3 class="heading-serif text-2xl">Natural feel</h3>
        <p class="mt-3 text-sm leading-7 text-[color:var(--text-soft)]">Breathable fabrics and clean finishes keep the collection timeless.</p>
      </article>
      <article class="rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
        <p class="section-label mb-3">Service</p>
        <h3 class="heading-serif text-2xl">Quiet confidence</h3>
        <p class="mt-3 text-sm leading-7 text-[color:var(--text-soft)]">Fast support, clean checkout, and a premium digital experience from start to finish.</p>
      </article>
    </section>

    <section class="grid gap-6 md:grid-cols-4">
      <article v-for="stat in stats" :key="stat.label" class="rounded-[0.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6 text-center">
        <p class="heading-serif text-4xl text-[color:var(--primary)]">{{ stat.value }}</p>
        <p class="mt-3 text-[10px] uppercase tracking-[0.24em] text-[color:var(--text-soft)]">{{ stat.label }}</p>
      </article>
    </section>

    <section class="grid gap-6 lg:grid-cols-[1fr,420px] lg:items-center">
      <div class="overflow-hidden rounded-[0.75rem] bg-[color:var(--surface-muted)]">
        <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop" class="h-[320px] w-full object-cover" alt="Founder" />
      </div>
      <div>
        <p class="section-label mb-4">Our Philosophy</p>
        <blockquote class="heading-serif text-3xl leading-tight sm:text-4xl">Thiết kế đẹp nhất là thiết kế khiến người mặc cảm thấy tự tin mà không cần lên tiếng.</blockquote>
        <p class="mt-4 text-sm uppercase tracking-[0.24em] text-[color:var(--text-soft)]">Võ Duy Binh, Creative Director</p>
        <div class="mt-8 flex gap-3">
          <NuxtLink to="/products" class="btn-primary">Shop Collection</NuxtLink>
          <NuxtLink to="/users" class="btn-ghost">Community</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const stats = [
  { value: '01', label: 'Atelier' },
  { value: '02', label: 'Collections' },
  { value: '03', label: 'Craftsmen' },
  { value: '04', label: 'Countries' },
]
</script>