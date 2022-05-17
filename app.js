const express = require("express");
const cors = require("cors");
// const configRoutes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require("./api/listings.routes")(app);
require("./api/images.routes")(app);
require("./api/reservations.routes")(app);
const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

// configRoutes(app);

app.listen(3000, () => {
    console.log("App Started"); 
})