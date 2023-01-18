<script setup>
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

/**
 * Page: Fetch Data
 */
const { data: homePage } = await useAsyncData('home_page', () =>
  queryContent('pages').where({ name: 'home' }).findOne()
);

const images = homePage.value.slider;
</script>

<template>
  <div class="relative">
    <div class="w-screen h-screen bg-black bg-opacity-20 absolute z-[5]"></div>
    <ClientOnly>
      <Carousel :autoplay="5000" :wrapAround="true" class="h-full w-full relative">
        <Slide v-for="(image, index) in images" :key="index">
          <img class="h-screen w-full object-cover object-center" :src="image" alt="Header image" />
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </ClientOnly>
  </div>
</template>

<style>
.carousel__pagination {
  @apply absolute bottom-4 w-full z-20;
}

.carousel__pagination-button::after {
  background-color: #a3a3a3;
}

.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  background-color: white;
}
</style>
