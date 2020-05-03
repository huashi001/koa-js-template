const Router = require('koa-router')
const hello = require('./hello')
const home = require('./home')

let router = new Router()
router.use('/hello', hello.routes(), hello.allowedMethods())
router.use('/home', home.routes(), home.allowedMethods())

router.post('/test', async ctx => {
  console.log(ctx.request.body, ctx.request.header)
  ctx.body = {
    state: 1,
    data: ctx.request.body
  }
})

module.exports = router