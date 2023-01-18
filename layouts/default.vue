<script setup>
import { onMounted } from 'vue';
import debounce from 'lodash/debounce';

import AppIdentity from '~/components/AppIdentity.vue';

onMounted(() => {
  if (window) {
    updateVh();
    window.addEventListener('resize', updateVHDebounced);
  }
});

function updateVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--base-vh', `${vh}px`);
}

const updateVHDebounced = debounce(updateVh, 100);
</script>

<template>
  <div>
    <AppIdentity />
    <slot />
  </div>
</template>
