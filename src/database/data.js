'use strict'
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Lote = require('../models/Lote');
const Categoria = require('../models/Categoria');
const Produto = require('../models/Produto');

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

//Iniciando Relacionamentos
Produto.associate(connection.models);
Categoria.associate(connection.models);
Lote.associate(connection.models);

module.exports = connection;