import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import icons from 'unplugin-icons/vite'
import AutoImport from 'unplugin-auto-import/astro'
import IconsResolver from 'unplugin-icons/resolver'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind(), AutoImport({
    dts: 'src/auto-import.d.ts',
    resolvers: [
      IconsResolver({
        prefix: 'icon',
        extension: 'jsx',
      }),
    ],
  })],
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [
      icons({
        compiler: 'astro',
      }),
    ],
  },
})
