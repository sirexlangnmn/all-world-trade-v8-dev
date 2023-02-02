module.exports = app => {
    const tutorials = require("../controllers/a-tutorial-1.controller.js");
    const tutorial2s = require("../controllers/a-tutorial-2.controller.js");
  
    // old version
    // var router = require("express").Router();
  
    // router.post("/tutorial2s", tutorial2s.create);
    
    // // Create a new Tutorial
    // router.post("/", tutorials.create);
  
    // // Retrieve all Tutorials
    // router.get("/", tutorials.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
  
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
  
    // app.use('/api/tutorials', router);
  
    
    // new version but this is for test
    // app.post(['/tutorial2s'], tutorial2s.create);
    
    // // // Create a new Tutorial
    // // app.post(['/'], tutorials.create);
  
    // // // Retrieve all Tutorials
    // // app.get(['/'], tutorials.findAll);
  
    // // Retrieve all published Tutorials
    // app.get(['/published'], tutorials.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // app.get(['/:id'], tutorials.findOne);
  
    // // Update a Tutorial with id
    // app.put(['/:id'], tutorials.update);
  
    // // Delete a Tutorial with id
    // app.delete(['/:id'], tutorials.delete);
  
    // // Delete all Tutorials
    // app.delete(['/'], tutorials.deleteAll);
  };
  