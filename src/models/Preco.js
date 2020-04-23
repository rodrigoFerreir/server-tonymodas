const { Model, DataTypes } = require('sequelize');

class Preco extends Model{
  static init(connection){
    super.init({
      valor_compra: DataTypes.DOUBLE,
      valor_venda:DataTypes.DOUBLE,
    }, {
      sequelize: connection,
      modelName: 'Preco',
    })
  };

  static associate(models){
    this.belongsToMany(models.Produto, { foreignKey:'id_preco', through:'preco_produtos', as:'produtos'});
    this.belongsTo(models.Lote, {foreignKey:'id_lote', as:'lotes'})
  };
};
module.exports = Preco;