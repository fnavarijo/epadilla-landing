<script setup>
// Main Page for each gallery
// Nuxt/Content components are failing to import functions from #imports
import { provide } from 'vue';
import { useRoute } from 'vue-router';
import PortfolioGrid from '~/components/Portfolio/PortfolioGrid.vue';
import PortfolioCard from '~/components/Portfolio/PortfolioCard.vue';

const { params } = useRoute();
// TODO: Add the where for the gallery type (bodas, general, etc)
const { data: projects } = await useAsyncData('projects ', () =>
  queryContent('projects').only(['name', 'thumbnail', 'title']).find()
);

console.log(projects);

provide('portfolio-type', params.name);
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
        gallery-id="1"
      />
    </PortfolioGrid>
  </article>
</template>
