const express = require('express');
const routerRedefinirSenha = express.Router();
const { atualizarSenha } = require('../controllers/recuperarsenhaPutSenha');

routerRedefinirSenha.put('/redefinirSenha/:email', atualizarSenha);

module.exports = routerRedefinirSenha;