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
  modelValue: {
    type: String,
    default: '',
  },
});

defineEmits(['update:modelValue']);
</script>

<template>
  <div class="text-black flex flex-col">
    <label :for="name" class="uppercase tracking-widest text-sm">{{ label }}</label>
    <textarea
      :name="name"
      class="border-b-2 border-black mt-1"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
