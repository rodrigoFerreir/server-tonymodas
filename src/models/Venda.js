const { Model, DataTypes } = require('sequelize');

class Venda extends Model{
  static init(connection){
    super.init({
      valor_final:DataTypes.DOUBLE,
    }, {
      sequelize: connection,
      modelName: 'Venda',
    })
  };

  static associate(models){
    this.belongsToMany(models.Produto, { foreignKey:'id_venda', through:'item_vendas', as:'produtos'});
    this.belongsTo(models.Cliente, {foreignKey:'id_cliente', as:'clientes'})
  };
};
module.exports = Venda;