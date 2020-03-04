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
  };

  static associate(models){
    this.belongsTo(models.Produto, {foreignKey: 'id_categoria', as: "categoria"});
    this.belongsToMany(models.Produto, {foreignKey: 'id_produto', through:'lotes_produtos', as: 'lote'});
  }; //produtos pertence a uma categoria e a muitos lotes

};



module.exports = Produto;

//criando o modulo de produtos;