const express = require('express')
const cors = require('cors')
const app = express()

// 允许跨域访问
app.use(cors())

const arr = [
  { id: 101, content: [{ id: '101', text: '101' }] },
  { id: 100, content: [{ id: '100', text: '100' }] }
]

app.get('/user/:id', (req, res) => {
  let urlId = req.params.id
  //find() 方法返回数组中满足提供的测试函数的第一个元素的值。
  let data = arr.find((item) => item.id == urlId)
  res.send(data.content)
})

//用于解析应用程序/x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: true
  })
)
//用于解析application/json
app.use(express.json())

app.post('/user', (req, res) => {
  //req.body获取不到fetch发送过来的body
  //需要上面use()中间件解析
  let urlId = req.body.id
  let data = arr.find((item) => item.id == urlId)
  res.send(data.content)
})

let path = 3000
app.listen(path, () => {
  console.log(`应用实例，访问地址为 http://localhost:${path}`)
})
