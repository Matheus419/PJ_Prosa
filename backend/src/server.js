const express = require('express');
const app = express();
const voluntarioRoute = require('./Routes/voluntarioRoute');
const voluntarioLoginRoute = require('./Routes/voluntarioLoginRoute')
const criarCadastroAdministrativo = require('./Routes/administrativoCadastro')
const administrativoLogin = require('./Routes/administrativoLogin')
const buscarEmailRecuperarSenha = require('./Routes/buscarEmailRedefinirSenha')
const redefinirSenha = require('./Routes/alterarSenha')

app.use(express.json());
app.use('/api', voluntarioRoute); // Rota enviar Usuários
app.use('/api', voluntarioLoginRoute); // Rota de validação login
app.use('/api', criarCadastroAdministrativo); // Rota de cadastro usuários administrativos.
app.use('/api', administrativoLogin); // Rota de validação de login
app.use('/api', buscarEmailRecuperarSenha); // Rota de buscar email de redefinir senha!
app.use('/api', redefinirSenha); // Rota de redefinir senha!

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});