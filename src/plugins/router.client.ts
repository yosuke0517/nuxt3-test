import { createRouter, createWebHistory } from 'vue-router'
import Layout from '~/pages/invoices/Layout.vue'
import Index from '~/pages/invoices/index.vue'
import { defineNuxtPlugin, NuxtApp, useRouter } from '#app'

const routes = [
  {
    path: '/invoices',
    component: Layout,
    children: [
      {
        path: '', // この設定により、/invoicesのURLでindex.vueが表示されます
        component: Index,
      },
    ],
  },
]

const routerClient = createRouter({
  history: createWebHistory(),
  routes,
})

export default defineNuxtPlugin((nuxt: NuxtApp) => {
  const router = useRouter()
  router.addRoute({
    path: '/hoge',
    name: 'hoge',
    component: () => import('~/pages/invoices/index.vue'),
  })
})
