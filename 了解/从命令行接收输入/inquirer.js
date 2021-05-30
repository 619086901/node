//npm install inquirer
const inquirer = require('inquirer')

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: '你叫什么名字'
    }
  ])
  .then((answers) => {
    console.log(`你好${answers['name']}!`)
  })
