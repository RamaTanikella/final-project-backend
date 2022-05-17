module.exports = (sequelize, Sequelize) => {
    const Reservation = sequelize.define("reservation", {
      listing_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        references: {
            model: 'listings', // 'fathers' refers to table name
            key: 'listing_id', // 'id' refers to column name in fathers table
        }
      },
      in_date: {
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: true
      },
      email: {
        type: Sequelize.STRING
      },
      guest_name: {
        type: Sequelize.STRING
      }
    });
    return Reservation;
};