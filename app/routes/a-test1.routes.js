module.exports = app => {
    const atest1 = require("../controllers/a-test1.controller.js");

    app.post(['/atest1'], atest1.create);
  };
  