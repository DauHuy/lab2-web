const fs = require('fs')
const user = {
  id: 19521602,
  name: 'dinh huy',
  age: 21
}

const data = JSON.stringify(user)
fs.writeFile('user.json', data, err => {
  if (err) {
    throw err
  }
  console.log('JSON data is saved.')
})