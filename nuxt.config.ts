export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  css: ['~/assets/css/transitions.css'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/MukeshCodesLogo.svg' },
      ],
    },
  },
});
