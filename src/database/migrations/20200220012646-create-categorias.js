'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('categorias', { 
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
        nome:{
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('categorias');
    
  }
};
