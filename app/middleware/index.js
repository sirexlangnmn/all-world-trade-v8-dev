
const middleware = {};
middleware.smallScaleCompanyRegistrationValidation = require('./validations/small-scale-company-registration.validation.js');
middleware.mediumScaleCompanyRegistrationValidation = require('./validations/medium-scale-company-registration.validation.js');
middleware.largeScaleCompanyRegistrationValidation = require('./validations/large-scale-company-registration.validation.js');
middleware.traderScaleCompanyRegistrationValidation = require('./validations/trader-scale-company-registration.validation.js');
middleware.login_process = require('./validations/login_process.validations.js');
middleware.testValidation = require('./validations/testValidation.validation.js');

module.exports = middleware;
