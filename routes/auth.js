const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/Auth');




router.get('/register', AuthController.renderRegister);

router.post('/register',AuthController.createUser);

router.get('/login', AuthController.renderLogin);

router.post('/login',AuthController.authentication);




module.exports = router;