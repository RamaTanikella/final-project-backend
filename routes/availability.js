const data = require("../database")
const availability = data.availability
const express = require("express")
const router = express.Router()

router.post('/', async (req, res) => {
    const createApptSlot = await availability.createAppointmentSlot(req.body)
    res.json(createApptSlot)
})

module.exports = router;