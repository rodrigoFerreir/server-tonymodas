const Produto = require('../models/Produto');

exports.get = () =>{
   return Produto.findAll
}

exports.getProdutoById = (id) =>{
    return Produto.findByPk(id)
}