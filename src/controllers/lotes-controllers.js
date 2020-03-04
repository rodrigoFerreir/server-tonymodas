'use strict';
const Produto = require('../models/Produto')
const Lote = require('../models/Lote');

module.exports = {
    async post(req, res, next) {
        const { id_produto } = req.params;
        const { referencia } = req.body;

        const produto = await Produto.findByPk(id_produto);


        if (!produto) {
            res.status(400).send({ message: 'Produto nao encotrado'})
        }

        const [lote] = await Lote.findOrCreate({
                where: { referencia }
            })
            .then(() => {
                res.status(201).send({
                    message: 'Lote cadastrado com sucesso.'
                });
            }).catch((err) => {
                res.status(400).send({
                    message: 'Lote não cadastrado.',
                    data: err
                });
            });
            await produto.addLote(lote)
        return res.json(lote);
    },

    async get(req, res, next) {
        Lote.findAll()
            .then((data) => {
                res.status(200).send(data);
            }).catch((err) => {
                res.status(400).send(err);
            })
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