'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('item_vendas', {
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
            id_venda: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'vendas',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade',
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
        return queryInterface.dropTable('item_vendas');
    }
};
