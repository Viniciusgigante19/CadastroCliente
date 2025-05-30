import { Op } from 'sequelize';
import Cliente from '../../config/cliente.js';

export default async function GetCustomer(req, res) {
  try {
    const { nome, telefone, cpf, rg, cidade, uf, cep } = req.body;

    const where = {};

    if (nome) where.nome = { [Op.iLike]: `%${nome}%` };
    if (telefone) where.telefone = { [Op.iLike]: `%${telefone}%` };
    if (cpf) where.cpf = cpf;
    if (rg) where.rg = { [Op.iLike]: `%${rg}%` };
    if (cidade) where.cidade = { [Op.iLike]: `%${cidade}%` };
    if (uf) where.uf = uf.toUpperCase();
    if (cep) where.cep = { [Op.iLike]: `%${cep}%` };

    const clientes = await Cliente.findAll({ where });

    if (clientes.length === 0) {
      return res.status(404).json({ message: 'Nenhum cliente encontrado com os filtros informados.' });
    }

    return res.status(200).json(clientes);
  } catch (error) {
    console.error('Erro ao buscar cliente:', error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
}
