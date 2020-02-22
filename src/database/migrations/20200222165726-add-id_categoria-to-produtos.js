'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
      'produtos', 
      'id_categoria', 
      { 
          type: Sequelize.INTEGER,
          references:{ model:'categorias', key:'id' },
          onUpdate:'cascade',
          onDelete:'restrict',
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
       'produtos',
       'id_categoria'
       );
  }
};