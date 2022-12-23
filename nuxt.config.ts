export default defineNuxtConfig({
  // This app not using server features so we can disable SSR
  ssr: false,
  css: ['~/assets/scss/main.scss'],
  modules: ['@vueuse/nuxt'],
})
