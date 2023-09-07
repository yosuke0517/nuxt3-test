import { defineNuxtRouteMiddleware, NuxtApp, useNuxtApp } from '#app'
export default defineNuxtRouteMiddleware((to, from) => {
  // do stuff
  console.log('defineNuxtRouteMiddleware')
  // if (process.client) {
  //   const app: NuxtApp = useNuxtApp()
  //   const { presenter } = app.$userPresenter()
  //   console.log('app', presenter.view.state.role)
  // }
  // const app = useNuxtApp()
  // const { presenter } = app.$userPresenter()
  // console.log('middlewarepresenter!!', presenter.getRole())
})
