'use strict';

const Cliente = require('../models/Cliente');
const RepositorioCliente = require('../repositories/repo-clientes')
const ValidationContract = require('../validations/validators');

module.exports = {
    async post(req, res, next) {
        let contract = new ValidationContract();
        contract.hasMinLen(req.body.nome, 3, 'O nome deve conter pelo menos 3 caracteres');
        contract.hasMinLen(req.body.cpf, 11, 'O cpf deve conter pelo menos 11 caracteres');
        contract.hasMinLen(req.body.referencia, 1, 'A referencia deve conter pelo menos 1 caracteres');

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

    async postCliente(req, res, next) {
        let contract = new ValidationContract();
        contract.hasMinLen(req.body.nome, 3, 'O nome deve conter pelo menos 3 caracteres');
        contract.hasMinLen(req.body.cpf, 11, 'O cpf deve conter pelo menos 11 caracteres');
        contract.hasMinLen(req.body.referencia, 1, 'A referencia deve conter pelo menos 1 caracteres');

        // Se os dados forem inválidos
        if (!contract.isValid()) {
            res.status(400).send(contract.errors()).end();
            return;
        }
        const {
            nome,
            referencia,
            cpf,
            logradouro,
            numero,
            bairro,
            complemento,
            telefone,
            email,
            nome_cidade,
            cep,
            uf
        } = req.body;
        const cliente = await RepositorioCliente.postClienteData({
                nome,
                referencia,
                cpf,
                logradouro,
                numero,
                bairro,
                complemento,
                telefone,
                email,
                nome_cidade,
                cep,
                uf,
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


    async getAll(req, res, next) {
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

    async getById(req, res, next) {
        const {
            id_cliente
        } = req.body
        RepositorioCliente.getClienteById(id_cliente)
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

    async returnIdByCPF(req, res, next) {
        const {
            cpf
        } = req.body
        RepositorioCliente.getClienteByCPF(cpf)
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
            nome,
            cpf,
            referencia
        } = req.body;

        let cliente = RepositorioCliente.getClienteByCPF(cpf)
        if (cliente) {
            cliente = RepositorioCliente.updateCliente(nome, referencia, cpf).then(() => {
                res.status(200).json({
                    message: 'Cliente atualizado com sucesso!'
                })
            })
        } else {
            res.status(400).json({
                cpf,
                message: 'Cliente não foi atualizado!'
            });
        }
    },

    async delete(req, res, next) {
        let {
            cpf
        } = req.body;
        const cliente = RepositorioCliente.getClienteByCPF(cpf)
        if (cliente) {
            Cliente.destroy({
                where: {
                    cpf
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