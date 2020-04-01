'use strict';

const Cliente = require('../models/Cliente');
const ValidationContract = require('../validations/validators');

module.exports = {
    async post(req, res, next) {
        let contract = new ValidationContract();
        contract.hasMinLen(req.body.nome, 3, 'O nome deve conter pelo menos 3 caracteres');
        contract.hasMinLen(req.body.cpf, 11, 'O cpf deve conter pelo menos 11 caracteres');
        contract.hasMinLen(req.body.referencia, 1, 'O título deve conter pelo menos 1 caracteres');

        // Se os dados forem inválidos
        if (!contract.isValid()) {
            res.status(400).send(contract.errors()).end();
            return;
        }
        
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
                if (data) {
                    res.status(200).json(data);
                } else {
                    res.status(200).json({
                        message: 'Nenhum dado encontrado!'
                    })
                }

            }).catch((err) => {
                console.log(err)
                res.status(400).send(err);
            })
    },

    async put(req, res, next) { //não está atualizando;
        const {
            id,
            nome,
            cpf,
            referencia
        } = req.body;

        const cliente = Cliente.findByPk(id)
        if (cliente) {
            Cliente.update({
                nome,
                cpf,
                referencia
            }, {
                where: {
                    nome,
                    cpf,
                    referencia,
                }
            })
            res.status(201).json({
                id,
                message: 'Cliente atualizado com sucesso!'
            });
        } else {
            res.status(201).json({
                id,
                message: 'Cliente não foi atualizado!'
            });
        }
    },

    async delete(req, res, next) {
        const {
            id
        } = req.body;
        const cliente = Cliente.findByPk(id)
        if (cliente) {
            Cliente.destroy({
                where: {
                    id
                }
            });
            res.status(200).json({
                message: 'Cliente excluido!'
            })
        }
        res.status(200).json({
            message: 'Cliente não foi excluido'
        });
    }
};