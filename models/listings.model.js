module.exports = (sequelize, Sequelize) => {
    const Listing = sequelize.define("listing", {
      listing_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      listing_name: {
        type: Sequelize.STRING
      },
      listing_description: {
        type: Sequelize.STRING
      },
      price:{
        type: Sequelize.FLOAT,
        allowNull: false
      }
    });
    return Listing;
};