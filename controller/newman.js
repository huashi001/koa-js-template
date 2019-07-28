const axios = require('axios');
class newmanController {
  async newmanRun(ctx){
    console.log(axios)
    ctx.body = 'i am route from home444'
  }
  async translate(){
    axios.get('http://fy.iciba.com/ajax.php',{
      headers: {
        host: 'fy.iciba.com',
        refer: 'http://fy.iciba.com'
      },
      params: {
        a: "fy",
        f: 'zh-CN',
        t: 'en',
        w: '矿泉水'
      }
    }).then(res => {
      console.log(res, 'res')
    }).catch(e =>{
      console.log(e)
    })
  }
}
// module.exports = {
//   async newmanRun(ctx){
//     ctx.body = 'i am route from home 2222'
//   }
// }

module.exports = new newmanController()