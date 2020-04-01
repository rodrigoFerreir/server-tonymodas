'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('precos', { 
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
      valor_compra: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      valor_venda: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
    });
},


  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('precos');
  }
};
