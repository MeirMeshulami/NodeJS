const express = require('express');
const router = express.Router();
const ProductConroller = require('../controllers/Product');

// to access to this route page...
// /products/212a


//  -> /products
router.get('/search', ProductConroller.search);

router.get('/:productId', ProductConroller.singleProduct);

router.get('/category/:nameOfCategory', ProductConroller.getCategoryProducts);

router.get('/', ProductConroller.getProducts);

// 


module.exports = router;