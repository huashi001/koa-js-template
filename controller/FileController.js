const fs = require('fs')
const path = require('path')
class FileController {
  // 文件临时上传
  async saveFileTemp (ctx) {
    console.log(ctx.request.files.file[0])
    if (ctx.request.files && ctx.request.files.file.length > 0) {
      const name = ctx.request.files.file[0].filename
      ctx.body = {
        state: 1,
        ret: 1,
        data: name
      }
    } else {
      ctx.body = {
        state: 0,
        ret: 0,
        msg: '上传失败'
      }
    }
  }
}

module.exports = new FileController();