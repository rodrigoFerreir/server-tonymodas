'use strict';

const Categoria = require('../models/Categoria');

module.exports = {
    async post(req, res, next) {
        const { nome } = req.body;
        const categoria = await Categoria.create({ nome })
            .then(() => {
                res.status(201).send({
                    message: 'Categoria cadastrado com sucesso.'
                });
            }).catch((err) => {
                res.status(400).send({
                    message: 'Categoria não cadastrado.',
                    data: err
                });
            });
        return res.json(categoria);
    },

    async get(req, res, next) {
        Categoria.findAll()
        .then((data)=>{
            res.status(200).send(data);
        }).catch((err)=>{
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

    async delete(req, res, next){
        const id = req.params.id;
        res.status(200).send(req.body);
    }
};