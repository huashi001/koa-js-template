const Router = require('koa-router')
const ToolController = require('../controller/ToolManager')
let tool = new Router()

tool.post('/getList', ToolController.getList)
tool.post('/add', ToolController.addTool)
tool.post('/delete', ToolController.deleteTool)
tool.post('/edit', ToolController.editTool)

tool.post('/test', ToolController.test)

module.exports = tool