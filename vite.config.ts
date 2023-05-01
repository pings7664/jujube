import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),
    Pages(),
    Layouts(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        {
          'virtual:generated-layouts': ['setupLayouts'],
          'vue-router': [
            'createRouter',
            'createWebHistory',
          ],
          'nprogress': [
            ['default', 'NProgress'],
          ],
          '~pages': [
            ['default', 'generatedRoutes'],
          ],
        },
      ],
      dirs: [
        'src/modules',
      ],
      dts: 'src/auto-import.d.ts',
    }),
    Components({
      dts: 'src/components.d.ts',
    }),
  ],
})
