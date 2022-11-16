<script setup>
// Main Page for each gallery
// Nuxt/Content components are failing to import functions from #imports
import { provide } from 'vue';
import { useRoute } from 'vue-router';
import PortfolioGrid from '~/components/Portfolio/PortfolioGrid.vue';
import PortfolioCard from '~/components/Portfolio/PortfolioCard.vue';

const { params } = useRoute();
const { data } = await useAsyncData('projects ', () => queryContent('/').find());

console.log('Response', data.value);

provide('portfolio-type', params.name);
</script>

<template>
  <article class="mt-32 max-w-7xl mx-auto px-8 pb-8">
    <header class="flex items-center">
      <h1 class="text-3xl md:text-5xl text-black uppercase">{{ params.name }}</h1>
      <span class="h-3 w-3 bg-black rounded-full ml-3"></span>
    </header>
    <PortfolioGrid class="mt-8">
      <PortfolioCard key="1" lastnames="Lopez Perez" gallery-id="1" />
      <PortfolioCard key="2" lastnames="Lopez Perez" gallery-id="2" />
      <PortfolioCard key="3" lastnames="Lopez Perez" gallery-id="3" />
      <PortfolioCard key="4" lastnames="Lopez Perez" gallery-id="4" />
      <PortfolioCard key="1" lastnames="Lopez Perez" gallery-id="5" />
      <PortfolioCard key="1" lastnames="Lopez Perez" gallery-id="6" />
    </PortfolioGrid>
    <div>Data: {{ data }}</div>
  </article>
</template>
