const Stream = require('stream')
//可读流
const readableStream = new Stream.Readable()
//可写流
const writableStream = new Stream.Writable()
readableStream._read = () => {}

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString())
  next()
}

readableStream.pipe(writableStream)

//推入
readableStream.push('fan')
readableStream.push('01a')

readableStream.on('readable', () => {
  console.log('监听readable流事件', readableStream.read().toString())
})

readableStream.on('end', () => {
  console.log('结束')
})

writableStream.write('我是write写入的\n')
