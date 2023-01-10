<script setup>
const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
  // This parameter is more to track position.
  // I feel is the parent who should handle it.
  // Need to investigate how to handle encapsulation with vue
  offsetIndex: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="masonry mt-3">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="w-full h-full cursor-pointer transition-transform duration-75 ease-linear hover:scale-[1.03]"
      :class="`block-${index + 1}`"
      @click="$emit('view', offsetIndex + index)"
    >
      <img
        class="object-cover w-full h-full"
        :src="image"
        alt="Imagen de la galería"
        loading="lazy"
      />
    </div>
  </div>
</template>

<style scoped>
.masonry {
  @apply grid grid-cols-6 grid-rows-masonry gap-3;
  /* This could be parametrized */
  /* Or generated 🤔 */
  grid-template-areas:
    'area1 area1 area2 area2 area2 area4'
    'area1 area1 area2 area2 area2 area5'
    'area1 area1 area3 area3 area3 area5';
}

.block-1 {
  grid-area: area1;
}

.block-2 {
  grid-area: area2;
}

.block-3 {
  grid-area: area3;
}

.block-4 {
  grid-area: area4;
}

.block-5 {
  grid-area: area5;
}
</style>
