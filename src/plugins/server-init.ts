import { defineNuxtPlugin, useRequestHeaders } from '#app'

export default defineNuxtPlugin(() => {
  console.log('process', process)
  const headers = useRequestHeaders(['cookie'])
  console.log('req', headers)
  if (process.server) {
  }
})
