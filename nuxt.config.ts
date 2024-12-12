// https://nuxt.com/docs/api/configuration/nuxt-config
import { useRuntimeConfig } from './modules-config/runtime'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: useRuntimeConfig().runtimeConfig,
  app: {
    baseURL: '/nuxt-ssg/'
  },
  imports: {
    dirs: ['composables/**']
  },
})
