'use strict';

const Lote = require('../models/Lote');
const Categoria = require('../models/Categoria');
const Produto = require('../models/Produto');
const Preco = require('../models/Precos');
const ValidationContract = require('../validations/validators');
const ProdutoRepository = require('../repositories/repo-produtos');
const PrecoRepository = require('../repositories/repo-precos');

module.exports = {
    async postPreco(req, res, next) {
        const {
            valor_compra,
            valor_venda
        } = req.body
        const preco = await Preco.create({
                valor_compra,
                valor_venda
            })
            .then(() => {
                res.status(201).send({
                    message: 'Preco cadastrado com sucesso.'
                });
            }).catch((err) => {
                res.status(400).send({
                    message: 'Preco não cadastrado.',
                    data: err
                });
                console.log(err)
            });
        res.send(preco)
    },

    async getPrecos(req, res, next) {
        PrecoRepository
            .get()
            .then((data) => {
                res.status(200).send(data)
            }).catch((err) => {
                res.status(400).send(err);
            });
    },
    async post(req, res, next) {
        let contract = new ValidationContract();
        contract.hasMinLen(req.body.nome, 3, 'O nome deve conter pelo menos 3 caracteres');
        contract.hasMinLen(req.body.cpf, 11, 'O cpf deve conter pelo menos 11 caracteres');
        contract.hasMinLen(req.body.referencia, 1, 'O título deve conter pelo menos 1 caracteres');
        const {
            id_lote,
            id_categoria,
            id_preco
        } = req.body;
        const {
            nome,
            marca,
            quantidade
        } = req.body;

        console.log(req.body)

        const lote = Lote.findByPk(id_lote);
        const categoria = Categoria.findByPk(id_categoria);
        const preco = Preco.findByPk(id_preco);

        if (!lote || !categoria) {
            res.status(400).json({
                message: 'Lote ou Categoria não encotrada'
            })
        }
        if (!preco) {
            res.status(400).json({
                message: 'Preco não encotrado'
            })
        }
        const produto = await Produto.create({
                nome,
                marca,
                quantidade,
                id_lote,
                id_categoria,
                id_preco,
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
                console.log(err, 'idpreco:', id_preco)
            });
        res.send(produto)
    },

    async get(req, res, next) {
        ProdutoRepository
            .get()
            .then((data) => {
                res.status(200).send(data)
            }).catch((err) => {
                res.status(400).send(err);
            });
    },

    async get(req, res, next) {
        ProdutoRepository
            .getProdutoById(req.params.id_produto)
            .then((data) => {
                res.status(200).send(data)
            }).catch((err) => {
                res.status(400).send(err);
            });
    },

    async put(req, res, next) {
        const {
            id
        } = req.params;
        const {
            nome,
            marca,
            valor_compra,
            valor_venda,
            quantidade
        } = req.body;
        const produto = await Produto.findByPk(id)
        if (!produto) {
            res.status(400).send('Produto não encontrado.')
        }
        await Produto.update({
            nome,
            marca,
            valor_compra,
            valor_venda,
            quantidade,
        }, {
            where: {
                id,
            }
        }).then(() => {
            res.status(200).send('Produto alterado!').send(req.body);
        }).catch((err) => {
            res.status(400).send('Não foi possivel atualizar produto.')
        });
    }, //erro ao atualizar.

    async delete(req, res, next) {
        const {
            id
        } = req.body;
        const produto = Produto.findByPk(id)
        if (produto) {
            Produto.destroy({
                where: {
                    id
                }
            });
            res.status(200).json({
                message: 'Produto excluido!'
            })
        }
        res.status(200).json({
            message: 'Produto não foi excluido'
        });
    }
};