const clear = true
const interval = setInterval(() => {
  //通常在 setInterval 回调函数中调用 clearInterval
  //以使其自行判断是否应该再次运行或停止。
  if (clear === true) {
    console.log('clear')
    clearInterval(interval)
    return
  }
  // 否则做些事情
  console.log('interval')
}, 100)
