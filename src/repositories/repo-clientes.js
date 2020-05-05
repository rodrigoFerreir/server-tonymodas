const Cliente = require('../models/Cliente');

exports.getClientes = async () =>{
    return await Cliente.findAll();
}

exports.getClienteById = (id) =>{
    return Cliente.findByPk(id, {
        attributes:['nome', 'cpf', 'referencia'],
        include:[
            {association: 'enderecos', attributes:['logradouro', 'numero', 'bairro', 'complemento']},
            {association:'contatos', attributes:['telefone', 'email']},
        ]
    })
};

exports.getClienteByCPF = (cpf) =>{
    return Cliente.findAll({ where: { cpf } }, {
        attributes:['nome', 'cpf', 'referencia'],
        include:[
            {association: 'enderecos', attributes:['logradouro', 'numero', 'bairro', 'complemento']},
            {association:'contatos', attributes:['telefone', 'email']},
        ]
    })
};

exports.updateCliente = (nome, referencia, cpf) =>{
    return Cliente.update({nome, referencia},{ where:{cpf} })
}