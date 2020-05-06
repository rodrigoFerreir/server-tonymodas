const Preco = require('../models/Preco');

exports.get = () => {
    return Preco.findAll({
        attributes: ['valor_compra', 'valor_venda'],
        include: [{
                association: 'lotes',
                attributes: ['referencia', 'createdAt']
            },
            {
                association: 'produtos',
                attributes: ['nome', 'marca', 'quantidade']
            },
        ]
    })
}

exports.getPrecoById = (id) => {
    return Preco.findByPk(id, {
        attributes: ['valor_compra', 'valor_venda'],
        include: [{
                association: 'lotes',
                attributes: ['referencia', 'createdAt']
            },
            {
                association: 'produtos',
                attributes: ['nome', 'marca', 'quantidade']
            },
        ]
    })
}

exports.getPrecoByValor_venda = (valor_venda) => {
    return Preco.findAll({where:{
        valor_venda
    }},{
        attributes: ['valor_compra', 'valor_venda'],
        include: [{
                association: 'lotes',
                attributes: ['referencia', 'createdAt']
            },
            {
                association: 'produtos',
                attributes: ['nome', 'marca', 'quantidade']
            },
        ]
    })
}

exports.create = (data) => {
    const preco = new Preco(data)
    return preco.create();
}