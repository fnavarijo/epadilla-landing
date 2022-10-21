<script setup>
defineProps({
  type: {
    type: String,
    default: 'button',
  },
});
</script>

<template>
  <button class="uppercase tracking-widest bg-black py-6 px-14 text-white">
    <slot />
  </button>
</template>
