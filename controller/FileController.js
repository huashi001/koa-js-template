const fs = require('fs')
class FileController {
  // 文件临时上传
  async saveFileTemp (ctx) {
    console.log(ctx.request.files[0])
    //fs.writeFileSync(ctx.request.files[0])
  }
}

module.exports = new FileController();