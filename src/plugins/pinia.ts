import { defineNuxtPlugin, NuxtApp } from '#app'
import { useMainStore } from '~/store'
import { Pinia } from 'pinia'

interface ExtendedNuxtApp extends NuxtApp {
  $pinia: Pinia | null | undefined
}

export default defineNuxtPlugin((nuxt: ExtendedNuxtApp) => {
  return {
    provide: {
      store: useMainStore(nuxt.$pinia),
    },
  }
})
