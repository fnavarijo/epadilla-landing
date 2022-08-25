<script setup>
import { provide } from 'vue';
import { useRoute } from 'vue-router';
import PortfolioGrid from '~/components/Portfolio/PortfolioGrid.vue';
import PortfolioCard from '~/components/Portfolio/PortfolioCard.vue';

const { params } = useRoute();

provide('portfolio-type', params.name);
</script>

<template>
  <article class="mt-32 max-w-7xl mx-auto px-8">
    <header class="flex items-center">
      <h1 class="text-3xl md:text-5xl text-black uppercase">{{ params.name }}</h1>
      <span class="h-3 w-3 bg-black rounded-full ml-3"></span>
    </header>
    <PortfolioGrid class="mt-4">
      <PortfolioCard key="1" lastnames="Lopez Perez" gallery-id="1" />
      <PortfolioCard key="2" lastnames="Lopez Perez" gallery-id="2" />
      <PortfolioCard key="3" lastnames="Lopez Perez" gallery-id="3" />
      <PortfolioCard key="4" lastnames="Lopez Perez" gallery-id="4" />
      <PortfolioCard key="1" lastnames="Lopez Perez" gallery-id="5" />
      <PortfolioCard key="1" lastnames="Lopez Perez" gallery-id="6" />
    </PortfolioGrid>
  </article>
</template>
