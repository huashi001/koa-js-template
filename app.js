const Koa = require('koa')
const cors =  require('koa2-cors')
var bodyParser = require('koa-bodyparser')
const app = new Koa()
const router = require('./routers')

app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

app.use(cors())

app.listen(3000, () => {
  console.log('I am listening port 3000')
})