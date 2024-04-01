const Product = require('../models/product');
const ProductImages = require('../models/productimages');
const Category = require('../models/category');
const sequelize = require('sequelize');


const search = async (request, response) => {
    try {
        const searchTerm = request.query.q;
        let products = [];
        if (searchTerm !== undefined) {
            products = await Product.findAll({
                where: {
                    name: {
                        [sequelize.Op.like]: `%${searchTerm}%`
                    },
                },
                include: [
                    { model: ProductImages, required: false, attributes: ['url'] },
                    { model: Category, required: false, attributes: ['name'] }
                ],
            });
        }
        response.render('products/search', { products, title: 'Search Products' });
    } catch (error) {
        console.error(error);
        response.status(500).send('Internal Server Error');
    }
}

const getCategoryProducts = async (request, response) => {
    const { nameOfCategory } = request.params;

    let products = await Product.findAll({
        include: [
            { model: Category, where: { name: nameOfCategory }, attributes: ['name'] },
            { model: ProductImages, required: false, attributes: ['url'] }
        ],
        raw: true
    });
    products = products.map(p => ({ url: p['ProductImages.url'], categoryName: p['Categories.name'], ...p }));

    response.render('products/category', { products, title: `Products in ${nameOfCategory}` });
}

const getAllProducts = async (request, response) => {

    const products = await Product.findAll({
        include: [{ model: ProductImages, required: false, attributes: ['url'] }]
    });
    response.render('products/all', { products, title: 'All Products' });

}

const singleProduct = async (request, response) => {
    const id = request.params.productId;
    try {
        const product = await Product.findOne({ where: { id: id }, raw: true });
        if (product) {
            response.render('products/single', product);
        } else {
            response.status(404).render('404');
        }
    } catch (error) {
        console.error(error);
        response.status(500).send('Internal Server Error');
    }
}

module.exports = {
    singleProduct,
    getAllProducts,
    getCategoryProducts,
    search
}
