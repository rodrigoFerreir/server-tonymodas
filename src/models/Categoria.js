const { Model, DataTypes } = require('sequelize');

class Categoria extends Model{
  static init(connection){
    super.init({
      nome: DataTypes.STRING,
    }, {
      sequelize: connection,
      modelName: 'categorias'
    });
  };

  static associate(models){
    this.hasMany(models.Produto, {foreignKey: 'id_categoria', as:'categoria'});
  };//categoria tem muitos produtos.
}


module.exports = Categoria;

//Criado Model de Categoria.