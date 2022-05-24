const express = require("express");
const cors = require("cors");
// const configRoutes = require('./routes');
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
const app = express();
var corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


require("./api/listings.routes")(app);
require("./api/images.routes")(app);
require("./api/reservations.routes")(app);

app.post("/sendMessage", async (req, res) => {
    client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: "+1"+req.body.phone,
        body: req.body.message

    }).then(() => {
        res.send({
            status: "Good"
        })
    }).catch((e) => {
        res.status(500).send({
            status: "Bad"
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