const express = require('express');
const routerVoluntarios = express.Router();
const { criarUsuario } = require('../controllers/voluntarioController');

routerVoluntarios.post('/voluntariosCadastro', criarUsuario);

module.exports = routerVoluntarios;