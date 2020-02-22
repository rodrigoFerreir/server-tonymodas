const { Model, DataTypes } = require('sequelize');

class Produto extends Model{
  static init(connection){
    super.init({
      nome: DataTypes.STRING,
      marca: DataTypes.STRING,
      valor_compra: DataTypes.DOUBLE,
      valor_venda: DataTypes.DOUBLE,
      quantidade : DataTypes.INTEGER,
    }, {
      sequelize: connection,
      modelName:'Produto'
    })
  }
  
  static associate(models){
    this.belongsTo(models.Produto, {foreignKey: 'id_lote', as: 'lote'});
    this.belongsTo(models.Produto, {foreignKey: 'id_categoria', as: "categoria"});
  }

};



module.exports = Produto;

//criando o modulo de produtos;