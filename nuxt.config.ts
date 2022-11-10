import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  buildModules: ['@nuxtjs/google-fonts'],
  app: {
    head: {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    },
  },
  googleFonts: {
    families: {
      Roboto: [100, 300, 400],
    },
  },
});
