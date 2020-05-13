'use strict';
const Venda = require('../models/Venda')
const Cliente = require('../models/Cliente');
const Produto = require('../models/Produto');
const RepositorioProduto = require('../repositories/repo-produtos')

module.exports = {
    async post(req, res, next) {
        const {
            id_cliente,
            id_produto
        } = req.body;
        const produto = await Produto.findByPk(id_produto);
        const produtoData = await RepositorioProduto.getProdutoById(id_produto)
        const cliente = await Cliente.findByPk(id_cliente);

        console.log(produtoData.valor_venda)

        if (!produto) {
            res.status(400).json({
                message: 'Produto não encontrado'
            })
            return;
        }
        
        if (!cliente) {
            res.status(400).json({
                message: 'Cliente não encontrado'
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
                    message: 'Nova venda realizada'
                })
            }
            produto.addVenda(data[0])
        }).catch((err) => {
            res.status(400).json({
                message: 'Venda não foi realizada, verifique os dados enviados!'
            })
        })
        return res.json(venda);
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