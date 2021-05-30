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
const desql = 'delete from user where name=?'
const desqlParams = ['lisi']

connection.query(desql, desqlParams, (err, result) => {
  if (err) {
    console.log(err.message)
    return
  }
  console.log('--------------------------delete----------------------------')
  console.log('delete affectedRows', result.affectedRows)
})

connection.end()
