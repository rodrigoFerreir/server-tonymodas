'use strict';

const express = require('express');
const bodyParser = require('body-parser');

//conectando banco de dados
require('./database/data');

const app = express();


//cofigurando bodyParser para recebimento de requisição
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//carregar rotas
const indexRoutes = require('./routes/routes-index');
const produtosRoutes = require('./routes/routes-produtos');
const lotesRoutes = require('./routes/routes-lotes');

app.use('/', indexRoutes);
app.use('/produtos', produtosRoutes);
app.use('/lotes', lotesRoutes)

module.exports = app;