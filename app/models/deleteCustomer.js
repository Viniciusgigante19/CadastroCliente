import Cliente from '../../config/cliente.js';

export default async function DeleteCustomer(req, res) {
  const { cpf } = req.params;

  try {
    const cliente = await Cliente.findOne({ where: { cpf } });

    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado.' });
    }

    await cliente.destroy();

    return res.json({ message: 'Cliente deletado com sucesso.' });

  } catch (error) {
    console.error('Erro ao deletar cliente:', error);
    return res.status(500).json({ message: 'Erro interno no servidor.' });
  }
}
