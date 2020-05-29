'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
      'produtos', 
      'nome_categoria', 
      { 
          type: Sequelize.TEXT,
          references:{ model:'categorias', key:'nome' },
          onUpdate:'cascade',
          onDelete:'restrict',
          allowNull: false,
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
       'produtos',
       'nome_categoria'
       );
  }
};