<script setup>
const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="masonry mt-3">
    <!-- TODO: Lazy load this images -->
    <div
      v-for="(image, index) in images"
      :key="index"
      class="w-full h-full bg-no-repeat bg-cover bg-center"
      :class="`block-${index + 1}`"
      :style="{
        backgroundImage: `url(${image})`,
      }"
      @click="$emit('view', index)"
    ></div>
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
