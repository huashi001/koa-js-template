const fs = require('fs')
/**
 * 删除文件下的文件
 * @param {*} path 必传参数是文件夹
 */
function delFilesInFolder(path) {
  if (fs.existsSync(path)) {
    if (fs.statSync(path).isDirectory()) {
      let files = fs.readdirSync(path);
      files.forEach((file, index) => {
        let currentPath = path + "/" + file;
        if (fs.statSync(currentPath).isDirectory()) {
          delFile(currentPath);
        } else {
          fs.unlinkSync(currentPath);
        }
      });
    }
  }
}

// const str = fs.readFileSync('./Input.js').toString();
// const x = require('./Input')
// console.log(x)
module.exports = delFilesInFolder;