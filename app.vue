<template>
  <div class="relative">
    <AppNavbar class="absolute w-full z-10 hidden max-w-7xl left-1/2 -translate-x-1/2 md:block" is-white />
    <div class="absolute md:hidden">this is mobile</div>

    <div class="w-screen h-screen bg-black bg-opacity-20 absolute"></div>
    <div class="w-screen h-screen bg-[url('https://res.cloudinary.com/dkvtpo8w1/image/upload/v1661219355/MJ%20Portafolio/Epadilla/pexels-saulo-zayas-335887.jpg')] bg-no-repeat bg-cover bg-center">
      
    </div>
  </div>

</template>

<script setup>
import AppNavbar from './components/AppNavbar.vue';
</script>


<style>
@import './assets/style/index.css';
</style>