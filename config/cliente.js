import { DataTypes } from 'sequelize';
import sequelize from './db.js';

const Cliente = sequelize.define('clientes', {
  codigo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Nome não pode ser vazio' },
    },
  },
  data_nascimento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  rg: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  cpf: {
    type: DataTypes.STRING(14),
    allowNull: false,
    unique: true,
    validate: {
      is: {
        args: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
        msg: 'CPF inválido (formato: xxx.xxx.xxx-xx)',
      },
    },
  },
  telefone: {
    type: DataTypes.STRING(20),
    allowNull: true,
    validate: {
      is: {
        args: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
        msg: 'Telefone inválido (ex: (11) 91234-5678)',
      },
    },
  },
  endereco: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  numero: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  cidade: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  uf: {
    type: DataTypes.CHAR(2),
    allowNull: true,
  },
  cep: {
    type: DataTypes.STRING(9),
    allowNull: true,
  },
}, {
  tableName: 'clientes', // nome da tabela no banco
  timestamps: false,     // desativa createdAt e updatedAt
});

export default Cliente;
