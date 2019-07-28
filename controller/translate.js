const axios = require('axios');
class TranslateController {
  //中文翻译成英文
  async translate(ctx){
    let result = await axios.get('http://fy.iciba.com/ajax.php',{
      headers: {
        host: 'fy.iciba.com',
        refer: 'http://fy.iciba.com'
      },
      params: {
        a: "fy",
        f: 'zh-CN',
        t: 'en',
        w: ctx.query.w
      }
    })
    if(result.status === 200){
      ctx.body = result.data
    }else{
      ctx.body = {
        "status": 0,
        "message": '未知错误，请重试'
      }
    }
  }
  //英文翻译成中文
}

module.exports = new TranslateController()