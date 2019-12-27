const axios = require('axios');
// 不传mode为中->英,mode === 1则英文转中文，暂时不实现
async function getTrans(word, mode) {
  const result = await axios.get('http://fy.iciba.com/ajax.php',{
    headers: {
      host: 'fy.iciba.com',
      refer: 'http://fy.iciba.com'
    },
    params: {
      a: "fy",
      f: 'zh-CN',
      t: 'en',
      w: word
    }
  })
  if (result.status === 200 && result.data.status === 1) {
    return result.data.content.out
  } else {
    return '[未知错误，请重试]'
  }
}

module.exports = getTrans;