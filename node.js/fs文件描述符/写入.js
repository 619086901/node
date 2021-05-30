const fs = require('fs')
const data = 'a+(读取 追加) a(追加)是流定位到文件的某尾,\nw+是定位到文件的开头'
const content = '\n一些内容'

const notes = __dirname + '/test.txt'
console.log(notes)
fs.open(notes, 'a+', (err, fd) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('fd:', fd)

  //使用流方式添加内容
  fs.write(fd, Buffer.from(data), (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('已保存')
  })

  //文件末尾添加内容
  fs.appendFile(fd, content, (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('已保存')
  })
})
