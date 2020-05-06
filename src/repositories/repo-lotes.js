const Lote = require('../models/Lote');


exports.getPrecoByReferencia = (referencia) => {
    return Lote.findAll({where:{
        referencia
    }}, {
        attributes: ['referencia', 'createdAt'],
        include: [{
                association: 'produtos',
                attributes: ['nome', 'marca', 'quantidade']
            },
            {
                association: 'precos',
                attributes: ['valor_compra', 'valor_venda']
            },
        ]
    })
}