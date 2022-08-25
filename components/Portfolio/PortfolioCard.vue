<script setup>
import { inject } from 'vue';

defineProps({
  lastnames: {
    type: String,
    required: true,
  },
});

const itemType = inject('portfolio-type');
</script>

<template>
  <div
    class="relative text-white aspect-[1/1.5] bg-no-repeat bg-cover bg-[url('https://res.cloudinary.com/dkvtpo8w1/image/upload/v1661277762/MJ%20Portafolio/Epadilla/pexels-cliford-mervil-2469122.jpg')] group"
  >
    <div
      class="background-transition bg-black h-full w-full absolute top-0 left-0 right-0 bottom-0 invisible opacity-0 group-hover:visible group-hover:opacity-40"
    ></div>
    <div class="px-8 absolute bottom-8 flex flex-col items-center w-full">
      <span
        class="text-transition uppercase tracking-widest font-light text-sm relative -top-4 opacity-0 group-hover:top-0 group-hover:opacity-100"
      >
        {{ itemType }}
      </span>
      <div class="separator-transition h-[1px] bg-white mt-2 w-0 group-hover:w-2/3"></div>
      <span
        class="text-transition text-2xl uppercase mt-4 inline-block text-center relative -bottom-2 opacity-0 group-hover:bottom-0 group-hover:opacity-100"
      >
        {{ lastnames }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.separator-transition {
  @apply transition-size duration-100 ease-fast-in delay-75;
}

.text-transition {
  @apply transition-position-opacity duration-100 ease-fast-in delay-150;
}

.background-transition {
  transition: visibility 75ms linear 75ms, opacity 75ms linear;
}
</style>
