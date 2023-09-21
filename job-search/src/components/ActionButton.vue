<template>
  <button class="primary">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: ['text']
}
</script>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}
.primary {
  @apply bg-brand-blue-1 text-white hover:shadow-blue;
}
.secondary {
  @apply bg-white text-brand-blue-1 border border-brand-blue-1 hover:shadow-blue;
}
</style>
