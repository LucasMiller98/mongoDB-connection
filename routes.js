const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const { paginaInicial } = homeController
const { testePost } = homeController
const contatoController = require('./src/controllers/contatoController')

route.get('/', paginaInicial)

route.post('/', testePost)

route.get('/contato', contatoController.paginaInicial)

module.exports = route 