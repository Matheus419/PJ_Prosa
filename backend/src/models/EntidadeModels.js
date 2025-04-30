import sql from 'mssql';
import { config } from '../database/connection.js'; // Importa a configuração da conexão

// Função para buscar usuários
export async function listarEntidades() {
    try {
        console.log('Conectando ao banco para buscar as entidades...');
        const pool = await sql.connect(config);

        const result = await pool.request()
            .query('SELECT * FROM entidades'); // Troque 'Usuarios' pelo nome real da sua tabela!

        console.log('Entidades encontradas:');
        console.table(result.recordset);

        await pool.close(); // Fecha a conexão
    } catch (error) {
        console.error('Erro as entidades:', error.message);
    }

    
}

listarEntidades();