import { defineNuxtPlugin, useNuxtApp, useRequestHeaders } from '#app'

export default defineNuxtPlugin(() => {
  // console.log('process', process)
  // const headers = useRequestHeaders(['cookie'])
  // console.log('req', headers)
  if (process.server) {
    console.log('server-init!!')
    const headers = useRequestHeaders(['cookie'])
    console.log('cookieinplugin', headers)
    const app = useNuxtApp()
    const { presenter } = app.$userPresenter
    console.log('zzzpresenter!!', presenter)
  }
})
