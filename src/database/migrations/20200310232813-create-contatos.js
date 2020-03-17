'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contatos', { 
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
      telefone:{
        type: Sequelize.TEXT,
        allowNull: true,
      },
      email:{
        type: Sequelize.TEXT,
        allowNull: true,
      },
      id_cliente:{
        type: Sequelize.INTEGER,
        references:{ model:'clientes', key:'id' },
        onUpdate:'cascade',
        onDelete:'cascade',
        allowNull: false,
      },
    });
},

down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('contatos');
}
};
