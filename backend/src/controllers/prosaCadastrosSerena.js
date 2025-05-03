// Importa o pacote de SQL
const sql = require('mssql');
// Importa a conexão com o banco
const db = require('../database/connection');

const criarCadastroProsa = async (req, res) => {
  const { nome, idade, assuntosEvitar, assuntosGosta } = req.body;

  if (!nome || !idade || !assuntosEvitar || !assuntosGosta) {
      return res.status(400).json({ erro: 'Todos os campos são obrigatórios!' });
  }

  try {
      const { pool, sql } = require('../database/connection');

      // Verifica se já existe usuário com o mesmo nome
      const resultado = await pool.request()
          .input('nome', sql.VarChar(255), nome)
          .query(`
              SELECT * FROM cadastros_prosa 
              WHERE nome = @nome and id_entidade = 1
          `);

      if (resultado.recordset.length > 0) {
          return res.status(400).json({ erro: 'Usuário já está cadastrado!.' });
      }

      // Faz a inserção se estiver tudo certo
      await pool.request()
            .input('nome', sql.VarChar(255), nome)
            .input('idade', sql.Int, idade)
            .input('assuntosEvitar', sql.VarChar(255), assuntosEvitar)
            .input('assuntosGosta', sql.VarChar(255), assuntosGosta)
            .query(`
              INSERT INTO cadastros_prosa (nome, idade, assuntos_evitar, hobbies, id_entidade)
              VALUES (@nome, @idade, @assuntosEvitar, @assuntosGosta, 1)
          `);

      return res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
  } catch (erro) {
      console.error(erro);
      res.status(500).json({ erro: 'Erro ao inserir no banco de dados.' });
  }
};

module.exports = { criarCadastroProsa };