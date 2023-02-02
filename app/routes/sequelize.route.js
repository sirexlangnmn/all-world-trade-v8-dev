module.exports = (app) => {
    const { check, validationResult } = require('express-validator');

    const controllers = require('../db_controllers');
    const middleware = require('../middleware');

    const smallScaleCompanyRegistrationValidation = middleware.smallScaleCompanyRegistrationValidation;
    const smallScaleCompanyRegistrationController = controllers.small_scale_company_registration;

    const mediumScaleCompanyRegistrationValidation = middleware.mediumScaleCompanyRegistrationValidation;
    const mediumScaleCompanyRegistrationController = controllers.medium_scale_company_registration;

    const largeScaleCompanyRegistrationValidation = middleware.largeScaleCompanyRegistrationValidation;
    const largeScaleCompanyRegistrationController = controllers.large_scale_company_registration;

    const traderScaleCompanyRegistrationValidation = middleware.traderScaleCompanyRegistrationValidation;
    const traderScaleCompanyRegistrationController = controllers.trader_scale_company_registration;

    const helpAndSupportRegistrationController = controllers.help_and_support_registration;
    const supportLinksController = controllers.support_links;
    const supportMessagesController = controllers.support_messages;
    const communicatorController = controllers.communicator;
    const usersBusinessesController = controllers.users_businesses;
    const usersAccountsController = controllers.users_accounts;

    const testController = controllers.testValidation; // I used support_links table for my input tests 
    const testValidation = middleware.testValidation;

    app.post(
        ['/api/v2/post/small-scale-company-registration'],
        smallScaleCompanyRegistrationValidation,
        smallScaleCompanyRegistrationController.create,
    );

    app.post(
        ['/api/v2/post/medium-scale-company-registration'],
        mediumScaleCompanyRegistrationValidation,
        mediumScaleCompanyRegistrationController.create,
    );

    app.post(
        ['/api/v2/post/large-scale-company-registration'],
        largeScaleCompanyRegistrationValidation,
        largeScaleCompanyRegistrationController.create,
    );

    app.post(
        ['/api/v2/post/trader-scale-company-registration'],
        traderScaleCompanyRegistrationValidation,
        traderScaleCompanyRegistrationController.create,
    );

    app.post(
        ['/api/v2/post/trader-scale-company-registration'],
        traderScaleCompanyRegistrationValidation,
        traderScaleCompanyRegistrationController.create,
    );

    app.post(['/api/v2/post/help-and-support-registration-process'], helpAndSupportRegistrationController.create);

    app.post(['/api/v2/get/create-help-and-support-communicator-link'], supportLinksController.create);

    app.post(['/api/v2/get/drop-help-and-support-communicator-link'], supportLinksController.drop);

    app.post(['/api/v2/post/go-to-help-and-suggestion-page'], supportLinksController.getSupportLinks);

    app.post(['/api/v2/post/update-as-occupied'], supportLinksController.updateAsOccupied);

    app.get('/api/get/communicator-link/:link', communicatorController.findCommunicator);

    app.post('/api/v2/post/submit-email-if-help-and-suggest-link-not-available', supportMessagesController.create);

    app.get(['/api/v2/get/number-of-trader-members'], usersBusinessesController.numberOfTraderMembers);

    app.get(['/api/v2/get/number-of-visitor-members'], usersAccountsController.numberOfVisitorMembers);


    
    // app.post(
    //     ['/api/v2/test/post/file-and-input-test'],
    //     testValidation,
    //     testController.create,
    // );

    app.post('/api/v2/test/post/file-and-input-test', [
        check('testName').not().isEmpty().withMessage('Text field is required')
      ], (req, res) => {
        console.log('req.body', req.body);
        console.log('req.file', req.file);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }
        
        // const text = req.body.text;
        // console.log('req.body.text', text);
        
        // your code to save the file and text
      });
};
