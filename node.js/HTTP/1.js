const http = require('http')

const port = 3000

//createServer((req,res))处理每个请求
//返回http.Server 继承EventEmitter
const server = http.createServer((request, response) => {
  //设置 statusCode 属性为 200，以表明响应成功
  response.statusCode = 200
  //响应头
  response.setHeader('Content-Type', 'text/plain')
  //end(data,callback)指定了data相当于response.write(data)
  //然后在end(callback)

  response.end('你好世界\n')
  console.log(request.statusCode)
  console.log(request.statusMessage)
  console.log(request.method)
  console.log(request.headers)
  console.log(request.url)
})

//on 添加回调函数
server.on('start', (...arg) => {
  const all = arg.join(',')
  console.log(`我是A${all}`)
})

const startB = (...arg) => {
  const all = arg.join(',')
  console.log(`我是B${all}`)
}

server.on('start', startB)

//emit触发事件
server.emit('start', 1, 2, 3)

//启动并监听
server.listen(port, () => {
  console.log(`服务器运行在http://localhost:${port}/`)
})

//server.close()停止服务器
