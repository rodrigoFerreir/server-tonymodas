const { Model, DataTypes } = require('sequelize');

class Cidade extends Model{
  static init(connection){
    super.init({
      nome: DataTypes.STRING,
      cep:DataTypes.NUMBER,
    }, {
      sequelize: connection,
      modelName: 'Cidade',
    })
  };

  static associate(models){
    this.hasMany(models.Endereco, {foreignKey: 'id_cidade', as:'enderecos'});
  };
};
module.exports = Cidade;

