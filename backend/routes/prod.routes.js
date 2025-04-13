const express = require('express')
const {signup, login, address} = require("../controllers/prod.controllers")

let router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/address', address)

module.exports = router
