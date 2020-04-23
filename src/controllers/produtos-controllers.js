'use strict';
const Lote = require('../models/Lote');
const Categoria = require('../models/Categoria');
const Produto = require('../models/Produto');
const ValidationContract = require('../validations/validators');
const ProdutoRepository = require('../repositories/repo-produtos');

module.exports = {

    async post(req, res, next) {
        let contract = new ValidationContract();
        contract.hasMinLen(req.body.nome, 3, 'O nome deve conter pelo menos 3 caracteres');
        contract.hasMinLen(req.body.marca, 2, 'a marca deve conter pelo menos 3 caracteres');
        // Se os dados forem inválidos
        if (!contract.isValid()) {
            res.status(400).send(contract.errors()).end();
            return;
        }
        const {
            id_lote,
            id_categoria,
        } = req.body;
        const {
            nome,
            marca,
            quantidade,
            tamanho,
            observacao,
        } = req.body;

        const lote = Lote.findByPk(id_lote);
        const categoria = Categoria.findByPk(id_categoria);

        if (!lote || !categoria) {
            res.status(400).json({
                message: 'Lote ou Categoria não encotrada'
            })
        }
        const produto = await Produto.create({
                nome,
                marca,
                quantidade,
                tamanho,
                observacao,
                id_lote,
                id_categoria,
            })
            .then(() => {
                res.status(201).json({
                    message: 'Produto cadastrado com sucesso.'
                });
            }).catch((err) => {
                res.status(400).json({
                    message: 'Produto não cadastrado.',
                    data: err
                });
                console.log(err)
            });
        return res.json(produto)
    },
    async getAll(req, res, next) {
        await ProdutoRepository
            .getProdutos()
            .then((data) => {
                res.status(200).send(data)
            }).catch((err) => {
                res.status(400).send(err);
            });

    },

    async getId(req, res, next) {
        ProdutoRepository
            .getProdutoById(req.body.id_produto)
            .then((data) => {
                if (data === null) {
                    res.status(400).json({
                        message: 'Produto não encotrado!'
                    })
                }
                res.status(200).json(data)
            }).catch((err) => {
                res.status(400).json(err);
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
            tamanho,
            observacao,
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