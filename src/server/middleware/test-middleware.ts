import { getRequestHeader, defineEventHandler } from 'h3'

export default defineEventHandler((event) => {
  // console.log('test-middleware', event.context)
  // console.log('test-middleware req: ', event.node.req)
  // console.log('test-middleware res: ', event.node.res)
})
