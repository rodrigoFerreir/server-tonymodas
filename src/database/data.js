'use strict'
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Produtos = require('../models/Produto');

const connection = new Sequelize(dbConfig);

connection.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

    Produtos.init(connection);

module.exports = connection;