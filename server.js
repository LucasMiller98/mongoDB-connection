require('dotenv').config() // environment variable

const express = require('express')
const path = require('path')
const { globalMiddleWare } = require('./src/middlewares/middlewares')
const routes = require('./routes')
const app = express()

const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING, { 
  useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => { // enquanto não tiver conexão, o node não escuta nada.
  app.emit('okay') // evento para emitir que um sinal para o node.
}).catch(error => console.error(error.message))


app.use(express.urlencoded({ extended: true }))
// Conteúdo estático
app.use(express.static(path.resolve(__dirname, 'public')))

// caminho absoluto
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

// nossos proprios middlewares
app.use(globalMiddleWare)

app.use(routes)

app.on('okay', () => { // quando tiver tudo okay, o node vai começar a escutar.
  app.listen(3002, () => console.log(`
  Acesse: http://localhost:3002
  Server is running on port 3002`))
})
