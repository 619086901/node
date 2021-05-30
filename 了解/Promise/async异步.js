const promiseToDoSomething = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('做些事情')
    }, 2000)
  })
}

const watch = async () => {
  const something = await promiseToDoSomething()
  return something + ' 查看'
}

const watchOver = async () => {
  const something = await watch()
  return something + ' 再次查看'
}

watchOver().then((res) => {
  console.log(res)
})
