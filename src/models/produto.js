const { Model, DataTypes } = require('sequelize');

class Produtos extends Model{
  static init(connection){
    super.init({
      nome: DataTypes.STRING,
      marca: DataTypes.STRING,
      valor_compra: DataTypes.DOUBLE,
      valor_venda: DataTypes.DOUBLE,
    }, {
      sequelize: connection,
    })
  }

}

module.exports = Produtos;

//criando o modulo de produtos;