// import { fromNodeMiddleware } from 'h3'
//
// export default fromNodeMiddleware((event) => {
//   console.log('hello request: ' + event)
// })
import express from 'express'
import Kuroshiro from 'kuroshiro'
import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji'
import { fromNodeMiddleware } from 'h3'

const app = express()

app.get('/api/hello', (req, res) => {
  // console.log('hello request: ' + req)
  res.json('Hello, world!')
})

app.get('/api/kuroshiro', async (req, res) => {
  const kuroshiroInstance = new Kuroshiro.default()
  await kuroshiroInstance.init(
    new KuromojiAnalyzer({
      dictPath: '~/server/middleware/dict',
    })
  )
  const result = await kuroshiroInstance.convert('かたかな', { to: 'katakana' })
  res.json(result) // This should print "カタカナ"
})
export default fromNodeMiddleware(app)
