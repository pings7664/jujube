import {presetUno, presetIcons} from "unocss";
import {presetDaisy} from "unocss-preset-daisy";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: [
    '@nuxt/content',
    "@unocss/nuxt",
  ],
  css: ["@unocss/reset/tailwind.css"],
  content: {},
  unocss: {
    presets: [
      presetUno(),
      presetDaisy({
        themes: false
      }),
      presetIcons({
        extraProperties: {
          "display": "inline-block",
          "vertical-align": "middle"
        }
      })
    ]
  }
})
