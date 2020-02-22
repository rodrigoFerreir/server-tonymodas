const { Model, DataTypes } = require('sequelize');

class Lotes extends Model{
  static init(connection){
    super.init({
      referencia: DataTypes.INTEGER,
    }, {
      sequelize: connection,
    })
  }

}

module.exports = Lotes;