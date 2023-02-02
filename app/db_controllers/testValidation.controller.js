const { v4: uuidV4 } = require('uuid');
const { check, validationResult } = require('express-validator');
const CryptoJS = require('crypto-js');
const JWT_SECRET = process.env.JWT_SECRET;
const db = require('../db_models');
const sequelizeConfig = require('../config/sequelize.config.js');

const Support_links = db.support_links;

const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    console.log('req.body', req.body);
    const errors = validationResult(req);

    try {
        if (!errors.isEmpty()) {
            return res.status(200).send({
                message: errors.array(),
            });
        }
    } catch (error) {
        return res.status(400).json({
            error: {
                message: error,
            },
        });
    }

};
