
const db = require('../db_models');
const sequelizeConfig = require('../config/sequelize.config.js');

const Users_accounts = db.users_accounts;

const Op = db.Sequelize.Op;

exports.numberOfVisitorMembers = async (req, res) => {
    const getRows = await Users_accounts.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            return 'Some error occurred while retrieving number Of Trader Members.';
        }); 
};
