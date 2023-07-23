import { defineNuxtRouteMiddleware } from '#app'
import { useNuxtApp } from 'nuxt/app'

export default defineNuxtRouteMiddleware((to, from) => {
  // if (to.params.id === '1') {
  //   return abortNavigation()
  // }
  // // In a real app you would probably not redirect every route to `/`
  // // however it is important to check `to.path` before redirecting or you
  // // might get an infinite redirect loop
  // if (to.path !== '/') {
  //   return navigateTo('/')
  // }
  console.log('middleware to', to)
  console.log('middleware from', from)
  const middlewareNuxtApp = useNuxtApp()
  console.log('middlewareNuxtApp', middlewareNuxtApp)
})
