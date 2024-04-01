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
app.use(express.static(path.join(__dirname, 'public')));

console.log(chalk.blueBright('Meshulami'));
hbs.registerPartials(__dirname + '/views/partials');


app.use('/products', productRouter);
app.use('/auth', authRouter);


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

app.listen(PORT, async () => {
    try {
        await db.authenticate();
        console.log(chalk.bgYellowBright(`Server is running on Port ${PORT}, Succssfully connected to Databsae`));
    } catch (e) {
        console.log(chalk.bgRedBright(`Server is running on Port ${PORT}, Could not connected to Databsae`));
    }
});

