const buf = Buffer.from('01a')

console.log(buf[0]) //48
console.log(buf[1]) //49
console.log(buf[2]) //97
console.log(`length: ${buf.length}`)
console.log('buf:' + buf.toString())

//复制
//分配3个字节 第二个参数（填充内容）默认为0，第三个参数默认utf8
let bufcopy = Buffer.alloc(3)
console.log(bufcopy) //<Buffer 00 00 00>
buf.copy(bufcopy, 0, 0, 3)
console.log('bufcopy:' + bufcopy.toString())

//切片
const slice = buf.slice(0, 2)
console.log('slice', slice.toString())

//修改
buf[1] = 50
console.log('修改后:', buf.toString())

//整个数据字符串写入buffer
buf.write('Hey!')
