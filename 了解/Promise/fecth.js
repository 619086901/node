//promise
const getFirstUserData = () => {
  return fetch('/users.json') // 获取用户列表
    .then((response) => response.json()) // 解析 JSON
    .then((users) => users[0]) // 选择第一个用户
    .then((user) => fetch(`/users/${user.name}`)) // 获取用户数据
    .then((userResponse) => userResponse.json()) // 解析 JSON
}

//async await
const getFirstUserData = async () => {
  const response = await fetch('/users.json') // 获取用户列表
  const users = await response.json() // 解析 JSON
  const user = users[0] // 选择第一个用户
  const userResponse = await fetch(`/users/${user.name}`) // 获取用户数据
  const userData = await userResponse.json() // 解析 JSON
  return userData
}
