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


exports.create = (data) => {
    const preco = new Preco(data)
    return preco.create();
}