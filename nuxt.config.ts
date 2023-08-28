// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt 3 basic',
      meta: [{ name: 'description', content: 'Nuxt 3 for beginners' }],
    },
  },
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: [
    'dayjs-nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-security',
  ],
  router: {},
  plugins: [
    '~/plugins/i18n/index.ts',
    '~/plugins/floating-vue.ts',
    '~/plugins/pinia.ts',
    '~/plugins/test.ts',
    '~/plugins/test2.ts',
    '~/plugins/userInjection.ts',
    '~/plugins/server-init.ts',
  ],
  css: ['~/assets/variables.scss'],
  runtimeConfig: {
    public: {
      HOGE: process.env.HOGE,
    },
  },
})
