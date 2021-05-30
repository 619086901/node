const fs = require('fs')

fs.readFile(__dirname + '/test.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(data)
})
