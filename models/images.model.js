
module.exports = (sequelize, Sequelize) => {
    const Images = sequelize.define("image", {
      listing_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        references: {
            model: 'listing', // 'fathers' refers to table name
            key: 'listing_id', // 'id' refers to column name in fathers table
        }
      },
      image_url: {
        type: Sequelize.STRING,
        primaryKey: true
      }
    });
    return Images;
};