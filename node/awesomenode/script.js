const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log('Async', data.toString());
})

const file = fs.readFileSync('./hello.txt')
console.log('Sync', file.toString())

// APPEND
fs.appendFile('./hello.txt', ' Javascript é bem dahora até', err => {
  if (err) {
    console.log(err)
  }
})

// WRITE
fs.writeFile('bye.txt', 'Fico triste com sua saída', err => {
  if (err) {
    console.log(err)
  }
})

// DELETE
fs.unlink('bye.txt', err => {
  if (err) {
    console.log(err)
  }
  console.log('Teste')
})
