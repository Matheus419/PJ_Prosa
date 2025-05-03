// Importa o pacote de SQL
const sql = require('mssql');
// Importa a conexão com o banco
const db = require('../database/connection');

const buscarEmailRedefinirSenha = async (req, res) => {
    const {email} = req.params;

    try {
        const { pool, sql } = require('../database/connection');

        const resultado = await pool.request()
            .input('email', sql.VarChar, email)
            .query(`select email from cadastro_administrativo where email = @email union select email from voluntarios where email = @email`);

        if (resultado.recordset.length === 0) {
            return res.status(404).json({erro: 'E-mail não encontrado'})
        }

        return res.status(200).json({email: resultado.recordset[0].email})
    } catch(erro) {
        console.error(erro);
        res.status(500).json({erro: 'Erro ao buscar usuário!'});
    }
};

module.exports = { buscarEmailRedefinirSenha };