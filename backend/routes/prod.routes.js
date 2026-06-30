const express = require('express')
const {signup, login, address,getAccount, addProduct, getProducts } = require("../controllers/prod.controllers")
const upload = require('../middleware/upload');

let router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/address', address)
router.get('/account', getAccount)

// new product routes
router.post(
  '/products',
  upload.fields([
    { name: 'productImage',  maxCount: 1  },
    { name: 'galleryImages', maxCount: 10 },
  ]),
  addProduct
);
router.get('/products', getProducts);

module.exports = router
