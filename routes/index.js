const messageRoutes = require("./messages")
const appointmentRoutes = require("./appointment")
const availabilityRoutes = require("./availability")
const path = require('path')

const constructorMethod = (app) => {
    app.use('/messages', messageRoutes)
    app.use('/appointment', appointmentRoutes)
    app.use('/availability', availabilityRoutes)
}

module.exports = constructorMethod