import { defineNuxtRouteMiddleware } from 'nuxt/app'

export default defineNuxtRouteMiddleware((event) => {
  event.res.setHeader('Set-Cookie', [
    'id_token2=token_value; HttpOnly; Path=/;',
  ])
  event.node.res.setHeader('Access-Control-Allow-Origin', '*')
  event.node.res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  )
  event.node.res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  )

  return {
    hello2: 'world',
  }
})
