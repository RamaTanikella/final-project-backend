const express = require("express");
const app = express();

const configRoutes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

configRoutes(app);

app.listen(3000, () => {
    console.log("App Started"); 
})