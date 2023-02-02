const db = require('../db_models');

const Users_accounts = db.users_accounts;
const Users_address = db.users_address;
//const Users_business = db.users_business;
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

const { v4: uuidV4 } = require('uuid');

const Model = function (model) {
    this.session = model.session;

    // users
    this.first_name = model.first_name;
    this.last_name = model.last_name;
    this.middle_name = model.middle_name;
    this.uuid = uuidV4();

    // users_accounts
    this.email_or_social_media = model.email_or_social_media;
    this.social_media_contact_type = model.business_social_media_contact_type;
    this.contact_number = model.business_social_media_contact_number;
    this.password = model.password;
    this.type = model.type;
    this.verification_code = Math.floor(Math.random() * 900000) + 100000;

    // users_business
    this.business_language_of_communication = model.business_language_of_communication.toString();

    // users_address
    this.country = model.country;
    this.state_or_province = model.state_or_province;
    this.city = model.city;
};

Model.create = async (newModel, result) => {
    // const transaction = await models.sequelize.transaction()
    const transaction = await sequelize.transaction();
    try {
        // let data1 = {
        //   "uuid": newModel.uuid
        // }

        // let data2 = {
        //     "uuid": newModel.uuid
        // }

        // let data3 = {
        //     "uuid": newModel.uuid
        // }

        // let data4 = {
        //     "uuid": newModel.uuid
        // }

        let data1 = {
            uuid: 'UUID HERE',
        };

        let data2 = {
            uuid: 'UUID HERE',
        };

        let data3 = {
            uuid: 'UUID HERE',
        };

        let data4 = {
            uuid: 'UUID HERE',
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

module.exports = Model;
