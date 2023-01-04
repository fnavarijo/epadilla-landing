<script setup>
// Main Page for each gallery
// Nuxt/Content components are failing to import functions from #imports
import { provide, ref } from 'vue';
import { useRoute } from 'vue-router';

import { getTitleId } from '~/lib/gallery/title';
import PortfolioGrid from '~/components/Portfolio/PortfolioGrid.vue';
import PortfolioCard from '~/components/Portfolio/PortfolioCard.vue';

const { params } = useRoute();
provide('portfolio-type', params.name);

/**
 * Page: Fetch Data
 */
// TODO: Add the where for the gallery type (bodas, general, etc)
const { data: projects } = await useAsyncData('projects', async () =>
  queryContent('projects').only(['name', 'thumbnail', 'title']).find()
);
</script>

<template>
  <article class="mt-32 max-w-7xl mx-auto px-8 pb-8">
    <header class="flex items-center">
      <h1 class="text-3xl md:text-5xl text-black uppercase">{{ params.name }}</h1>
      <span class="h-3 w-3 bg-black rounded-full ml-3"></span>
    </header>
    <PortfolioGrid class="mt-8">
      <PortfolioCard
        v-for="(project, index) in projects"
        :key="index"
        :name="project.name"
        :thumbnail-url="project.thumbnail"
        :gallery-id="getTitleId(project.title)"
      />
    </PortfolioGrid>
  </article>
</template>
