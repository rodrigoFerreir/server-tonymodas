const { Model, DataTypes } = require('sequelize');

class Cliente extends Model{
  static init(connection){
    super.init({
      nome: DataTypes.STRING,
      cpf: DataTypes.TEXT,
      referencia: DataTypes.STRING,
    }, {
      sequelize: connection,
      modelName:'Cliente'
    })
  };

  static associate(models){
    this.hasMany(models.Contato, {foreignKey: 'id_cliente', as:'contatos'});
    this.hasMany(models.Endereco, {foreignKey: 'id_cliente', as:'enderecos'});
  };// um cliente possui muitos enderecos e um cliente possui muitos contatos.

};



module.exports = Cliente;

//criando o modulo de produtos;