<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

// TODO: Optimize image
const images = [
  'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1661219355/MJ%20Portafolio/Epadilla/pexels-saulo-zayas-335887.jpg',
  'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1673364164/PadillaPortfolio/pexels-andy-vu-3244513.jpg',
  'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1672803996/PadillaPortfolio/pexels-luis-del-r%C3%ADo-15286.jpg',
];
</script>

<template>
  <div class="relative">
    <div class="w-screen h-screen bg-black bg-opacity-20 absolute z-[5]"></div>
    <ClientOnly>
      <Carousel :autoplay="5000" :wrapAround="true" class="h-screen w-full relative">
        <Slide v-for="(image, index) in images" :key="index">
          <img class="h-screen w-full object-cover object-center" :src="image" alt="Header image" />
        </Slide>
      </Carousel>
    </ClientOnly>
  </div>
</template>
