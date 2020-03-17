const { Model, DataTypes } = require('sequelize');

class Endereco extends Model{
  static init(connection){
    super.init({
      logradouro: DataTypes.STRING,
      numero: DataTypes.INTEGER,
      bairro: DataTypes.STRING,
      complemento: DataTypes.STRING,
    }, {
      sequelize: connection,
      modelName:'Endereco'
    })
  };

  static associate(models){
    this.belongsTo(models.Cidade, {foreignKey: 'id_cidade', as: "cidades"});
    this.belongsTo(models.Cliente, {foreignKey: 'id_cliente', as: "enderecos"});

  }; //produtos pertence a uma categoria e a muitos lotes

};



module.exports = Endereco;

//criando o modulo de produtos;