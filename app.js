const express = require("express");
const cors = require("cors");
// const configRoutes = require('./routes');
const client = require('twilio')("AC024a9a785d29ed6e6a369e71a37715a9", "16b2846175b6d2a1822a3c87bc40c7e8")
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./api/listings.routes")(app);
require("./api/images.routes")(app);
require("./api/reservations.routes")(app);

app.post("/sendMessage", async (req, res) => {
    client.messages.create({
        from: "+19403083055",
        to: "+1"+req.body.phone,
        body: req.body.message

    }).then(() => {
        res.send({
            status: "Good"
        })
    }).catch((e) => {
        res.status(500).send({
            status: e
        })
    })
})
const db = require("./models");
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });
db.sequelize.sync();

// configRoutes(app);

app.listen(process.env.PORT || 3000, () => {
    console.log("App Started"); 
})