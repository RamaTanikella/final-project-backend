module.exports = app => {
    const images = require("../controllers/images.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", images.create);
    // Retrieve all listings
    router.get("/:listing_id", images.findWhere);
    router.get("/", images.findAll);
    // Delete a Tutorial with id
    router.delete("/:listing_id", images.delete);
    // Create a new Tutorial
    router.delete("/", images.deleteAll);
    app.use('/api/images', router);
  };