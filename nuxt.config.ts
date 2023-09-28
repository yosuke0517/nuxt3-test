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
  plugins: [
    '~/plugins/i18n/index.ts',
    '~/plugins/floating-vue.ts',
    '~/plugins/pinia.ts',
    '~/plugins/test.ts',
    '~/plugins/test2.ts',
    '~/plugins/userInjection.ts',
    '~/plugins/server-init.ts',
    '~/plugins/vue-toastification.ts',
    // '~/plugins/router.client.ts',
  ],
  hooks: {
    'pages:extend'(pages) {
      // 新しいルートを追加
      pages.push({
        name: 'drag',
        path: '/drag',
        file: '~/pages/draggable.vue',
      })

      const invoicesRoute = {
        name: 'invoices',
        path: '/invoices',
        file: '~/pages/invoices/Layout.vue',
        children: [
          {
            name: 'invoices-index',
            path: '',
            file: '~/pages/invoices/index.vue',
            children: [
              {
                path: ':id(\\d+)',
                file: '~/pages/invoices/detailPage/index.vue',
                name: 'InvoiceDetail',
              },
            ],
          },
        ],
      }
      pages.push(invoicesRoute)
    },
  },
  css: ['~/assets/variables.scss'],
  runtimeConfig: {
    testtest: process.env.NUXT_ENV_FUGA,
    public: {
      HOGE: process.env.HOGE,
      NUXT_ENV_FIREBASE_API_KEY: process.env.NUXT_ENV_FIREBASE_API_KEY,
      NUXT_ENV_AUTH_DOMAIN: process.env.NUXT_ENV_AUTH_DOMAIN,
    },
    private: {
      NUXT_ENV_FUGA: process.env.FUGA,
    },
  },
  build: {
    transpile: ['vue-toastification'],
  },
})
