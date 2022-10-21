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
});

const isOpen = ref(false);

const logoImage = computed(() =>
  props.isWhite
    ? 'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1660831973/MJ%20Portafolio/Epadilla/EP_Logo_white.png'
    : 'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1660831973/MJ%20Portafolio/Epadilla/EP_Logo.png'
);
</script>

<template>
  <div class="p-4 pr-6 w-full flex place-items-center justify-between">
    <div>
      <NuxtLink to="/"><img class="w-20" :src="logoImage" alt="" /></NuxtLink>
    </div>
    <div class="relative w-8 h-8">
      <button @click="isOpen = !isOpen" class="absolute z-50"><HamburgerIcon /></button>
    </div>
    <div class="absolute">
      <div
        class="fixed top-0 left-0 h-screen w-screen bg-black/80 z-40"
        :class="[isOpen ? 'visible' : 'invisible']"
      ></div>
      <div
        class="fixed top-0 right-0 min-h-screen w-2/3 bg-white z-40 p-4 pr-6 flex flex-col items-end"
        :class="[isOpen ? 'translate-x-0' : 'translate-x-full']"
      >
        <nav class="mt-12">
          <ul class="uppercase tracking-widest">
            <li>Portafolio</li>
            <ul class="text-right pr-2 space-y-2 border-r-2 mt-2 border-black">
              <li class="text-sm">
                <NuxtLink @click="isOpen = false" to="/portfolio/bodas">Bodas</NuxtLink>
              </li>
              <li class="text-sm">
                <NuxtLink @click="isOpen = false" to="/portfolio/general">Proyectos</NuxtLink>
              </li>
            </ul>
          </ul>
        </nav>
        <NuxtLink
          class="absolute uppercase tracking-widest bottom-4 self-center"
          @click="isOpen = false"
          to="/contact"
        >
          Escríbeme
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
