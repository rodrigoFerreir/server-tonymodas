'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

//conectando banco de dados
//require('./database/data');
mongoose.connect("mongodb+srv://tony:latony@cluster0-hlanl.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();


//cofigurando bodyParser para recebimento de requisição
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(require('./routes/routes-arquivos'));

app.listen(3001,()=>{
    console.log("Servidor rodando na porta 3000")
});

//carregar rotas
const indexRoutes = require('./routes/routes-index');
const produtosRoutes = require('./routes/routes-produtos');
const lotesRoutes = require('./routes/routes-lotes');
const categoriasRoutes = require('./routes/routes-categorias');

app.use('/', indexRoutes);
app.use('/produtos', produtosRoutes);
app.use('/lotes', lotesRoutes)
app.use('/categorias', categoriasRoutes)

module.exports = app;