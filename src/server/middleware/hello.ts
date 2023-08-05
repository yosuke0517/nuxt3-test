// import { fromNodeMiddleware } from 'h3'
//
// export default fromNodeMiddleware((event) => {
//   console.log('hello request: ' + event)
// })
import express from 'express'
import { fromNodeMiddleware } from 'h3'

const app = express()

app.get('/api/hello', (req, res) => {
  // console.log('hello request: ' + req)
  res.json('Hello, world!')
})

export default fromNodeMiddleware(app)
