const db = require('../db_models');
const Tutorial = db.tutorials;
const Tutorial2 = db.tutorial2s;
const Op = db.Sequelize.Op;

const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

exports.create = async (req, res) => {
    // const transaction = await models.sequelize.transaction()
    const transaction = await sequelize.transaction();
    try {
        let data1 = {
            title: 'Pang eleven',
            description: 'Pang eleven Description',
        };

        let data2 = {
            title: 'Pang twelve',
            description: 'Pang twelve Description',
        };

        // Create
        await Tutorial.create(data1, transaction);
        await Tutorial2.create(data2, transaction);

        await transaction.commit();
    } catch (e) {
        await transaction.rollback();
    }
};
