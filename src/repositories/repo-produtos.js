const Produto = require('../models/Produto');

exports.getProdutos = async () =>{
    return await Produto.findAll();
}

exports.getProdutoById = (id) =>{
    return Produto.findByPk(id, {
        attributes:['nome', 'marca', 'tamanho', 'observacao', 'quantidade'],
        include:[
            {association: 'categorias', attributes:['nome']},
            {association:'lotes', attributes:['referencia']}, 
            {association:'precos', attributes:['valor_compra', 'valor_venda']}
        ]
    })
};
