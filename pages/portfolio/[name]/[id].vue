<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import GalleryMasonry from '~/components/Gallery/GalleryMasonry.vue';
import GalleryViewer from '~/components/Gallery/GalleryViewer.vue';

const isViewerOpen = ref(false);
const imageOnViewer = ref('');

const { params } = useRoute();
const imagesToLoad = [
  'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1662786109/MJ%20Portafolio/Epadilla/pexels-pixabay-265129.jpg',
  'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1662790818/MJ%20Portafolio/Epadilla/pexels-roberto-nickson-2559941.jpg',
  'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1662790815/MJ%20Portafolio/Epadilla/pexels-lumn-167699.jpg',
  'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1662786109/MJ%20Portafolio/Epadilla/pexels-pixabay-265129.jpg',
  'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1662790818/MJ%20Portafolio/Epadilla/pexels-roberto-nickson-2559941.jpg',
  'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1662790815/MJ%20Portafolio/Epadilla/pexels-lumn-167699.jpg',
  'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1662786109/MJ%20Portafolio/Epadilla/pexels-pixabay-265129.jpg',
  'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1662786109/MJ%20Portafolio/Epadilla/pexels-pixabay-265129.jpg',
  'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1662786109/MJ%20Portafolio/Epadilla/pexels-pixabay-265129.jpg',
  'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1662786109/MJ%20Portafolio/Epadilla/pexels-pixabay-265129.jpg',
];

function openViewer(imageClicked) {
  imageOnViewer.value = imagesToLoad[imageClicked];
  isViewerOpen.value = true;
}

function closeViewer() {
  isViewerOpen.value = false;
}

function getImagesChunks(images = [], size) {
  let baseImages = images.slice();
  const chunks = [];

  while (baseImages.length > size) {
    const chunk = baseImages.slice(0, size);
    chunks.push(chunk);

    baseImages = baseImages.slice(size);
  }

  chunks.push(baseImages);
  return chunks;
}

const galleryImages = getImagesChunks(imagesToLoad, 5);
</script>

<template>
  <article class="mt-32 max-w-7xl mx-auto px-8 pb-8">
    <header class="flex items-center">
      <NuxtLink :to="`/portfolio/${params.name}`">
        <h1 class="text-3xl md:text-5xl text-black uppercase">{{ params.name }}</h1>
      </NuxtLink>
      <span class="h-3 w-3 bg-black rounded-full ml-3"></span>
      <span class="ml-8 text-2xl uppercase">Lopez Perez</span>
    </header>
    <div class="mt-8">
      <GalleryMasonry v-for="images in galleryImages" :images="images" @view="openViewer" />
    </div>
    <Transition>
      <GalleryViewer v-show="isViewerOpen" @close="closeViewer" :viewing-image="imageOnViewer" />
    </Transition>
  </article>
</template>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
