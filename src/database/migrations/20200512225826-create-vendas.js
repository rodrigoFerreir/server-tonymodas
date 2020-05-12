'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('vendas', { 
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
        id_cliente:{
          type: Sequelize.INTEGER,
          references:{ model:'clientes', key:'id' },
          onUpdate:'cascade',
          onDelete:'cascade',
          allowNull: true,
        },
        valor_final:{
          type: Sequelize.STRING,
          allowNull: false,
        },
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('vendas');
  }
};
