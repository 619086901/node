const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '619086',
  port: '3306',
  database: 'bank'
})

connection.connect()

//name age sex
const upsql = 'update user SET age=? where name=?'
const upsqlParams = ['38', 'zhangsan']

connection.query(upsql, upsqlParams, (err, result) => {
  if (err) {
    console.log(err.message)
    return
  }
  console.log('--------------------------update----------------------------')
  console.log('update affectedRows', result.affectedRows)
})

connection.end()
