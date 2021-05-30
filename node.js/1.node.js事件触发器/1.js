const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

//on 添加回调函数
//emit触发事件

//on 添加回调函数
eventEmitter.on('start', (...arg) => {
  const all = arg.join(',')
  console.log(`我是A${all}`)
})

const startB = (...arg) => {
  const all = arg.join(',')
  console.log(`我是B${all}`)
}

eventEmitter.on('start', startB)

//emit触发事件
eventEmitter.emit('start', 1, 2, 3)

//once(): 添加单次监听器。
//监听器最多只会触发一次，触发后立刻解除该监听器
eventEmitter.once('connection', (arg) => {
  console.log(`第一次调用${arg}`)
})

eventEmitter.emit('connection', 1)
eventEmitter.emit('connection', 1)

console.log('监听器数量：', eventEmitter.listenerCount('start'))

//如果单个函数作为处理程序多次添加为单个事件
//则 removeListener() 将删除最近添加的实例。
//off()等价removelistener
eventEmitter.removeListener('start', startB)

//触发
eventEmitter.emit('start', 1, 2, 3)

console.log('监听器数量：', eventEmitter.listenerCount('start'))

//获取对象监听器的最大数量
//setMaxListeners是设置
console.log('获取对象监听器的最大数量', eventEmitter.getMaxListeners())

console.log(eventEmitter.listeners('start'))
