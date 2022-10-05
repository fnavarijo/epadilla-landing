<script setup>
import closeIcon from '~/assets/images/close_white.png';
import chevron from '~/assets/images/chevron.png';
</script>

<template>
  <!-- TODO: disable scroll -->
  <div
    class="px-8 fixed bg-black/60 w-screen h-screen top-0 left-0 flex justify-center items-center"
  >
    <!-- TODO: Overflow hidden is not the solution. Need to make the iamge responsive to space -->
    <article class="w-full md:w-[90%] min-h-[75%] max-h-[90%] viewer-grid">
      <div class="justify-self-end md:col-span-2 grid-area-close">
        <img :src="closeIcon" class="h-6 w-6 cursor-pointer" alt="" @click="$emit('close')" />
      </div>

      <!-- // TODO: Check how it behaves with vertical images -->
      <img
        class="h-full object-contain w-full max-w-6xl grid-area-content"
        src="https://res.cloudinary.com/dkvtpo8w1/image/upload/v1662790818/MJ%20Portafolio/Epadilla/pexels-roberto-nickson-2559941.jpg"
        alt=""
      />
      <div class="flex justify-between grid-area-controls">
        <img :src="chevron" class="h-6 w-6 transform rotate-90" alt="" />
        <img :src="chevron" class="h-6 w-6 transform -rotate-90" alt="" />
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
</style>
