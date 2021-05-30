const http = require('http')
const fs = require('fs')
console.log(__dirname)

//读取当前目录下的文件
const list = (data) => {
  return __dirname + `/${data}`
}

//不是等文件被完全读取再回调
//当要发送的数据块已获得时就立即开始将其流式传输到 HTTP 客户端。
const server = http.createServer((req, res) => {
  //fs.createReadStream() 创建文件的可读流。
  //继承自: <stream.Readable>
  const stream = fs.createReadStream(list('data.txt'))

  stream.push('haha')

  //pipe()获取来源流，并将其通过管道传输到目标流。
  //来源流调用，返回目标流
  stream.pipe(res)
})

server.listen(3000, () => {
  console.log('http://localhost:3000')
})
