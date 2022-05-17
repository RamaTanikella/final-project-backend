const data = require("../database")
const messages = data.messages
const express = require("express")
const router = express.Router()

router.post('/', async (req, res) => {
    const sendMessg = await messages.createMessage(req.body)
    //insert twillio logic here
    res.json(sendMessg)
})

module.exports = router;