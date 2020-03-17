'use strict';

const Cidade = require('../models/Cidade');

module.exports = {
    async post(req, res, next) {
        const { nome, cep } = req.body;
        const cidade = await Cidade.create({ nome, cep })
            .then(() => {
                res.status(201).send({
                    message: 'Cidade cadastrada com sucesso.'
                });
            }).catch((err) => {
                res.status(400).send({
                    message: 'Cidade não cadastrada.',
                    data: err
                }, console.log(err));
            });
        return res.json(cidade);
    },

    async get(req, res, next) {
        Cidade.findAll()
        .then((data)=>{
            res.status(200).send(data);
        }).catch((err)=>{
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

    async delete(req, res, next){
        const id = req.params.id;
        res.status(200).send(req.body);
    }
};
