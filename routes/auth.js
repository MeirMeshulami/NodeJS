const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/Auth');




router.get('/register', AuthController.renderRegister);

router.post('/register',AuthController.signUp);

router.get('/login', AuthController.renderLogin);

router.post('/login',AuthController.signIn);

//router.use(AuthController.verifyLoginAccess);


module.exports = router;