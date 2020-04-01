const Endereco = require('../models/Endereco')
const Cidade = require('../models/Cidade');
const Cliente = require('../models/Cliente');

module.exports = {
    async post(req, res, next) {
        const { id_cliente } = req.body;
        const { id_cidade } = req.body;
        const {
            logradouro,
            numero,
            bairro,
            complemento,
        } = req.body;

         const cliente = await Cliente.findByPk(id_cliente);
         const cidade = await Cidade.findByPk(id_cidade);

        //implementar quando ciadade nao existir criar-la
        if (!cidade || !cliente) {
            res.status(400).send({
                message: 'Cidade ou Cliente não encotrados'
            })
        };
        console.log('entrou em cadastro')
        const endereco = await Endereco.create({
                logradouro,
                numero,
                bairro,
                complemento,
                id_cidade,
                id_cliente,
            })
            .then(() => {
                console.log('status ok')
                res.status(201).send({
                    message: 'Endereço cadastrado com sucesso.'
                });
            }).catch((err) => {
                console.log('status err')
                res.status(400).send({
                    message: 'Endereço não cadastrado.',
                    data: err
                });
                console.log(err)
            });
        return res.json(endereco);
    },

    async get(req, res, next) {
        Endereco.findAll()
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
        const {
            id
        } = req.body;
        const cidade = Cidade.findByPk(id)
        if (cidade) {
            Cidade.destroy({
                where: {
                    id
                }
            });
            res.status(200).json({
                message: 'Cidade excluida!'
            })
        }
        res.status(200).json({
            message: 'Cidade não foi excluida'
        });
    }
};