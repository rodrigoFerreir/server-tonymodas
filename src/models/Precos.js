const { Model, DataTypes } = require('sequelize');

class Precos extends Model{
  static init(connection){
    super.init({
        valor_compra: DataTypes.DOUBLE,
        valor_venda: DataTypes.DOUBLE,
    }, {
      sequelize: connection,
      modelName: 'Precos'
    })
  };

  static associate(models){
    this.belongsToMany(models.Produto, {foreignKey: 'id_preco', through:'precos', as:'produto'});
  }; //precos pertence a muitos produtos

}
module.exports = Precos;