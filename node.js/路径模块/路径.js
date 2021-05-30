const fs = require('fs')
const path = require('path')

const notes = __dirname + '/test.txt'

fs.open(notes, 'r', (err, fd) => {
  if (err) {
    console.log('err:', err)
    return
  }
  console.log('fd:', fd)
})

fs.stat(notes, (err, stats) => {
  if (err) {
    console.log('err', err)
    return
  }
  console.log(stats.isFile()) //判断文件是否文件
  console.log(stats.isDirectory()) //判断文件是否目录
  console.log(stats.isSymbolicLink()) //判断文件是否符号链接
  console.log(stats.size) //文件大小（以字节为单位）
  console.log(stats)
})

//返回路径的目录部分
console.log('dirname:', path.dirname(notes))

//过滤掉文件的扩展名
console.log('basename:', path.basename(notes))

//返回路径的扩展名部分
console.log('extname:', path.extname(notes))

//绝对路径返回true
console.log('isAbsolute():', path.isAbsolute(notes))

//连接路径的两个或多个部分
const name = 'joe'
console.log('join():', path.join('/', 'user/', name, 'notes.txt'))

//解析对象的路径
console.log('parse():', path.parse(notes))

//获得相对路径的绝对路径计算
console.log('resolve', path.resolve('./test.txt'))
