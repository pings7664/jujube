// https://v3.nuxtjs.org/api/configuration/nuxt.config
import * as path from 'path'

export default defineNuxtConfig({
  srcDir: 'src/',
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/content'],
  content: {
    sources: {
      content: {
        driver: 'fs',
        prefix: '/docs',
        base: path.resolve(__dirname, '../../shared/content'),
      },
    },
  },
})
