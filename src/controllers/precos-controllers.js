'use strict';
const Preco = require('../models/Preco');
const Produto = require('../models/Produto');
const RepositorioPreco = require('../repositories/repo-precos')

module.exports = {
    async post(req, res, next) {
        const {
            valor_compra,
            valor_venda,
            id_lote,
            id_produto
        } = req.body;

        const produto = await Produto.findByPk(id_produto);

        if (!produto) {
            res.status(400).json({
                message: 'Produto nao encontrado'
            })
            return;
        }
        const preco = await Preco.findOrCreate({
            where: {
                valor_compra,
                valor_venda,
                id_lote,
            }
        }).then((data) => {
            if (data[1] === true) {
                res.status(200).json({
                    message: 'Novo Preco criado'
                })
            } else {
                res.status(200).json({
                    message: 'Preco encontrado',
                    dados: data[0]
                })
            }
            produto.addPreco(data[0])
        }).catch((err) => {
            res.status(400).json({
                message: 'Preco não encontrado nem cadastrado, verifique os dados enviados!'
            })
        })
        return res.json(preco);
    },

    async get(req, res, next) {
        RepositorioPreco.get()
            .then((data) => {
                res.status(200).send(data);
            }).catch((err) => {
                console.log(err)
                res.status(400).send(err);
            })
    },

    async getById(req, res, next) {
        const {
            id_preco
        } = req.body
        RepositorioPreco.getPrecoById(id_preco)
            .then((data) => {
                res.status(200).send(data);
            }).catch((err) => {
                console.log(err)
                res.status(400).send(err);
            })
    }
};