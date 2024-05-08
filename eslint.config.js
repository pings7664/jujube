import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu({
  vue: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
}, {
  files: ['**/*.vue'],
  rules: {
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
  },
}, {
  files: ['**/*.ts'],
  rules: {
    '@typescript-eslint/no-floating-promises': 'off',
  },
}, ...compat.config({
  extends: [
    'plugin:tailwindcss/recommended',
  ],
}))
