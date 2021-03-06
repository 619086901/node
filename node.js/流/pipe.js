const fs = require('fs')
const zlib = require('zlib')

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream(__dirname + '/input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(__dirname + '/input.txt.gz'))

console.log('文件压缩完成。')

