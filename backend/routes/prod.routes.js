const express = require('express')
const {signup, login, address,getAccount } = require("../controllers/prod.controllers")

let router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/address', address)
router.get('/account', getAccount)

module.exports = router
