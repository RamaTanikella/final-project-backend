const data = require("../database")
const appointment_info = data.appointment_info
const availability = data.availability
const messages = data.messages
const express = require("express")
const router = express.Router()
const utils = require("../utils")

router.post('/book', async (req, res) => {
    const updateAvailableResp = await availability.changeAppointmentAvailability({
        available: 'True',
        appointment_id: req.body.appointment_id
    })
    const createAppointmentInfoResp = await appointment_info.createAppointmentInfo(req.body)
    if(updateAvailableResp.status == "success" && createAppointmentInfoResp == "success"){
        res.json(utils.success)
    }
    else{
        res.json(utils.failure)
    }
})



module.exports = router;