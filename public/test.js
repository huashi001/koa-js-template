const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
  const url = req.url
  if (url === '/') {
    res.write('你访问了根路径')
  } else if (url === '/test') {
    res.write('你访问了test路径')
  } else {
    res.write('其他路径')
  }
  res.end()
}).listen(3000)

console.log('Server running at http://127.0.0.1:3000/');