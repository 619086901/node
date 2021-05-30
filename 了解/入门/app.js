const express = require('express')
const app = express()
const chalk = require('chalk')

app.get('/', (req, res) => {
  res.send('你好')
})

const server = app.listen(3000, () => console.log('服务器已就绪'))

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('进程已终止')
  })
})

process.argv.forEach((val, index) => {
  //第一个参数是 node 命令的完整路径。
  //第二个参数是正被执行的文件的完整路径。
  //process.argv
  console.log(`${index}:${val}`)
})

//%s字符串 %d数字
console.log('我的%s已经%d岁', '猫', 2)

//count 方法会对打印的字符串的次数进行计数，并在其旁边打印计数：
const x = 1
console.count('x 的值为 ' + x + ' 且已经检查了几次？')

const oranges = ['橙子', '橙子']
oranges.forEach((fruit) => {
  console.count(fruit)
})

//计算耗时
const doSomething = () => console.log('测试')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //做点事，并测量所需的时间。
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()

//npm install chalk
console.log(chalk.yellow('你好'))

//创建进度条
const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })

const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  } else if (bar.curr === 5) {
    bar.interrupt('interrupt执行期间显示消息')
  }
}, 100)
