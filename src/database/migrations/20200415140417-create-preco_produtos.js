'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('preco_produtos', {
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
            id_preco: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'precos',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'restrict',
                allowNull: false,
            },
            id_produto: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'produtos',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'set null',
                allowNull: false,
            },
        });
    },


    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('preco_produtos');
    }
};