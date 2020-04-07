const multer = require('@koa/multer');
var upload = multer({ dest: 'public/temp' })
const Router = require('koa-router')
const FileController = require('../controller/FileController')

let file = new Router()
file.post('/', upload.fields([{
  name: 'file',
  maxCount: 1
}]), FileController.saveFileTemp)
module.exports = file