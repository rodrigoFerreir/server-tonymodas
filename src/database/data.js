'use strict'
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Lote = require('../models/Lote');
const Categoria = require('../models/Categoria');
const Produto = require('../models/Produto');
const Preco = require('../models/Preco');
const Cidade = require('../models/Cidade')
const Cliente= require('../models/Cliente')
const Contato = require('../models/Contato')
const Endereco = require('../models/Endereco')
const Venda = require('../models/Venda')

//Inicando conexão com o banco de dados.
const connection = new Sequelize(dbConfig);

//Tratando conexão com o banco de dados.
connection.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

//Iniciando Models
Lote.init(connection);
Categoria.init(connection);
Produto.init(connection);
Preco.init(connection);
Cidade.init(connection);
Cliente.init(connection);
Contato.init(connection);
Endereco.init(connection);
Venda.init(connection);


//Iniciando Relacionamentos
Produto.associate(connection.models);
Preco.associate(connection.models);
Categoria.associate(connection.models);
Lote.associate(connection.models);
Cliente.associate(connection.models);
Cidade.associate(connection.models);
Endereco.associate(connection.models);
Contato.associate(connection.models);
Venda.associate(connection.models);

module.exports = connection;