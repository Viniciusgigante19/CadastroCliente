# API RESTful de Cadastro de Clientes

Este projeto oferece uma API para gerenciar clientes (cadastrar, buscar, atualizar e deletar).

---

## Como usar esta API - Passo a passo para iniciantes

### O que você precisa instalar antes

- [Git Bash](https://git-scm.com/downloads)
- [Docker Desktop](https://www.docker.com/products/docker-desktop)

---

### Passo 1: Abrir o Git Bash

No Windows, clique no menu Iniciar e digite **Git Bash**, depois abra o programa.

---

### Passo 2: Baixar o projeto para o seu computador

No Git Bash, copie e cole o comando abaixo e aperte Enter:

```bash
git clone https://github.com/Viniciusgigante19/CadastroCliente.git

Passo 3: Entrar na pasta do projeto
Ainda no Git Bash, digite:

(bash)
-cd CadastroCliente

Passo 4: Rodar a API com Docker Compose
Com o Docker Desktop aberto (ele precisa estar rodando), execute no Git Bash:
-docker-compose up --build

Testar a API
Agora a API está rodando na porta 3000 do seu computador. Você pode usar ferramentas como Insomnia ou Postman para enviar requisições.

As rotas principais são:

Método	URL	Descrição

(OBSERVAÇÃO: o método de consulta usa POST ao invés de GET propositalmente para facilitar o uso de filtros no body.)

1-POST	http://localhost:3000/api/customer	 --Cadastrar um novo cliente
2-POST	http://localhost:3000/api/customer/search	 --Buscar clientes com filtros
3-PUT	http://localhost:3000/api/customer/:cpf	 --Atualizar cliente pelo CPF
4-DELETE	http://localhost:3000/api/customer/:cpf	 --Deletar cliente pelo CPF

No método (1) teste com a URL indicada acima e no corpo da requisição JSON use:

{
  "nome": "João Pereira",
  "data_nascimento": "1985-07-20",
  "rg": "MG1234567",
  "cpf": "123.456.789-01",
  "telefone": "31999998888",
  "endereco": "Av. Brasil, 1000",
  "numero": "1000",
  "cidade": "Belo Horizonte",
  "uf": "MG",
  "cep": "30140000"
}

No método (2) teste com a URL indicada acima e no corpo da requisição JSON use:
{
  "nome": "João",
  "cidade": "Belo Horizonte"
}

No método (3)  teste com a URL indicada acima e no corpo da requisição JSON use:
Use a URL indicada acrescida do CPF da pessoa que vai ser atualizada!
EX:http://localhost:3000/api/customer/12345678901
{
  "nome": "Maria Souza Silva",
  "telefone": "31988888888",
  "cidade": "Contagem",
  "uf": "MG",
  "novoCpf": "098.765.432-10"
}

No método (4)  teste com a URL indicada acima e no corpo da requisição JSON use:
Use a mesma URL acrescida do cpf de quem vá ser deletado!
http://localhost:3000/api/customer/12345678901
