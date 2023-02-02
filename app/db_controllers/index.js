
const controller = {};
controller.large_scale_company_registration = require('./large-scale-company-registration.controller.js');
controller.medium_scale_company_registration = require('./medium-scale-company-registration.controller.js');
controller.small_scale_company_registration = require('./small-scale-company-registration.controller.js');
controller.trader_scale_company_registration = require('./trader-scale-company-registration.controller.js');
controller.help_and_support_registration = require('./help-and-support.controller.js');
controller.support_links = require('./support-links.controller.js');
controller.support_messages = require('./support_messages.controller.js');
controller.communicator = require('./communicator.controller.js');
controller.users_businesses = require('./users-businesses.controller.js');
controller.users_accounts = require('./users-accounts.controller.js');
controller.testValidation = require('./testValidation.controller.js');

module.exports = controller;
