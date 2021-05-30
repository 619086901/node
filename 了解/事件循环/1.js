const bar = () => console.log('settimeout')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  new Promise((resolve, reject) => resolve('Promise')).then((resolve) =>
    console.log(resolve)
  )
  baz()

  process.nextTick(() => {
    console.log('nextTick')
    //当将一个函数传给 process.nextTick() 时
    //则指示引擎在当前操作结束（在下一个事件循环滴答开始之前）时调用此函数：
  })

  setImmediate(() => {
    //node.js的setImmediate()相当于setTimeout(() => {}, 0)
    console.log('setImmediate')
  })
}

foo()
