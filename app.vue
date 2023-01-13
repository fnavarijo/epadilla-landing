<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import AppNavbar from '~/components/AppNavbar.vue';
import AppNavbarMobile from '~/components/AppNavbarMobile.vue';

const route = useRoute();

const isHomePageRoute = (path) => path === '/';
const isHomePage = ref(isHomePageRoute(route.path));

watch(
  () => route.path,
  (newPath) => (isHomePage.value = isHomePageRoute(newPath))
);

/**
 * Page: Fetch Data
 */
const { data: navigation } = await useAsyncData('navigation', () =>
  queryContent('categories').only(['name']).find()
);

const portfolios = navigation.value.map(({ name }) => name);
</script>

<template>
  <NuxtLayout>
    <div>
      <AppNavbar
        class="w-full max-w-7xl hidden md:block"
        :class="[isHomePage ? 'absolute z-10 left-1/2 -translate-x-1/2' : 'mx-auto']"
        :is-white="isHomePage"
        :portfolios="portfolios"
      />
      <AppNavbarMobile class="absolute md:hidden z-20 top-0 left-0" :portfolios="portfolios" />

      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style>
@import './assets/style/index.css';

:root {
  --transition-page-time: 0.3s;
}

.slide-right-enter-active {
  transition: all var(--transition-page-time) var(--transition-page-time);
}
.slide-right-leave-active {
  transition: all var(--transition-page-time);
}

.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-5%);
}

.slide-left-enter-active {
  transition: all var(--transition-page-time) var(--transition-page-time);
}
.slide-left-leave-active {
  transition: all var(--transition-page-time);
}
.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(5%);
}
</style>
