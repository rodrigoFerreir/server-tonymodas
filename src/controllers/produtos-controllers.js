'use strict';

const Produto = require('../models/Produto');

module.exports = {
    async post(req, res, next) {
    const { nome, marca, valor_compra, valor_venda } = req.body;
    const produto = await Produto.create({ nome, marca, valor_compra, valor_venda})
    .then(()=>{
        res.status(201).send({
            message:'Produto cadastrado com sucesso.'
        });
    }).catch((err)=>{
        res.status(400).send({
            message: 'Produto não cadastrado.', 
            data: err
        });
    });
    return res.json(produto);
    }
};

// exports.get = (req, res, next) => {
//     res.status(201).send(req.body);
// };

// exports.put = (req, res, next) => {
//     const id = req.params.id;
//     res.status(201).send({
//         id,
//         itens: req.body
//     });
// };

// exports.delete = (req, res, next) => {
//     const id = req.params.id;
//     res.status(200).send(req.body);
// };