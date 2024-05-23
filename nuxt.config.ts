// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      path: './components',
      pathPrefix: false,
    },
  ],
  content: {
    ignores: [
      '.gitignore',
      'LICENSE',
      'README.md',
    ],
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/fonts',
    'nuxt-radash',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    "shadcn-nuxt"
  ],
  ssr: false,
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  }
})
