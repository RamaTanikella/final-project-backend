const dbConfig = require("../db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgres://buivhpvkioeiik:e5b0665d5ff576ad9afa80b1b3b9a4ac15f400bb4540e96e53bcbfcac8fde251@ec2-54-86-224-85.compute-1.amazonaws.com:5432/d6neh440nk3dlh?sslmode=require&sslmode=no-verify", {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // <<<<<<< YOU NEED THIS
    }
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.listings = require("./listings.model.js")(sequelize, Sequelize);
db.images = require("./images.model.js")(sequelize, Sequelize);
db.listings.hasMany(db.images)
module.exports = db;