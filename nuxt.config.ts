import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  buildModules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Roboto: {
        wght: [300, 400]
      }
    }
  }
})
