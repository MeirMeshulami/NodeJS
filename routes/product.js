const express = require('express');
const router = express.Router();
const ProductConroller = require('../controllers/Product');

// to access to this route page...
// /products/212a


//  -> /products
router.get('/search', ProductConroller.search);

router.get('/', ProductConroller.getProducts);

router.get('/:productId', ProductConroller.singleProduct);



// 


module.exports = router;