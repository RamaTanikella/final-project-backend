const db = require("../models");
const Reservations = db.reservations;
const Op = db.Sequelize.Op;
// Create and Save a new Reservation
exports.create = (req, res) => {
    if (!req.body.listing_id || !req.body.in_date) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const reservation = {
        listing_id: req.body.listing_id,
        in_date: req.body.in_date,
        email: req.body.email,
        guest_name: req.body.guest_name
    };
    Reservations.create(reservation)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the reservation."
        });
    });
    
};
// Retrieve all Reservations from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
    Reservations.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving reservations."
        });
    });
};
// Find a single Reservation with an id
exports.findOne = (req, res) => {
    const listing_id = req.params.listing_id;
    const in_date = req.params.in_date;
    Reservations.findByPk(listing_id, in_date)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
            message: `Cannot find Reservation with id=${listing_id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Reservation with id=" + listing_id
        });
    });
};
// Update a Reservation by the id in the request
exports.update = (req, res) => {
    const listing_id = req.params.listing_id;
    const in_date = req.params.in_date;
    Reservations.update(req.body, {
      where: { listing_id: listing_id, in_date: in_date }
    })
    .then(num => {
        if (num == 1) {
            res.send({
            message: "Listing was updated successfully."
            });
        } else {
            res.send({
            message: `Cannot update Listing with id=${listing_id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Listing with id=" + listing_id
        });
    });
};
// Delete a Reservation with the specified id in the request
exports.delete = (req, res) => {
    const listing_id = req.params.listing_id;
    const in_date = req.params.in_date;
    Reservations.destroy({
      where: { listing_id: listing_id, in_date: in_date }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Listing was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Listing with id=${listing_id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Listing with id=" + listing_id
        });
    });
};
// Delete all Reservations from the database.
exports.deleteAll = (req, res) => {
    Reservations.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Reservations were deleted successfully!` });
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while removing all listings."
        });
    });
};

exports.findByID = (req, res) => {
    const listing_id = req.params.listing_id;
    Reservations.findAll({where: {listing_id: listing_id}})
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
            message: `Cannot find Reservation with id=${listing_id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Reservation with id=" + listing_id
        });
    });
};