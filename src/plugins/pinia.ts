import { defineNuxtPlugin, NuxtApp } from '#app'
import { useMainStore } from '~/store'
import { Pinia } from 'pinia'

interface PluginsInjections {
  $pinia: Pinia | null | undefined
  $store: ReturnType<typeof useMainStore>
}

declare module '#app' {
  // @ts-ignore
  interface NuxtApp extends PluginsInjections {}
}

// @ts-ignore
export default defineNuxtPlugin((nuxt: NuxtApp) => {
  return {
    provide: {
      store: useMainStore(nuxt.$pinia as Pinia | null | undefined),
    },
  }
})
