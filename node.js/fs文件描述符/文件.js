//文件夹操作还是少用

const fs = require('fs')
const folderName = __dirname + '/test.txt'

//第二个参数默认值F_OK
//查询是否存在 可写 可读
fs.access(folderName, fs.constants.F_OK, (err) => {
  if (err) {
    console.log('文件不存在')
    return
  }
  console.log('文件存在')
})

//读取目录的内容
fs.readdir(__dirname + '', (err, files) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(files)
})

//创建文件夹
fs.mkdir(__dirname, { recursive: true }, (err) => console.log(err))

//删除文件夹用这个
//npm install fs-extra
//const fs =require('fs-extra)
//fs.remove(path, (err) => console.log(err))
