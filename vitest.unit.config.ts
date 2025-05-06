import { configDefaults, mergeConfig } from 'vitest/config'
import config from './vitest.config'

export default mergeConfig(config, {
  test: {
    name: 'unit',
    include: ['packages/vue/__tests__/index.spec.ts'],
    exclude: [...configDefaults.exclude, '**/e2e/**'],
  },
})
