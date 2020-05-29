'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('produtos', { 
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
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false,
      },  
      tamanho: {
        type: Sequelize.STRING,
        allowNull: true,
      },  
      observacao: {
        type: Sequelize.STRING,
        allowNull: true,
      },   
      quantidade:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '1',
      },
      referencia_lote:{
        type: Sequelize.INTEGER,
        references:{ model:'lotes', key:'referencia' },
        onUpdate:'cascade',
        onDelete:'restrict',
        allowNull: false,
        unique: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('produtos');
  }
};
