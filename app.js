const express = require("express");
const cors = require("cors");
// const configRoutes = require('./routes');
// const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
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

// app.post("/sendMessage", async (req, res) => {
//     client.messages.create({
//         from: process.env.TWILIO_PHONE_NUMBER,
//         to: "+1"+req.body.phone,
//         body: req.body.message

//     }).then(() => {
//         res.send({
//             status: "Good"
//         })
//     }).catch((e) => {
//         res.status(500).send({
//             status: "Bad"
//         })
//     })
// })
const db = require("./models");
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });
db.sequelize.sync();

// configRoutes(app);

app.listen(process.env.PORT || 3000, () => {
    console.log("App Started"); 
})