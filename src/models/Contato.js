const { Model, DataTypes } = require('sequelize');

class Contato extends Model{
  static init(connection){
    super.init({
      telefone: DataTypes.TEXT,
      email: DataTypes.TEXT,
    }, {
      sequelize: connection,
      modelName:'Contato'
    })
  };

  static associate(models){
    this.belongsTo(models.Cliente, {foreignKey: 'id_cliente', as: "contato"});
  };
};



module.exports = Contato;

//criando o modulo de produtos;