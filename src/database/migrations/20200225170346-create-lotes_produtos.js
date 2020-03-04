'use strict';
//criar lotes_produto

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('lotes_produtos', {
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
      id_lote: {
        type: Sequelize.INTEGER,
        references: {
          model: 'lotes',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      id_produto: {
        type: Sequelize.INTEGER,
        references: {
          model: 'produtos',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },

    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('lotes_produtos');
  }
};