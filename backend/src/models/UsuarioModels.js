import sql from 'mssql';
import { config } from '../database/connection.js'; // Importa a configuração da conexão

// Função para buscar usuários
export async function listarUsuarios() {
    try {
        console.log('Conectando ao banco para buscar usuários...');
        const pool = await sql.connect(config);

        const result = await pool.request()
            .query('SELECT * FROM voluntarios'); // Troque 'Usuarios' pelo nome real da sua tabela!

        console.log('Usuários encontrados:');
        console.table(result.recordset);

        await pool.close(); // Fecha a conexão
    } catch (error) {
        console.error('Erro ao buscar usuários:', error.message);
    }
}
