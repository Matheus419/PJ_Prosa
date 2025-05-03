const express = require('express');
const routerBuscarEmailredefinirSenha = express.Router();
const { buscarEmailRedefinirSenha } = require('../controllers/recuperarsenhaGetEmail');

routerBuscarEmailredefinirSenha.get('/buscarEmailRedefinirSenha/:email', buscarEmailRedefinirSenha);

module.exports = routerBuscarEmailredefinirSenha;