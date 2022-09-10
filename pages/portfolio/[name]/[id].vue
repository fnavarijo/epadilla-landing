<script setup>
import { useRoute } from 'vue-router';

import GalleryMasonry from '~/components/Gallery/GalleryMasonry.vue';

const { params } = useRoute();
</script>

<template>
  <article class="mt-32 max-w-7xl mx-auto px-8">
    <header class="flex items-center">
      <h1 class="text-3xl md:text-5xl text-black uppercase">{{ params.name }}</h1>
      <span class="h-3 w-3 bg-black rounded-full ml-3"></span>
      <span class="ml-8 text-2xl uppercase">Lopez Perez</span>
    </header>
    <GalleryMasonry />
  </article>
</template>
