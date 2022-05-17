const db = require("../models");
const Images = db.images;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.listing_id || !req.body.image_url) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const image = {
        listing_id: req.body.listing_id,
        image_url: req.body.image_url
    };
    Images.create(image)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the image."
        });
    });
    
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
    Images.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving images."
        });
    });
};
// Find a single Tutorial with an id
exports.delete = (req, res) => {
    const listing_id = req.params.listing_id;
    // const image_url = req.params.image_url;
    Images.destroy({
      where: { listing_id: listing_id }
    })
    .then(num => {
        if (num >= 1) {
            res.send({
                message: "Images for listing were deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Image with id=${listing_id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Image with id=" + listing_id
        });
    });
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Images.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Images were deleted successfully!` });
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while removing all Images."
        });
    });
};
