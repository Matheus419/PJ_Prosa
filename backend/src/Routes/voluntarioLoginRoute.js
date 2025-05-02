const express = require('express');
const routerVoluntariosLogin = express.Router();
const { loginVoluntario } = require('../controllers/voluntarioLoginController');

routerVoluntariosLogin.post('/voluntariosLogin', loginVoluntario);

module.exports = routerVoluntariosLogin;