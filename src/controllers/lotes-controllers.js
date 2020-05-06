'use strict';
const Lote = require('../models/Lote');
const RepositorioLote = require('../repositories/repo-lotes')

module.exports = {
    async post(req, res, next) {
        const {
            referencia
        } = req.body;
        const lote = await Lote.create({
                referencia
            })
            .then(() => {
                res.status(201).send({
                    message: 'Lote cadastrado com sucesso.'
                });
            }).catch((err) => {
                res.status(400).send({
                    message: 'Lote não cadastrado.',
                    data: err
                }, console.log(err));
            });
        return res.json(lote);
    },

    async get(req, res, next) {
        Lote.findAll()
            .then((data) => {
                res.status(200).json({
                    data
                });
            }).catch((err) => {
                console.log(err)
                res.status(400).json({
                    err,
                    mensage: 'Nenhum produto encontrado'
                });
            })
    },

    async getForReferencia(req, res, next) {
        const {
            referencia
        } = req.body;
        RepositorioLote.getPrecoByReferencia(referencia).then((data)=>{
            res.status(200).json({data})
        }).catch((err)=>{
            res.status(400).json({err, message:'Nenhum dado encontrado!'})
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