// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      path: './components',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  runtimeConfig: {
    tmdb: {
      apiKey: '',
      accessToken: '',
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxthq/studio',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
  ],
})
