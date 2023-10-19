import { fromNodeMiddleware } from 'h3'

export default fromNodeMiddleware(async (event) => {
  console.log('test-middleware2 request: ')
})
