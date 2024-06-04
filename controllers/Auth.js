const User = require('../models/user');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');




const renderRegister = (req, res) => {
    res.render('auth/register');
}
const renderLogin = (req, res) => {
    res.render('auth/login');
}

const signIn = async (req, res) => {
    const { userName, password } = req.body;

    const user = await User.findOne({
        where: {
            userName: userName
        }
    });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).render('auth/login', { error: 'Invalid email or password' });
    }
    req.session.isLoggedIn = true;
    req.session.user = user;
    req.session.save(err => {
        if (err) {
            console.error('Session save error:', err);
            return res.status(500).render('auth/login', { error: 'An error occurred. Please try again.' });
        }
        res.redirect('/');
    });
    //res.redirect('/');

}

// const verifyLoginAccess=(req,res)=>{
//     if(!req.session.isLoggedIn){
//         res.redirect('/login');
//         res.end();
//     }
// }

const signUp = async (req, res) => {
    const { name, userName, email, password } = req.body;

    const existingUser = await User.findOne({
        where: {
            [Sequelize.Op.or]: [{ email }, { userName }]
        }
    });
    if (existingUser) {
        return res.status(400).render('auth/register', { error: 'User with the same email or username already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
        name,
        userName,
        email,
        password: hashedPassword
    });
    res.redirect('/');
}



module.exports = {
    renderRegister,
    renderLogin,
    signIn,
    signUp
    //verifyLoginAccess
}