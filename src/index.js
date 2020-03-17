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
const categoriasRoutes = require('./routes/routes-categorias');
const cidadesRoutes = require('./routes/routes-cidades');
const clientesRoutes = require('./routes/routes-clientes');
const contatosRoutes = require('./routes/routes-contatos');
const enderecosRoutes = require('./routes/routes-enderecos')

app.use('/', indexRoutes);
app.use('/produtos', produtosRoutes);
app.use('/lotes', lotesRoutes)
app.use('/categorias', categoriasRoutes)
app.use('/cidades', cidadesRoutes)
app.use('/clientes', clientesRoutes)
app.use('/contatos', contatosRoutes)
app.use('/enderecos', enderecosRoutes)

module.exports = app;