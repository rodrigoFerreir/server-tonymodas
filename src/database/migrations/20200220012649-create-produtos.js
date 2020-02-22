'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('produtos', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valor_compra: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      valor_venda: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },   
      quantidade:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '1',
      } 
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('produtos');
  }
};
