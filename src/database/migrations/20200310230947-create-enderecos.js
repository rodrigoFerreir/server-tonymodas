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
      nome_cidade:{
        type: Sequelize.TEXT,
        references:{ model:'cidades', key:'nome' },
        onUpdate:'cascade',
        onDelete:'restrict',
        allowNull: false,
      },
      cpf_cliente:{
        type: Sequelize.TEXT,
        references:{ model:'clientes', key:'cpf' },
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
