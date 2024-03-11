const express = require('express');
const router = express.Router();
const ProductConroller = require('../controllers/Product');


router.get('/', ProductConroller.getProducts);

router.get('/search', ProductConroller.searchProducts);

router.get('/:productId', ProductConroller.singleProduct);

module.exports = router;