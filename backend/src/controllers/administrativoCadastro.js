// Importa o pacote de SQL
const sql = require('mssql');
// Importa a conexão com o banco
const db = require('../database/connection');
//Importa a criptografia
const bcrypt = require('bcrypt');

function formatarCpfInt(cpfInt) {
    cpfInt = cpfInt.replace(/\D/g, '');  // remove tudo que não for número
    cpfInt = cpfInt.replace(/^0+/, '');  // remove zeros à esquerda
    return cpfInt
  }

function formatarCpf(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

const criarCadastroAdministrativo = async (req, res) => {
  const { nome, cpf, email, senha } = req.body;

  if (!nome || !cpf || !email || !senha) {
      return res.status(400).json({ erro: 'Todos os campos são obrigatórios!' });
  }

  const cpfFormatado = formatarCpf(cpf);
  const cpfNumInt = formatarCpfInt(cpf);
  const senhaHash = await bcrypt.hash(senha, 10);

  try {
      const { pool, sql } = require('../database/connection');

      // Verifica se já existe usuário com o mesmo CPF ou e-mail
      const resultado = await pool.request()
          .input('cpf', sql.BigInt, cpfNumInt)
          .input('email', sql.VarChar, email)
          .query(`
              SELECT * FROM cadastro_administrativo 
              WHERE cpf = @cpf OR email = @email
          `);

      if (resultado.recordset.length > 0) {
          return res.status(400).json({ erro: 'CPF ou e-mail já cadastrados.' });
      }

      // Faz a inserção se estiver tudo certo
      await pool.request()
          .input('nome', sql.VarChar, nome)
          .input('cpf', sql.BigInt, cpfNumInt)
          .input('cpfstr', sql.VarChar, cpfFormatado)
          .input('email', sql.VarChar, email)
          .input('openpassword', sql.VarChar, senha)
          .input('passwordhash', sql.VarChar, senhaHash)
          .query(`
              INSERT INTO cadastro_administrativo (nome, cpf, cpfstr, email, openpassword, passwordhash)
              VALUES (@nome, @cpf, @cpfstr, @email, @openpassword, @passwordhash)
          `);

      return res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
  } catch (erro) {
      console.error(erro);
      res.status(500).json({ erro: 'Erro ao inserir no banco de dados.' });
  }
};

module.exports = { criarCadastroAdministrativo };