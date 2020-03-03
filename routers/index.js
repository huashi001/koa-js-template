const Router = require('koa-router')
const trans = require('./trans')
const page = require('./page')

let router = new Router()
router.use('/trans', trans.routes(), trans.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

router.post('/test', async ctx => {
  console.log(ctx.request.body, ctx.request.header)
  ctx.body = {
    state: 1,
    data: ctx.request.body
  }
})

module.exports = router