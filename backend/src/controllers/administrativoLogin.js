// Importa o pacote de SQL
const sql = require('mssql');
// Importa a conexão com o banco
const db = require('../database/connection');
//Importa a criptografia
const bcrypt = require('bcrypt');

const loginAdministrativo = async (req, res) => {
    const { email, senha } = req.body;
  
    if (!email || !senha) {
      return res.status(400).json({ erro: 'Email e senha são obrigatórios!' });
    }
  
    try {
        const { pool, sql } = require('../database/connection');
        const result = await pool.request()
        .input('email', sql.VarChar, email)
        .query('SELECT * FROM cadastro_administrativo WHERE email = @email');
  
      const usuario = result.recordset[0];
  
      if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado!' });
      }
      
      const senhaCorreta = await bcrypt.compare(senha, usuario.passwordhash);
      
      if (!senhaCorreta) {
        return res.status(401).json({ erro: 'Senha incorreta!' });
      }
  
      // Autenticado com sucesso
      res.status(200).json({ mensagem: 'Login realizado com sucesso! Seja bem vindo ', usuario: { nome: usuario.nome } });
  
    } catch (erro) {
      console.error(erro);
      res.status(500).json({ erro: 'Erro ao realizar login!' });
    }
  };
  
  module.exports = { loginAdministrativo };