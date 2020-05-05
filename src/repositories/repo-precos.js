const Preco = require('../models/Preco');
const db = require('../config/database')

exports.get = () =>{
    return Preco.findAll()
 }
 
exports.getPrecoById = (id) =>{
     return Preco.findByPk(id, {
        attributes:['valor_compra', 'valor_venda'],
        include:[
            {association: 'lotes', attributes:['referencia', 'createdAt']},
            {association:'produtos', attributes:['nome', 'marca', 'quantidade']},
        ]
     })
}


exports.create = (data) =>{
    const preco = new Preco(data)
    return preco.create();
}