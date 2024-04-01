const User = require('../models/user');
const Sequelize= require('sequelize');
const bcrypt = require('bcrypt');




const renderRegister = (req, res) => {
    res.render('auth/register');
}
const renderLogin = (req, res) => {
    res.render('auth/login');
}

const authentication = async (req, res) => {
    const { userName, password } = req.body;

    const user = await User.findOne({
        where: {
            userName: userName
        }
    });
    if (!user || user.password != password) {
        return res.status(401).render('auth/login', { error: 'Invalid email or password' });
    }
    res.redirect('/');
}

const createUser = async (req, res) => {
    const { name, userName, email, password } = req.body;

    const existingUser = await User.findOne({
        where: {
            [Sequelize.Op.or]: [{ email }, { userName }]
        }
    });
    if (existingUser) {
        return response.status(400).render('auth/register', { error: 'User with the same email or username already exists' });
    }
    await User.create({
        name,
        userName,
        email,
        password
    });
    res.redirect('/');
}



module.exports = {
    renderRegister,
    renderLogin,
    authentication,
    createUser
}