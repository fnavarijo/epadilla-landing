<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  console.log('checking identity...');
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on('init', (user) => {
      if (!user) {
        window.netlifyIdentity.on('login', () => {
          document.location.href = '/admin/';
        });
      }
    });
  }
});
</script>

<template>
  <span />
</template>
