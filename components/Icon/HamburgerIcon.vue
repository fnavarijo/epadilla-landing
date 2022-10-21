<script setup>
import { ref, onMounted } from 'vue';

const playState = ref('paused');

function triggerMenu() {
  playState.value = 'running';
}

function onAnimationIteration() {
  playState.value = 'paused';
}

onMounted(() => {
  document.getElementById('line').addEventListener('animationiteration', onAnimationIteration);
});

defineExpose({
  triggerMenu,
});
</script>

<template>
  <div
    class="hamburger h-8 w-8 relative flex justify-center items-center"
    :style="{
      '--play-state': playState,
    }"
    @click="triggerMenu"
  >
    <div id="line" class="line line-a"></div>
    <div class="line line-b"></div>
    <div class="line line-c"></div>
  </div>
</template>

<style scoped>
.hamburger {
  --play-state: paused;
  --lines-spacing: 0.5rem;
  --animation-duration: 0.5s;
  --animation-timing: cubic-bezier(0, 0, 0, 0.99);
}

.line {
  @apply absolute h-[3px] w-8 bg-black;
}

.line-a {
  animation: var(--animation-duration) var(--animation-timing) var(--play-state) alternate infinite
    open-close;
}

.line-b {
  animation: var(--animation-duration) var(--animation-timing) var(--play-state) alternate infinite
    open-close-b;
}

.line-c {
  animation: var(--animation-duration) var(--animation-timing) var(--play-state) alternate infinite
    open-close-c;
}

@keyframes open-close {
  0%,
  20% {
    transform: translateY(-0.5rem);
  }

  50% {
    transform: translateY(0);
    transform: rotate(0);
  }

  100% {
    transform: rotate(45deg);
  }
}

@keyframes open-close-b {
  0%,
  20% {
    transform: translateY(0);
    width: 100%;
  }

  100% {
    width: 0;
  }
}

@keyframes open-close-c {
  0%,
  20% {
    transform: translateY(0.5rem);
  }

  50% {
    transform: translateY(0);
  }

  100% {
    transform: rotate(-45deg);
  }
}
</style>
