const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/Product');


router.get('/search', ProductController.search);

router.get('/:productId', ProductController.singleProduct);

router.get('/category/:nameOfCategory', ProductController.getCategoryProducts);

router.get('/', ProductController.getProducts);



module.exports = router;