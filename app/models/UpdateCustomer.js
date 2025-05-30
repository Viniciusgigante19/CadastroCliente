import Cliente from '../../config/cliente.js';

export default async function UpdateCustomer(req, res) {
  const { cpf } = req.params;

  const {
    nome,
    data_nascimento,
    rg,
    novoCpf,
    telefone,
    endereco,
    numero,
    cidade,
    uf,
    cep
  } = req.body;

  try {
    const cliente = await Cliente.findOne({ where: { cpf } });

    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado.' });
    }

        // Verifica se o novo CPF já existe para outro cliente
    if (novoCpf && novoCpf !== cpf) {
      const clienteComMesmoCpf = await Cliente.findOne({ where: { cpf: novoCpf } });

      if (clienteComMesmoCpf) {
        return res.status(400).json({ message: 'CPF já está em uso por outro cliente.' });
      }
    }


    await cliente.update({
      nome,
      data_nascimento,
      rg,
      cpf: novoCpf || cpf,
      telefone,
      endereco,
      numero,
      cidade,
      uf,
      cep
    });

    return res.status(200).json({ message: 'Cliente atualizado com sucesso.', cliente });

  } catch (error) {
    console.error('Erro ao atualizar cliente: ', error);
    return res.status(500).json({ message: 'Erro interno no servidor.' });
  }
};
