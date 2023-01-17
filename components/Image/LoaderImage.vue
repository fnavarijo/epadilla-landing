<script setup>
import { ref } from 'vue';

defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
});

const isLoaded = ref(false);

function imageLoaded() {
  isLoaded.value = true;
}
</script>

<template>
  <div>
    <div class="w-full h-full flex justify-center items-center" v-show="!isLoaded">
      <div
        class="h-12 w-12 border border-white loader hover:bg-white transition-colors duration-100 ease-linear"
      ></div>
    </div>
    <img
      class="w-full h-full object-contain"
      :class="[isLoaded ? 'opacity-100' : 'opacity-0']"
      :src="src"
      :alt="alt"
      loading="lazy"
      @load="imageLoaded"
    />
  </div>
</template>

<style scoped>
.loader {
  animation: load-square 1s ease-in-out infinite;
}

@keyframes load-square {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(180deg);
  }
}
</style>
