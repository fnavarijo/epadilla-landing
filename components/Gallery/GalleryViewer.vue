<script setup>
import closeIcon from '~/assets/images/close_white.png';
import chevron from '~/assets/images/chevron.png';
</script>

<template>
  <!-- TODO: disable scroll -->
  <div class="fixed bg-black/60 w-screen h-screen top-0 left-0 flex justify-center items-center">
    <article class="w-4/5 min-h-[75%] grid grid-cols-viewer gap-4">
      <div class="h-full flex items-center">
        <img :src="chevron" class="h-6 w-6 transform rotate-90" alt="" />
      </div>
      <div class="bg-white">
        <img
          src="https://res.cloudinary.com/dkvtpo8w1/image/upload/v1662790818/MJ%20Portafolio/Epadilla/pexels-roberto-nickson-2559941.jpg"
          alt=""
        />
      </div>
      <div class="h-full flex items-center relative">
        <img
          :src="closeIcon"
          class="h-6 w-6 absolute top-0 cursor-pointer"
          alt=""
          @click="$emit('close')"
        />
        <img :src="chevron" class="h-6 w-6 transform -rotate-90" alt="" />
      </div>
    </article>
  </div>
</template>
