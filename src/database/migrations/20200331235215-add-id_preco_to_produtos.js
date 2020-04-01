'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
      'produtos', 
      'id_preco', 
      { 
          type: Sequelize.INTEGER,
          references:{ model:'precos', key:'id' },
          onUpdate:'cascade',
          onDelete:'restrict',
          allowNull: false,
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
       'produtos',
       'id_preco'
       );
  }
};