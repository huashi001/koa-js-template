const Router = require('koa-router')
const trans = require('./trans')
const page = require('./page')
const file = require('./file')
const tool = require('./tool')

let router = new Router()
router.use('/trans', trans.routes(), trans.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())
router.use('/file', file.routes(), page.allowedMethods())
router.use('/tool', tool.routes(), tool.allowedMethods())

router.post('/test', async ctx => {
  console.log(ctx.request.body, ctx.request.header)
  ctx.body = {
    state: 1,
    data: ctx.request.body
  }
})

module.exports = router