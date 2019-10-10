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

  // 批量翻译
  async batchTrans (ctx) {
    let data = ctx.request.body.data
    for (let i = 0; i < data.length; i++) {
      let child = data[i]
      for (let j = 0; j < child.items.length; j++) {
        let item = child.items[j]
        let result = await axios.get('http://fy.iciba.com/ajax.php',{
          headers: {
            host: 'fy.iciba.com',
            refer: 'http://fy.iciba.com'
          },
          params: {
            a: "fy",
            f: 'zh-CN',
            t: 'en',
            w: item.value
          }
        })
        console.log(result.status, result.data)
        if (result.status === 200 && result.data.status === 1) {
          item.value = result.data.content.out
        } else {
          item.value = '未知错误，请重试'
        }
      }
    }
    ctx.body = {
      status: 1,
      data: data
    }
  }
}

module.exports = new TranslateController()