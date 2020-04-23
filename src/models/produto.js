const { Model, DataTypes } = require('sequelize');

class Produto extends Model{
  static init(connection){
    super.init({
      nome: DataTypes.STRING,
      marca:DataTypes.STRING,
      tamanho:DataTypes.STRING,
      observacao:DataTypes.TEXT,
      quantidade:DataTypes.INTEGER,
    }, {
      sequelize: connection,
      modelName: 'Produto',
    })
  };
  static associate(models){
    this.belongsTo(models.categorias, {foreignKey:'id_categoria', as:'categorias'})
    this.belongsTo(models.Lote, {foreignKey:'id_lote', as:'lotes'});
    this.belongsToMany(models.Preco, {foreignKey:'id_produto', through:'preco_produtos', as:'precos'});
  };
};
module.exports = Produto;