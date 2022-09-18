const express = require('express')
const serverless = require('serverless-http')
const app = express()
const router = express.Router()

module.exports.handler = serverless(app)

app.use(express.json())


router.get('/', async( req, res, next )=> {
  console.log('hello world')
  res.send("hello world")
})

router.get('/test', async( req, res, next )=> {
  console.log('hello world')
  res.json({
    "hello": "world"
  })
})

app.use('.netlify/functions/api', router)
