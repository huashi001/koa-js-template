const Router = require('koa-router')
let trans = require('../controller/translate')

let transRouter = new Router()
transRouter.get('/', trans.translate)
module.exports = transRouter