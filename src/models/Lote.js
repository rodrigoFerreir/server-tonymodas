const { Model, DataTypes } = require('sequelize');

class Lote extends Model{
  static init(connection){
    super.init({
      referencia: DataTypes.INTEGER,
    }, {
      sequelize: connection,
      modelName: 'Lote'
    })
  };

  static associate(models){
    this.belongsToMany(models.Lote, {foreignKey: 'id_lote', through:'produto_lote', as: 'lotes'});
  }; //lotes possui muitos produtos

}

module.exports = Lote;

//Criando Model de Lote.