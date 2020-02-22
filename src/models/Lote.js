const { Model, DataTypes } = require('sequelize');

class Lote extends Model{
  static init(connection){
    super.init({
      referencia: DataTypes.INTEGER,
    }, {
      sequelize: connection,
      modelName: 'Lote'
    })
  }

}

module.exports = Lote;

//Criando Model de Lote.