<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

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

const subMenuHeight = ref(0);
const route = useRoute();

const logoImage = computed(() =>
  props.isWhite
    ? 'https://res.cloudinary.com/dkvtpo8w1/image/upload/c_scale,w_125/v1673881784/PadillaPortfolio/EP_Logo_white_reduced.png'
    : 'https://res.cloudinary.com/dkvtpo8w1/image/upload/c_scale,w_125/v1673881784/PadillaPortfolio/EP_Logo_reduced.png'
);

// We can refactor this to own component
onMounted(() => {
  const height = document.getElementById('submenu').offsetHeight;
  subMenuHeight.value = height;
});

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
      <ul class="flex flex-col justify-self-end mr-4 pt-8 md:pt-0 md:mr-0 md:space-x-8 md:flex-row">
        <li
          class="nav-item uppercase tracking-widest group"
          :class="[
            isWhite ? 'before:bg-white' : 'before:bg-black',
            { 'is-active': isCurrentPath('/portfolio') },
          ]"
        >
          <span>Portafolio</span>
          <div
            class="nav-item-submenu md:h-0 overflow-y-hidden absolute transition-all duration-100 ease-linear"
            :style="{ '--submenu-height': `${subMenuHeight}px` }"
          >
            <ul
              id="submenu"
              class="max-w-min pr-2 py-2 space-y-3 text-right border-r-2 relative md:absolute right-0 bottom-0"
              :class="[isWhite ? 'border-white' : 'border-black']"
            >
              <li v-for="(portfolio, index) in portfolios" class="text-sm">
                <NuxtLink :key="index" :to="`/portfolio/${portfolio.toLowerCase()}`">{{
                  portfolio
                }}</NuxtLink>
              </li>
            </ul>
          </div>
        </li>
        <li
          class="nav-item uppercase tracking-widest"
          :class="[isWhite ? 'before:bg-white' : 'before:bg-black']"
        >
          <NuxtLink to="mailto:enriquetono95@gmail.com" target="_blank"> Escríbeme </NuxtLink>
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
  --submenu-height: 0;
  @apply group-hover:h-[var(--submenu-height)];

  width: calc(100% + 0.5rem);
}
</style>
