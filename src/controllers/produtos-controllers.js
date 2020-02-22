'use strict';

const Produto = require('../models/Produto');

module.exports = {
    async post(req, res, next) {
        const {
            nome,
            marca,
            valor_compra,
            valor_venda
        } = req.body;
        const produto = await Produto.create({
                nome,
                marca,
                valor_compra,
                valor_venda
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
            .then((data)=> {
                res.status(200).send(data)
            }).catch((err)=> {
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
    async delete(req, res, next){
        const id = req.params.id;
        res.status(200).send(req.body);
    }
};

// 
// };

