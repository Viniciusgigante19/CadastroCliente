# API RESTful de Cadastro de Clientes

Este projeto é uma API para cadastro, busca, atualização e remoção de clientes. Ele utiliza **Node.js**, **Express**, **Sequelize** e um banco de dados **PostgreSQL** rodando via **Docker Compose**.

## 🚀 Tecnologias Usadas

- Node.js
- Express
- Sequelize
- PostgreSQL
- Docker e Docker Compose

## 📦 Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

## 🔧 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Viniciusgigante19/CadastroCliente.git
2. Acesse a pasta do projeto
bash
Copiar
Editar
cd CadastroCliente
3. Suba os containers com Docker Compose
bash
Copiar
Editar
docker-compose up --build
Isso iniciará o backend e o banco de dados PostgreSQL com os volumes e ports definidos.

📬 Rotas da API
POST /api/customer/search → Buscar clientes por filtros

POST /api/customer → Cadastrar cliente

PUT /api/customer/:cpf → Atualizar cliente pelo CPF

DELETE /api/customer/:cpf → Deletar cliente pelo CPF

🗂️ Estrutura de Pastas
