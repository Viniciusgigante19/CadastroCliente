import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Client } = pkg;

export default async function criarBanco() {
  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
    database: 'postgres' // conecta no DB padrão para criar outro DB
  });

  try {
    await client.connect();
    await client.query(`CREATE DATABASE ${process.env.POSTGRES_DB};`);
    console.log('Banco criado com sucesso!');
  } catch (err) {
    if (err.code === '42P04') { // código erro DB já existe
      console.log('Banco já existe, pulando criação...');
    } else {
      console.error('Erro criando banco:', err);
      throw err;
    }
  } finally {
    await client.end();
  }
}
