<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="text-black flex flex-col">
    <label :for="name" class="uppercase tracking-widest text-sm">{{ label }}</label>
    <textarea :type="type" :name="name" class="border-b-2 border-black mt-1" />
  </div>
</template>
