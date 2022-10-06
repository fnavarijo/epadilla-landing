<script setup>
import closeIcon from '~/assets/images/close_white.png';
import chevron from '~/assets/images/chevron.png';

// TODO: Probably move to the state could be better.
defineProps({
  viewingImage: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <!-- TODO: disable scroll -->
  <!-- TODO: Because is fixed, the padding counts behind the scroll bar -->
  <div
    class="px-8 fixed bg-black/60 w-screen h-screen top-0 left-0 flex justify-center items-center"
  >
    <article class="w-full md:w-[90%] min-h-[75%] max-h-[90%] viewer-grid">
      <div
        class="action-button justify-self-end self-center grid-area-close"
        @click="$emit('close')"
      >
        <img :src="closeIcon" class="h-6 w-6" alt="Close dialog" />
      </div>

      <!-- // TODO: Check how it behaves with vertical images -->
      <img
        class="h-full object-contain w-full max-w-6xl grid-area-content"
        :src="viewingImage"
        alt=""
      />
      <div class="flex justify-between items-center grid-area-controls">
        <div class="action-button">
          <img :src="chevron" class="h-6 w-6 transform rotate-90" alt="" />
        </div>
        <div class="action-button">
          <img :src="chevron" class="h-6 w-6 transform -rotate-90" alt="" />
        </div>
      </div>
    </article>
  </div>
</template>

<style>
.viewer-grid {
  @apply grid grid-rows-viewer grid-cols-1 gap-y-4;
}

.grid-area-close {
  grid-area: close;
}

.grid-area-content {
  grid-area: content;
}

.grid-area-controls {
  grid-area: controls;
}

.action-button {
  @apply p-2 flex justify-center items-center cursor-pointer rounded-full hover:bg-black/90 transition-colors duration-150 ease-fast-in-bg;
}
</style>
