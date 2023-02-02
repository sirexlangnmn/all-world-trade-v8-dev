const { v4: uuidV4 } = require('uuid');
const db = require('../db_models');

const Users_accounts = db.users_accounts;
const Users_address = db.users_address;
// const Users_business = db.users_business;
const Users_business = db.users_businesses;
const Users = db.users;

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
    const uuid = uuidV4();
    const transaction = await sequelize.transaction();
    try {
        let data1 = {
            uuid: uuid,
        };

        let data2 = {
            uuid: uuid,
        };

        let data3 = {
            uuid: uuid,
        };

        let data4 = {
            uuid: uuid,
        };

        // Create
        await Users.create(data1, transaction);
        await Users_accounts.create(data2, transaction);
        await Users_address.create(data3, transaction);
        await Users_business.create(data4, transaction);

        await transaction.commit();
    } catch (e) {
        await transaction.rollback();
    }
};
