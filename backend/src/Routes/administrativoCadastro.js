const express = require('express');
const routerAdministrativoCadastro = express.Router();
const { criarCadastroAdministrativo } = require('../controllers/administrativoCadastro');

routerAdministrativoCadastro.post('/AdministrativoCadastro', criarCadastroAdministrativo);

module.exports = routerAdministrativoCadastro;