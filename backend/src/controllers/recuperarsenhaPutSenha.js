const sql = require('mssql');
// Importa a conexão com o banco
const db = require('../database/connection');

const atualizarSenha = async (req, res) => {
    const { email } = req.params;
    const {novaSenha} = req.body;

    if (!novaSenha) {
        return res.status(400).json({ erro: 'A nova senha é obrigatória.' });
    }

    try {
        const { pool, sql } = require('../database/connection');
        const senhaHash = await require('bcrypt').hash(novaSenha, 10);

        const resultado = await pool.request()
            .input('email', sql.VarChar, email)
            .input('novaSenhaHash', sql.VarChar, senhaHash)
            .input('novaSenhaAberta', sql.VarChar, novaSenha)
            .query(`
                UPDATE cadastro_administrativo
                SET passwordhash = @novaSenhaHash,
                    openpassword = @novaSenhaAberta
                WHERE email = @email;
            
                UPDATE voluntarios
                SET openpassword = @novaSenhaAberta, passwordhash = @novaSenhaHash
                WHERE email = @email;
            `)

        if (resultado.rowsAffected[0] === 0) {
            return res.status(404).json({ erro: 'Usuário não encontrado para atualizar.' });
        }

        return res.status(200).json({ mensagem: 'Senha atualizada com sucesso.' });
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: 'Erro ao atualizar senha.' });
    }
};

module.exports = {atualizarSenha};