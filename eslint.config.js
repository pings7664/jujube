import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu({
  vue: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
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
}, ...compat.config({
  extends: [
    'plugin:tailwindcss/recommended',
  ],
}))
