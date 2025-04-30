import sql from 'mssql';
import { config } from '../database/connection.js'; // Importa a configuração da conexão

// Função para buscar usuários
export async function listarLicencas() {
    try {
        console.log('Conectando ao banco para buscar Licencas...');
        const pool = await sql.connect(config);

        const result = await pool.request()
            .query('SELECT * FROM tipo_licenca'); // Troque 'Usuarios' pelo nome real da sua tabela!

        console.log('Licencas encontradas:');
        console.table(result.recordset);

        await pool.close(); // Fecha a conexão
    } catch (error) {
        console.error('Erro ao buscar Licencas:', error.message);
    }

    
}

listarLicencas();