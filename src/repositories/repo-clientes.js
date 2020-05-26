const Cliente = require('../models/Cliente');
const Endereco = require('../models/Endereco');
const Cidade = require('../models/Cidade');
const Contato = require('../models/Contato');

exports.returnIdByCPF = async (cpf) =>{
    const id_cliente = Cliente.findAll({ where: { cpf } }, {
        attributes:['id'],
    })
    return id_cliente[1]
}

exports.postClienteData = async (nome, referencia, cpf, logradouro, numero, bairro, complemento, telefone, email, nome_cidade, cep )=>{
    Cliente.create({
        nome,
        cpf,
        referencia,
    })
    const id_cliente = this.returnIdByCPF(cpf);

    Endereco.create({
        id_cliente,
        logradouro, 
        numero,
        bairro,
        complemento,
    })

    Contato.create({ id_cliente, telefone, email})

    Cidade.create({nome: nome_cidade, cep});

}

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
        attributes:['id', 'nome', 'cpf', 'referencia'],
        include:[
            {association: 'enderecos', attributes:['logradouro', 'numero', 'bairro', 'complemento']},
            {association:'contatos', attributes:['telefone', 'email']},
        ]
    })
};

exports.updateCliente = (nome, referencia, cpf) =>{
    return Cliente.update({nome, referencia},{ where:{cpf} })
}