module.exports = app => {
    const reservations = require("../controllers/reservations.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", reservations.create);
    // Retrieve all reservations
    router.get("/", reservations.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:listing_id", reservations.findByID);

    router.get("/:listing_id/:in_date", reservations.findOne);
    // Update a Tutorial with id
    router.put("/:listing_id/:in_date", reservations.update);
    // Delete a Tutorial with id
    router.delete("/:listing_id/:in_date", reservations.delete);
    // Create a new Tutorial
    router.delete("/", reservations.deleteAll);
    app.use('/api/reservations', router);
  };