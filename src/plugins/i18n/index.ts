import { defineNuxtPlugin } from 'nuxt/app'
import { createI18n } from 'vue-i18n'
import messages from './message'

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'ja',
  fallbackLocale: 'ja',
  messages,
})

export const changeLocale = (locale: 'ja' | 'en') => {
  i18n.global.locale = locale
}

export const i18nToString = (value: string): string => {
  return i18n.global.t(value).toString()
}

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(i18n)
})

// export const { t } = useI18n()
