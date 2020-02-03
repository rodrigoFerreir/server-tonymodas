'use strict';
const Sequelize = require('sequelize')
const Model = Sequelize.Model;

class Produtos extends Model {}

Produtos.sync({ force: true }).then(() => {
    return Produtos.create({
        id:{
            type :  Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement : true,
            allowNull : false,   
          }, 
          created_at: {
            type : Sequelize.DATE,
            allowNull:false,
          },
          updated_at:{
            type : Sequelize.DATE,
            allowNull:false,
          },
          nome:{
            type: Sequelize.STRING,
            allowNull: false,
          },
          marca:{
            type: Sequelize.STRING,
            allowNull: false,
          },
          valor_compra:{
            type: Sequelize.DOUBLE,
            allowNull: false,
          },
          valor_venda:{
            type: Sequelize.DOUBLE,
            allowNull: false,
          },
     create
    });
  });