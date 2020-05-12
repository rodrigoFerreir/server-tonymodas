'use strict';
const Venda = require('../models/Venda')
const Cliente = require('../models/Cliente');
const Produto = require('../models/Produto');
const RepositorioPreco = require('../repositories/repo-precos')

module.exports = {
    async post(req, res, next) {
        const {
            id_cliente,
            id_produto
        } = req.body;
        const produto = await Produto.findByPk(id_produto);
        const valor_final = Produto.describe()
        console.log(valor_final)

        if (!produto) {
            res.status(400).json({
                message: 'Produto não encontrado'
            })
            return;
        }
        const venda = await Venda.create({
            id_cliente,
            id_produto,
            valor_final
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
    },
    
    async getByValor(req, res, next) {
        const {
            valor_venda
        } = req.body
        RepositorioPreco.getPrecoByValor_venda(valor_venda)
            .then((data) => {
                res.status(200).json({data});
            }).catch((err) => {
                console.log(err)
                res.status(400).json({err, message: 'Nenhum dado encontrado!'});
            })
    }
};