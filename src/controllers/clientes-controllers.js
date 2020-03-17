'use strict';

const Cliente = require('../models/Cliente');

module.exports = {
    async post(req, res, next) {
        console.log(req.body)
        const {
            nome,
            cpf,
            referencia
        } = req.body;
        const cliente = await Cliente.create({
                nome,
                cpf,
                referencia
            })
            .then(() => {
                res.status(201).send({
                    message: 'Cliente cadastrado com sucesso.'
                });
            }).catch((err) => {
                res.status(400).send({
                    message: 'Cliente não cadastrado.',
                    data: err
                });
            });
        return res.json(cliente);
    },

    async get(req, res, next) {
        Cliente.findAll()
            .then((data) => {
                res.status(200).send(data);
            }).catch((err) => {
                console.log(err)
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