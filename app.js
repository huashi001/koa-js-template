const Koa = require('koa')
const cors =  require('koa2-cors')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const router = require('./routers')
const staticFiles = require('koa-static')

// 指定 public目录为静态资源目录，用来存放 js css images 等
app.use(staticFiles(path.resolve(__dirname, "./public")))

app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

app.use(cors())

app.listen(3000, () => {
  console.log('I am listening port 3000')
})