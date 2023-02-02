const db = require('../db_models');
const sequelizeConfig = require('../config/sequelize.config.js');

const Support_links = db.support_links;
const Users_businesses = db.users_businesses;

const Op = db.Sequelize.Op;

exports.findCommunicator = async (req, res) => {
    // console.log('req.params', req.params.link);
    let paramsLink = req.params.link;

    var supportLinksCondition = paramsLink ? { communicator_link: { [Op.like]: `%${paramsLink}%` }, status: 0 } : null;
    var usersBusinessesCondition = paramsLink ? { communicator: { [Op.like]: `%${paramsLink}%` } } : null;

    const getRowsInSupporLinks = await Support_links.findAll({ where: supportLinksCondition })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log('Some error occurred while retrieving tutorials.');
            return 'Some error occurred while retrieving tutorials.';
        });

    const getRowsInUsersBusinesses = await Users_businesses.findAll({ where: usersBusinessesCondition })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log('Some error occurred while retrieving tutorials.');
            return 'Some error occurred while retrieving tutorials.';
        });

    if (getRowsInSupporLinks.length > 0 || getRowsInUsersBusinesses.length > 0) {
        let data = { message: 'valid' };
        res.send(data);
    } else {
        let data = { message: 'not_found' };
        res.send(data);
    }
};
