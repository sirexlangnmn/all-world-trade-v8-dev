const Tutorial = require('../models/tutorial.model.js');

// Create and Save a new Tutorial
exports.create = (req, res) => {};

// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {};

// Find a single Tutorial with a id
exports.findOne = (req, res) => {};

// find all published Tutorials
exports.findAllPublished = (req, res) => {};

// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// ===================
// Create a new object
// ===================
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty!',
        });
    }

    // Create a Tutorial
    const tutorial = new Tutorial({
        companyName: req.body.traderCompanyName,
        tagline: req.body.traderCompanyTagline,
        sub_category: req.body.subCategoryToggleField,
        minor_sub_category: req.body.minorSubCategoryToggleField,
        published: false,
        // published: req.body.published || false,
    });

    // Save Tutorial in the database
    Tutorial.create(tutorial, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the Tutorial.',
            });
        else res.send(data);
    });
};

// ===================
// Retrieve objects
// ===================
// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
    const title = req.query.title;

    Tutorial.getAll(title, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving tutorials.',
            });
        else res.send(data);
    });
};

exports.findAllPublished = (req, res) => {
    Tutorial.getAllPublished((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving tutorials.',
            });
        else res.send(data);
    });
};

// ===================
// Retrieve objects
// ===================
exports.findOne = (req, res) => {
    Tutorial.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Not found Tutorial with id ${req.params.id}.`,
                });
            } else {
                res.status(500).send({
                    message: 'Error retrieving Tutorial with id ' + req.params.id,
                });
            }
        } else res.send(data);
    });
};

// ===================
// Update an object
// ===================
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty!',
        });
    }

    Tutorial.updateById(req.params.id, new Tutorial(req.body), (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Not found Tutorial with id ${req.params.id}.`,
                });
            } else {
                res.status(500).send({
                    message: 'Error updating Tutorial with id ' + req.params.id,
                });
            }
        } else res.send(data);
    });
};

// ===================
// Delete an object
// ===================
exports.delete = (req, res) => {
    Tutorial.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Not found Tutorial with id ${req.params.id}.`,
                });
            } else {
                res.status(500).send({
                    message: 'Could not delete Tutorial with id ' + req.params.id,
                });
            }
        } else res.send({ message: `Tutorial was deleted successfully!` });
    });
};

// ===================
// Delete all objects
// ===================

exports.deleteAll = (req, res) => {
    Tutorial.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || 'Some error occurred while removing all tutorials.',
            });
        else res.send({ message: `All Tutorials were deleted successfully!` });
    });
};
