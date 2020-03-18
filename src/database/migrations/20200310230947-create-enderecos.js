'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('enderecos', { 
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
      logradouro:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bairro:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      complemento:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      id_cidade:{
        type: Sequelize.INTEGER,
        references:{ model:'cidades', key:'id' },
        onUpdate:'cascade',
        onDelete:'restrict',
        allowNull: false,
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
    return queryInterface.dropTable('enderecos');
}
};
