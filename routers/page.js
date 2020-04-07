const Router = require('koa-router')
let msg = ''

let page = new Router()
page.get('/', async (ctx) => {
  ctx.body = msg
  msg = ''
}).get('/a', (ctx) => {
  if (ctx.request.url.indexOf('dice') > -1) {
    msg = {
      type: 'window',
      key: 'open',
      fromer: '',
      receiver: '',
      windowids: [3],
      value: {
      },
    }
  }
  if (ctx.request.url.indexOf('draw') > -1) {
    msg = {
      type: 'window',
      key: 'open',
      fromer: '',
      receiver: '',
      windowids: [4],
      value: {

      },
    }
  }
  ctx.body = {
    state: 1
  }
})
module.exports = page;