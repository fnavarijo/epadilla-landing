<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import AppNavbar from '~/components/AppNavbar.vue';
// import AppNavbarMobile from '~/components/AppNavbarMobile.vue';

const route = useRoute();

const isHomePageRoute = (path) => path === '/';
const isHomePage = ref(isHomePageRoute(route.path));

watch(
  () => route.path,
  (newPath) => (isHomePage.value = isHomePageRoute(newPath))
);
</script>

<template>
  <div>
    <AppNavbar
      class="w-full max-w-7xl hidden md:block"
      :class="[isHomePage ? 'absolute z-10 left-1/2 -translate-x-1/2' : 'mx-auto']"
      :is-white="isHomePage"
    />
    <!-- <AppNavbarMobile class="absolute md:hidden z-20 top-0 left-0" /> -->

    <NuxtPage />
  </div>
</template>

<style>
@import './assets/style/index.css';
</style>
