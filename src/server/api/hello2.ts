import { defineNuxtRouteMiddleware } from 'nuxt/app'

export default defineNuxtRouteMiddleware((event) => {
  event.res.setHeader('Set-Cookie', [
    'id_token2=token_value; HttpOnly; Path=/;',
  ])

  return {
    hello2: 'world',
  }
})
