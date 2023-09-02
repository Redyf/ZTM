const express = require('express');

const app = express();
app.use(express.static(__dirname + '/public'))

app.get('/:id', (req, res) => {
  console.log(req.params)
  res.status(404).send('Not Found')
})

app.get('/profile', (req, res) => {
  res.send('getting profile')
})

// Tentando entender como funciona as funções get, post, put e delete...
app.post('/profile', (req, res) => {
  console.log(req.body)
  res.send('Success')
})

app.delete('/', (req, res) => {
  res.delete(usersArray[0])
})

app.listen(3000)
