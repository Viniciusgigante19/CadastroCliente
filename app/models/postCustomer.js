import Cliente from '../../config/cliente.js';

export default async function CreateCustomer(req, res) {
  try {
    const {
      nome,
      data_nascimento,
      rg,
      cpf,
      telefone,
      endereco,
      numero,
      cidade,
      uf,
      cep
    } = req.body;

    const novoCliente = await Cliente.create({
      nome,
      data_nascimento,
      rg,
      cpf,
      telefone,
      endereco,
      numero,
      cidade,
      uf,
      cep
    });

    return res.status(201).json({
      message: 'Cliente criado com sucesso',
      cliente: novoCliente
    });
  } catch (err) {
    console.error('Erro ao criar cliente:', err);
    return res.status(500).json({ message: 'Erro ao criar cliente', error: err.message });
  }
}
