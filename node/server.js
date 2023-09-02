const express = require('express');

const app = express();

const usersArray = [
  {
    name: 'Bruno Perzentino', hobby: 'Valoran best game'
  },
  {
    name: 'Filipe Oliveira', hobby: 'Minecraft'
  },
  {
    name: 'Mateus Alves', hobby: 'Falar sobre linux, é isso'
  },
  {
    nome: 'Gabriel Miranda', hobby: "I use Arch linux btw"
  }
]

app.get('/', (req, res) => {
  for (let i = 0; i < usersArray.length; i++) {
    const user = usersArray[i];
    console.log(user.name)
  }
  res.send(usersArray)
})

// Tentando entender como funciona as funções get, post, put e delete...
app.post('/', (req, res) => {
  res.get(usersArray.push({ nome: 'Claudia', hobby: 'teste' }))
})

app.delete('/', (req, res) => {
  res.delete(usersArray[0])
})

app.listen(3000)
