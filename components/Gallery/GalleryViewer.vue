<script setup>
import { ref, watch, onMounted } from 'vue';

import closeIcon from '~/assets/images/close_white.png';
import chevron from '~/assets/images/chevron.png';
import LoaderImage from '../Image/LoaderImage.vue';

import { transformator } from '~/lib/gallery/transformations';

// TODO: Probably move to the state could be better.
const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
  viewedImage: {
    type: Number,
    required: true,
  },
});

const imageViewedIndex = ref(0);

onMounted(() => {
  imageViewedIndex.value = props.viewedImage || 0;
});

watch(
  () => props.viewedImage,
  (viewedImage) => (imageViewedIndex.value = viewedImage)
);

function viewNextImage() {
  imageViewedIndex.value = (imageViewedIndex.value + 1) % props.images.length;
}

function viewPreviousImage() {
  imageViewedIndex.value =
    imageViewedIndex.value <= 0 ? props.images.length - 1 : imageViewedIndex.value - 1;
}

function getOptimizedImage(image) {
  return Boolean(image) && transformator.getGalleryImage(transformator.getImagePath(image));
}
</script>

<template>
  <!-- TODO: Because is fixed, the padding counts behind the scroll bar -->
  <div class="h-screen-fluid p-4 md:p-8 fixed bg-black/80 w-screen top-0 left-0 z-50">
    <article class="w-full viewer-grid">
      <button
        class="action-button justify-self-end self-center grid-area-close"
        @click="$emit('close')"
      >
        <img :src="closeIcon" class="h-6 w-6" alt="Close dialog" />
      </button>
      <div class="w-full h-full flex justify-center">
        <LoaderImage
          class="h-full object-contain w-full grid-area-content place-self-center"
          :src="getOptimizedImage(images[imageViewedIndex])"
          alt=""
          :key="imageViewedIndex"
        />
      </div>
      <div class="flex place-self-center grid-area-controls space-x-12">
        <button class="action-button" @click="viewPreviousImage">
          <img :src="chevron" class="h-6 w-6 transform rotate-90" alt="" />
        </button>
        <button class="action-button" @click="viewNextImage">
          <img :src="chevron" class="h-6 w-6 transform -rotate-90" alt="" />
        </button>
      </div>
    </article>
  </div>
</template>

<style>
.viewer-grid {
  @apply grid grid-rows-viewer grid-cols-1 gap-y-4 h-full;
}

.viewer-grid > * {
  min-height: 0;
}

.grid-area-close {
  grid-row-start: close;
}

.grid-area-content {
  grid-row-start: content;
}

.grid-area-controls {
  grid-row-start: controls;
}

.action-button {
  @apply p-2 flex justify-center items-center rounded-full hover:bg-black/90 transition-colors duration-150 ease-fast-in-bg;
}
</style>
