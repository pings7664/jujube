import { addComponent, defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
  setup() {
    addComponent({
      name: 'Lottie',
      export: 'Vue3Lottie',
      filePath: 'vue3-lottie',
    })

    addComponent({
      name: 'Icon',
      export: 'Icon',
      filePath: '@iconify/vue',
    })
  },
})
