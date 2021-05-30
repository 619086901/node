const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '619086',
  port: '3306',
  database: 'bank'
})

connection.connect()

const addsql = 'insert into user(name,age,sex) values(?,?,?)'
const addsqlParams = ['王五', 2000, '男']

connection.query(addsql, addsqlParams, (err, result) => {
  if (err) {
    console.log(err.message)
    return
  }
  console.log('--------------------------INSERT----------------------------')
  console.log('insert name', result)
})

connection.end()
