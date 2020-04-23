const Preco = require('../models/Preco');
const db = require('../config/database')

exports.get = () =>{
    return Preco.findAll()
 }
 
exports.getPrecoById = (id) =>{
     return Preco.findByPk(id)
}

exports.getPrecoAndCreate = (valor_compra, valor_venda) =>{
    return Preco.findOrCreate({ where:{ valor_compra, valor_venda }});
}

exports.getIdPrecoToValues = (valor_compra, valor_venda) =>{
    const precos = Preco.findAll({where:{valor_compra, valor_venda}})
    console.log(precos.id)
}

exports.create = (data) =>{
    const preco = new Preco(data)
    return preco.create();
}