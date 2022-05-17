module.exports = app => {
    const listings = require("../controllers/listings.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", listings.create);
    // Retrieve all listings
    router.get("/", listings.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:listing_id", listings.findOne);
    // Update a Tutorial with id
    router.put("/:listing_id", listings.update);
    // Delete a Tutorial with id
    router.delete("/:listing_id", listings.delete);
    // Create a new Tutorial
    router.delete("/", listings.deleteAll);
    app.use('/api/listings', router);
  };