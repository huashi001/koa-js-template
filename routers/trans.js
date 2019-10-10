const Router = require('koa-router')
let trans = require('../controller/translate')

let transRouter = new Router()
transRouter.get('/', trans.translate)
transRouter.post('/data', trans.batchTrans)
module.exports = transRouter