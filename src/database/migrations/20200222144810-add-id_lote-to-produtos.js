'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
      'produtos', 
      'id_lote', 
      { 
          type: Sequelize.INTEGER,
          references:{ model:'lotes', key:'id' },
          onUpdate:'cascade',
          onDelete:'cascade',
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
       'produtos',
       'id_lote'
       );
  }
};
