const chalk = require('chalk');
const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
const hbs = require('hbs');
const productRouter = require('./routes/product');
const authRouter = require('./routes/auth');
const bodyParser = require('body-parser');
const db = require('./utils/database');
const Category = require('./models/category');



app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));

// Static js and css files location
app.use(express.static(path.join(__dirname, 'public')));

// Header and Footer partials
hbs.registerPartials(__dirname + '/views/partials');

// General routes - MVC model
app.use('/products', productRouter);
app.use('/auth', authRouter);

// Specific routes
app.get('/', async (req, res) => {
    const categories = await Category.findAll({
        attributes: ['name']
    });
    const categoryNames = categories.map(category => category.name);
    res.render('home', {
        title: 'HomePage All Users',
        categories: categoryNames
    });
});

app.get('/users', (req, res) => {
    console.log(chalk.blueBright('Users page'));
    res.render('users', { title: 'Users' });
});

app.get('/about', (req, res) => {
    console.log(chalk.blueBright('About page'));
    res.render('about', { title: 'About' });
});

app.use((req, res) => {
    res.render('404');
});


hbs.registerHelper('getProductImage',function(product){
    if(product.ProductImages){
        return `<img src="${product.ProductImages[0].url}" alt="${product.name}" />`;
    }
    return '';
});

app.listen(PORT, async () => {
    try {
        await db.authenticate();
        console.log(chalk.bgYellowBright(`Server is running on Port ${PORT}, Succssfully connected to Databsae`));
    } catch (e) {
        console.log(chalk.bgRedBright(`Server is running on Port ${PORT}, Could not connected to Databsae`));
    }
});

