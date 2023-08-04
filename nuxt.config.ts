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
  modules: ['dayjs-nuxt', '@pinia/nuxt', '@nuxtjs/tailwindcss'],
})
