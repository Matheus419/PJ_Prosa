const express = require('express');
const routercadastroLogin = express.Router();
const { loginAdministrativo } = require('../controllers/administrativoLogin');

routercadastroLogin.post('/adminLogin', loginAdministrativo);

module.exports = routercadastroLogin;