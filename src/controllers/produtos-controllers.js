'use strict';

const Lote = require('../models/Lote');
const Categoria = require('../models/Categoria');
const Produto = require('../models/Produto');

module.exports = {
    async post(req, res, next) {
        const { id_lote, id_categoria } = req.query;
        const { nome, marca, valor_compra, valor_venda, quantidade } = req.body;

        const lote = Lote.findByPk(id_lote);
        const categoria = Categoria.findByPk(id_categoria);

        if(!lote && !categoria){
            res.status(400).send({message : 'Lote ou Categoria nao encotrado'})
        }
        await Produto.create({
            nome,
            marca,
            valor_compra,
            valor_venda,
            quantidade,
            id_lote,
            id_categoria,
        })
        .then(() => {
            res.status(201).send({
                message: 'Produto cadastrado com sucesso.'
            });
        }).catch((err) => {
            res.status(400).send({
                message: 'Produto não cadastrado.',
                data: err
            });
        });
    },

    async get(req, res, next) {
        Produto.findAll()
            .then((data) => {
                res.status(200).send(data)
            }).catch((err) => {
                res.status(400).send(err);
            });
    },

    async put(req, res, next) {
        const id = req.params.id;
        res.status(201).send({
            id,
            itens: req.body
        });
    },
    async delete(req, res, next) {
        const id = req.params.id;
        res.status(200).send(req.body);
    }
};

// 
// };