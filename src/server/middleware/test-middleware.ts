import { fromNodeMiddleware } from 'h3'

export default fromNodeMiddleware((event) => {
  console.log('test-middleware request: ')
})
