<template>
  <div class="border rounded-lg p-3 mt-4 shadow">
    <h3 class="font-bold text-lg">👤 {{ name }}</h3>
    <p>Tuổi: {{ age }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  age: Number
})
</script>
