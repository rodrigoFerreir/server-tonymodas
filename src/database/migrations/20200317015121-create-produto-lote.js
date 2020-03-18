'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('produto_lote', { 
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
        id_produto:{
          type: Sequelize.INTEGER,
          references:{ model:'produtos', key:'id' },
          onUpdate:'cascade',
          onDelete:'cascade',
          allowNull: false,
        },
        id_lote:{
          type: Sequelize.INTEGER,
          references:{ model:'lotes', key:'id' },
          onUpdate:'cascade',
          onDelete:'cascade',
          allowNull: false,
        },
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('produto_lote');
  }
};

