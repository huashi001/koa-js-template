const Router = require('koa-router')

let page = new Router()
page.get('/', async (ctx) => {
  ctx.body = 'i am route from page'
}).get('/a', (ctx) => {
  ctx.body = 'aaa'
})
module.exports = page