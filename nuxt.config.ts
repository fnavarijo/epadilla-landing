// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  buildModules: ['@nuxtjs/google-fonts'],
  app: {
    head: {
      title: 'Enrique Padilla Photography',
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Todo queda mejor capturado en fotografías.'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Todo queda mejor capturado en fotografías.'
        }
      ]
    },
  },
  googleFonts: {
    families: {
      Roboto: [100, 300, 400],
    },
  },
});
