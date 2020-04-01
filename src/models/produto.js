const { Model, DataTypes } = require('sequelize');

class Produto extends Model{
  static init(connection){
    super.init({
      nome: DataTypes.STRING,
      marca: DataTypes.STRING,
      quantidade : DataTypes.INTEGER,
    }, {
      sequelize: connection,
      modelName:'Produto'
    })
  };

  static associate(models){
    this.belongsTo(models.Produto, {foreignKey: 'id_categoria', as: "categoria"});
    this.belongsToMany(models.Lote, {foreignKey: 'id_lote', through:'produto_lote', as: 'lote'});
    this.belongsToMany(models.Precos, {foreignKey: 'id_preco', through:'precos', as:'preco'});
  }; //produtos pertence a uma categoria e a muitos lotes

};



module.exports = Produto;

//criando o modulo de produtos;