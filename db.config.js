module.exports = {
    HOST: "ec2-54-86-224-85.compute-1.amazonaws.com",
    USER: "buivhpvkioeiik",
    PASSWORD: "e5b0665d5ff576ad9afa80b1b3b9a4ac15f400bb4540e96e53bcbfcac8fde251",
    DB: "d6neh440nk3dlh",
    dialect: "postgres",
    native: true,
    ssl: {      /* <----- Add SSL option */
        require: true,
        rejectUnauthorized: false 
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};