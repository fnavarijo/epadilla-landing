<script setup>
import { ref, watch, onMounted } from 'vue';

import closeIcon from '~/assets/images/close_white.png';
import chevron from '~/assets/images/chevron.png';

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
</script>

<template>
  <!-- TODO: disable scroll -->
  <!-- TODO: Because is fixed, the padding counts behind the scroll bar -->
  <div
    class="px-8 fixed bg-black/60 w-screen h-screen top-0 left-0 flex justify-center items-center"
  >
    <article class="w-full md:w-[90%] min-h-[75%] max-h-[90%] viewer-grid">
      <button
        class="action-button justify-self-end self-center grid-area-close"
        @click="$emit('close')"
      >
        <img :src="closeIcon" class="h-6 w-6" alt="Close dialog" />
      </button>
      <!-- // TODO: Check how it behaves with vertical images -->
      <img
        class="h-full object-contain w-full max-w-4xl grid-area-content place-self-center"
        :src="images[imageViewedIndex]"
        alt=""
      />
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
  @apply grid grid-rows-viewer grid-cols-1 gap-y-4;
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
