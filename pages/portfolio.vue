<script setup>
import PortfolioGrid from '~/components/Portfolio/PortfolioGrid.vue';
import PortfolioCard from '~/components/Portfolio/PortfolioCard.vue';
</script>

<template>
  <article class="mt-32 max-w-7xl mx-auto px-8">
    <header class="flex items-center">
      <h1 class="text-3xl md:text-5xl text-black uppercase">Bodas</h1>
      <span class="h-3 w-3 bg-black rounded-full ml-3"></span>
    </header>
    <PortfolioGrid class="mt-4">
      <PortfolioCard key="1" lastnames="Navarijo Morales" />
      <PortfolioCard key="2" lastnames="Padilla Mendez" />
      <PortfolioCard key="3" lastnames="Villatoro Soto" />
      <PortfolioCard key="4" lastnames="Lopez Perez" />
    </PortfolioGrid>
  </article>
</template>
