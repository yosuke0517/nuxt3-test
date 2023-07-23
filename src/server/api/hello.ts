import { defineEventHandler } from 'h3'

export default defineEventHandler((event) => {
  event.res.setHeader('Set-Cookie', ['id_token=token_value; HttpOnly; Path=/;'])

  return {
    hello: 'world',
  }
})
