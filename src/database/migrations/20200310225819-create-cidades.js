'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cidades', { 
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
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
},

down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cidades');
}
};
