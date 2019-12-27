const Koa = require('koa')
const cors = require('@koa/cors');
const path = require('path')
const bodyParser = require('koa-bodyparser')
const router = require('./routers')
const staticFiles = require('koa-static')

const app = new Koa()

app.use(cors({
  origin: 'http://localhost:8080'
}))

// 指定 public目录为静态资源目录，用来存放 js css images 等
app.use(staticFiles(path.resolve(__dirname, "./public")))

app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())


app.listen(3000, () => {
  console.log('I am listening port 3000')
})