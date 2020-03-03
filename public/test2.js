const Koa = require('koa')
const Router = require('koa-router');

const app = new Koa()
const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = '你访问了根路径'
})

router.get('/test', async (ctx) => {
  ctx.body = '你访问了test路径'
})

router.get('*', async (ctx) => {
  ctx.body = '其他路径'
})

app.use(router.routes())

app.listen(3000, () => {
  console.log('I am listening port 3000')
})