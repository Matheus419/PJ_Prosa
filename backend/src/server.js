const express = require('express');
const app = express();
const voluntarioRoute = require('./Routes/voluntarioRoute');
const voluntarioLoginRoute = require('./Routes/voluntarioLoginRoute')

app.use(express.json());
app.use('/api', voluntarioRoute); // Rota enviar Usuários
app.use('/api', voluntarioLoginRoute)

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});