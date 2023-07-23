import { defineNuxtPlugin, NuxtApp } from '#app'
import { useMainStore } from '~/store'
import { Pinia } from 'pinia'

interface PluginsInjections {
  $pinia: Pinia | null | undefined
}

declare module 'nuxt/dist/app/nuxt' {
  interface NuxtApp extends PluginsInjections {}
}

export default defineNuxtPlugin((nuxt: NuxtApp) => {
  return {
    provide: {
      store: useMainStore(nuxt.$pinia as Pinia | null | undefined),
    },
  }
})
