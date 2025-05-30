import express from 'express';
import chalk from 'chalk';
import webRoutes from './routes/web.js';
import criarBanco  from './config/database.js'; 
import sequelize from './config/db.js';             

const app = express();

app.use(express.json());

app.use("/", webRoutes);

const webPort = process.env.PORT || 3000;
const nodePort = process.env.NODE_PORT || webPort;

// Função assíncrona para iniciar o app
async function iniciar() {
  try {
    console.log('Criando banco, se necessário...');
    await criarBanco();
    console.log('Banco pronto! Conectando Sequelize...');
    await sequelize.authenticate();
    console.log('Conectado! Sincronizando tabelas...');
    await sequelize.sync();
    console.log('Tabelas sincronizadas!');

    app.listen(nodePort, () => {
      console.log(chalk.green(`Servidor rodando: http://localhost:${webPort}`));
    });
  } catch (err) {
    console.error(chalk.red('Erro ao iniciar o servidor:'), err);
  }
}


iniciar();
