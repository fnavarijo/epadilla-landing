<script setup>
import { ref, computed } from 'vue';

import MenuIcon from '~/assets/images/menu.png';
import CloseIcon from '~/assets/images/close.png';
import HamburgerIcon from '~/components/Icon/HamburgerIcon.vue';

// TODO: Duplicated
const props = defineProps({
  isWhite: {
    type: Boolean,
    default: false,
  },
  portfolios: {
    type: Array,
    default: () => [],
  },
});

const isOpen = ref(false);
const hamburgerIcon = ref(null);

const logoImage = computed(() =>
  props.isWhite
    ? 'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1660831973/MJ%20Portafolio/Epadilla/EP_Logo_white.png'
    : 'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1660831973/MJ%20Portafolio/Epadilla/EP_Logo.png'
);

function closeMenu() {
  isOpen.value = false;
  hamburgerIcon.value.triggerMenu();
}
</script>

<template>
  <div class="p-4 pr-6 w-full flex place-items-center justify-between">
    <NuxtLink to="/"><img class="w-20" :src="logoImage" alt="" /></NuxtLink>
    <div class="relative w-8 h-8">
      <button @click="isOpen = !isOpen" class="absolute z-50">
        <HamburgerIcon ref="hamburgerIcon" />
      </button>
    </div>
    <div class="absolute">
      <div
        class="fixed top-0 left-0 h-screen w-screen bg-black/80 z-40 panel-overlay"
        :class="[isOpen ? 'visible opacity-100' : 'invisible opacity-0']"
      ></div>
      <div
        class="fixed top-0 right-0 min-h-screen w-2/3 bg-white z-40 p-4 pr-6 flex flex-col items-end panel-slide"
        :class="[isOpen ? 'translate-x-0' : 'translate-x-full']"
      >
        <nav class="mt-20">
          <ul class="uppercase tracking-widest">
            <li class="flex flex-col">
              <span class="self-end">Portafolio</span>
              <ul class="text-right pr-2 space-y-2 border-r-2 mt-2 border-black">
                <li v-for="(portfolio, index) in portfolios" class="text-sm">
                  <NuxtLink
                    @click="closeMenu"
                    :key="index"
                    :to="`/portfolio/${portfolio.toLowerCase()}`"
                    >{{ portfolio }}</NuxtLink
                  >
                </li>
              </ul>
            </li>
            <li class="mt-8 text-right">
              <NuxtLink
                class="uppercase tracking-widest"
                @click="closeMenu"
                to="mailto:enriquetono95@gmail.com"
                target="_blank"
              >
                Escríbeme
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
.panel-slide {
  @apply transition-transform duration-500 ease-slide-ease-out;
}

.panel-overlay {
  transition: opacity theme(transitionDuration.500) theme(transitionTimingFunction[slide-ease-out]);
}
</style>
