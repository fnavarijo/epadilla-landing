<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const props = defineProps({
  isWhite: {
    type: Boolean,
    default: false,
  },
});

const logoImage = computed(() =>
  props.isWhite
    ? 'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1660831973/MJ%20Portafolio/Epadilla/EP_Logo_white.png'
    : 'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1660831973/MJ%20Portafolio/Epadilla/EP_Logo.png'
);

function isCurrentPath(path) {
  return route.path.includes(path);
}
</script>

<template>
  <div class="nav-menu" :class="[isWhite ? 'text-white' : 'text-black']">
    <nav class="grid grid-cols-2 items-center">
      <NuxtLink to="/">
        <img class="w-24" :src="logoImage" alt="" />
      </NuxtLink>
      <ul class="flex justify-self-end space-x-8">
        <li
          class="nav-item uppercase tracking-widest group"
          :class="[
            isWhite ? 'before:bg-white' : 'before:bg-black',
            { 'is-active': isCurrentPath('/portfolio') },
          ]"
        >
          <span>Portafolio</span>
          <div
            class="nav-item-submenu h-0 overflow-y-hidden min-w-[10ch] relative transition-all duration-100 ease-linear"
          >
            <ul
              class="pr-2 py-2 space-y-3 text-right border-r-2 absolute right-0 bottom-0"
              :class="[isWhite ? 'border-white' : 'border-black']"
            >
              <li class="text-sm"><NuxtLink to="/portfolio/bodas">Bodas</NuxtLink></li>
              <li class="text-sm">
                <NuxtLink to="/portfolio/general">Proyectos</NuxtLink>
              </li>
            </ul>
          </div>
        </li>
        <li
          class="nav-item uppercase tracking-widest"
          :class="[
            isWhite ? 'before:bg-white' : 'before:bg-black',
            { 'is-active': isCurrentPath('/contact') },
          ]"
        >
          <NuxtLink to="/contact"> Escríbeme </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.nav-item {
  @apply relative transition-all duration-200 ease-fast-in;
}

.nav-item::before {
  content: '';
  @apply h-[2px] w-0 absolute -top-1 transition-all duration-100 ease-linear;
}

.is-active.nav-item::before {
  @apply w-1/2;
}

.nav-item:hover::before {
  @apply w-1/2;
}

.nav-item-submenu {
  /* 200% - for each element */
  /* 20px - spacing between list elements and padding of container */
  --submenu-height: calc(200% + 20px);
  @apply group-hover:h-[var(--submenu-height)];
}
</style>
