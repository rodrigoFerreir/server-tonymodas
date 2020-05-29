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
        cpf_cliente:{
          type: Sequelize.TEXT,
          references:{ model:'clientes', key:'cpf' },
          onUpdate:'cascade',
          onDelete:'cascade',
          allowNull: false,
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
