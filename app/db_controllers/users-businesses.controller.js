const db = require('../db_models');
const sequelizeConfig = require('../config/sequelize.config.js');

const Users_businesses = db.users_businesses;

const Op = db.Sequelize.Op;

exports.numberOfTraderMembers = async (req, res) => {
    let condition = { isPaid: 1 };

    const getRows = await Users_businesses.findAll({
        where: condition,
    })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            return 'Some error occurred while retrieving number Of Trader Members.';
        });
};
