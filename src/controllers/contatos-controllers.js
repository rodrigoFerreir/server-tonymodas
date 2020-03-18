'use strict';
const Contato = require('../models/Contato')
const Cliente = require('../models/Cliente');

module.exports = {
    async post(req, res, next) {
        const { id_cliente } = req.body;
        const {
            telefone,
            email
        } = req.body;

        const cliente = await Cliente.findByPk(id_cliente);


        if (!cliente) {
            res.status(400).send({
                message: 'Cliente não encotrado'
            })
        }

       const contato = await Contato.create({
                telefone,
                email,
                id_cliente,
            })
            .then(() => {
                res.status(201).send({
                    message: 'Contato cadastrado com sucesso.'
                });
            }).catch((err) => {
                res.status(400).send({
                    message: 'Contato não cadastrado.',
                    data: err
                });
            });
        return res.json(contato);
    },

    async get(req, res, next) {
        Contato.findAll()
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