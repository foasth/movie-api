const express = require('express')
const router = express.Router()
const {HELLO, SEND_DATA} = require("../controllers/movie.controller");

router.get('/hello',HELLO)
router.post('/send',SEND_DATA)

module.exports = router;