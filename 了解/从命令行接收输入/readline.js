const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

//question(提示符,回调函数)
rl.question(`你叫什么名字`, (name) => {
  //回调函数
  //打印你好并且关闭readline接口
  console.log(`你好${name}`)
})

//line事件
rl.on('line', (input) => {
  console.log(`接收到：${input}`)
  rl.close()
})

//pause事件
rl.on('pause', () => {
  console.log('Readline 暂停')
})

rl.on('resume', () => {
  console.log('Readline 恢复')
})

rl.on('SIGINT', () => {
  rl.question('确定要退出吗？', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause()
  })
})

