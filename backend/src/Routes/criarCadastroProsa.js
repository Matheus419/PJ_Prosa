const express = require('express');
const routerCriarCadastroProsa = express.Router();
const { criarCadastroProsa } = require('../controllers/prosaCadastrosSerena');

routerCriarCadastroProsa.post('/criarCadastroProsa/Serena', criarCadastroProsa);

module.exports = routerCriarCadastroProsa;