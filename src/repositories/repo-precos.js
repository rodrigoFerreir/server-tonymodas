const Preco = require('../models/Precos');

exports.get = () =>{
    return Preco.findAll()
 }
 
exports.getPrecoById = (id) =>{
     return Preco.findByPk(id)
}

exports.getPrecoAndCreate = (valor_compra, valor_venda) =>{
    return Preco.findOrCreate(valor_compra, valor_venda);
}

exports.create = (data) =>{
    const preco = new Preco(data)
    return preco.create();
}