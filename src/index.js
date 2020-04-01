'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
//const mongoose = require('mongoose');

//conectando banco de dados
require('./database/data');
// mongoose.connect("mongodb+srv://tony:latony@cluster0-hlanl.mongodb.net/test?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

const app = express();


//cofigurando bodyParser para recebimento de requisição
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

//carregar rotas
const indexRoutes = require('./routes/routes-index');
const produtosRoutes = require('./routes/routes-produtos');
const lotesRoutes = require('./routes/routes-lotes');
const categoriasRoutes = require('./routes/routes-categorias');
const cidadesRoutes = require('./routes/routes-cidades');
const clientesRoutes = require('./routes/routes-clientes');
const contatosRoutes = require('./routes/routes-contatos');
const enderecosRoutes = require('./routes/routes-enderecos');
const postRoutes = require('./routes/routes-arquivos');

//usando as rotas
app.use('/', indexRoutes);
app.use('/produtos', produtosRoutes);
app.use('/lotes', lotesRoutes);
app.use('/categorias', categoriasRoutes);
app.use('/cidades', cidadesRoutes);
app.use('/clientes', clientesRoutes);
app.use('/contatos', contatosRoutes);
app.use('/enderecos', enderecosRoutes);
app.use('/arquivos', postRoutes);

module.exports = app;