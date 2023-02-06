// https://v3.nuxtjs.org/api/configuration/nuxt.config
import * as path from 'path'

export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt',
  },
  appConfig: {
    title: 'Jujube',
    description: '一切都会变好，超好，爆好，无敌好！',
  },
  devServer: {
    port: 6666,
  },
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
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
})
