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
    this.hasMany(models.Produto, {foreignKey: 'id_lote', as: 'produtos'});
    this.hasMany(models.Preco, {foreignKey: 'id_lote', as: 'precos'});
  }; //lotes possui muitos produtos

}

module.exports = Lote;

//Criando Model de Lote.