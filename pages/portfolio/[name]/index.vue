<script setup>
// Main Page for each gallery
// Nuxt/Content components are failing to import functions from #imports
import { provide, ref } from 'vue';
import { useRoute } from 'vue-router';

import { getTitleId } from '~/lib/gallery/title';
import PortfolioGrid from '~/components/Portfolio/PortfolioGrid.vue';
import PortfolioCard from '~/components/Portfolio/PortfolioCard.vue';
import PortfolioEmpty from '~/components/Portfolio/PortfolioEmpty.vue';

const { params } = useRoute();
const { name: galleryName } = params;
provide('portfolio-type', galleryName);

/**
 * Page: Fetch Data
 */
const { data: projects } = await useAsyncData(`projects_${galleryName}`, async () =>
  queryContent('projects')
    .where({ category: galleryName })
    .only(['name', 'thumbnail', 'title'])
    .find()
);
</script>

<template>
  <article class="mt-32 max-w-7xl mx-auto px-8 pb-8">
    <header class="flex items-center">
      <h1 class="text-3xl md:text-5xl text-black uppercase">{{ params.name }}</h1>
      <span class="h-3 w-3 bg-black rounded-full ml-3"></span>
    </header>
    <PortfolioGrid class="mt-8" v-if="projects.length">
      <PortfolioCard
        v-for="(project, index) in projects"
        :key="index"
        :name="project.name"
        :thumbnail-url="project.thumbnail"
        :gallery-id="getTitleId(project.title)"
      />
    </PortfolioGrid>
    <PortfolioEmpty v-else class="mt-8" />
  </article>
</template>
