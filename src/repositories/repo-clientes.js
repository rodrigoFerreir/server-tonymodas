const Cliente = require('../models/Cliente');
const Endereco = require('../models/Endereco');
const Cidade = require('../models/Cidade');
const Contato = require('../models/Contato');

exports.postClienteData = async (nome, referencia, cpf, logradouro, numero, bairro, complemento, telefone, email, nome_cidade, cep, uf) => {
   const cliente = Cliente.create({
        nome,
        cpf,
        referencia,
    })

   const endereco = Endereco.create({
        cpf_cliente:cpf,
        logradouro,
        numero,
        bairro,
        complemento,
    })

    const contato = Contato.create({
        cpf_cliente:cpf,
        telefone,
        email
    })

    const cidade = Cidade.create({
        cpf_cliente:cpf,
        nome: nome_cidade,
        cep,
        UF:uf
    });
    console.log(cidade, endereco, contato, cidade)
    return cidade, endereco, contato, cidade;

}

exports.getClientes = async () => {
    return await Cliente.findAll();
}

exports.getClienteById = (id) => {
    return Cliente.findByPk(id, {
        attributes: ['nome', 'cpf', 'referencia'],
        include: [{
                association: 'enderecos',
                attributes: ['logradouro', 'numero', 'bairro', 'complemento']
            },
            {
                association: 'contatos',
                attributes: ['telefone', 'email']
            },
        ]
    })
};

exports.getClienteByCPF = (cpf) => {
    return Cliente.findAll({
        where: {
            cpf
        }
    }, {
        attributes: ['id', 'nome', 'cpf', 'referencia'],
        include: [{
                association: 'enderecos',
                attributes: ['logradouro', 'numero', 'bairro', 'complemento']
            },
            {
                association: 'contatos',
                attributes: ['telefone', 'email']
            },
        ]
    })
};

exports.updateCliente = (nome, referencia, cpf) => {
    return Cliente.update({
        nome,
        referencia
    }, {
        where: {
            cpf
        }
    })
}