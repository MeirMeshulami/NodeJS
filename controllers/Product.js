const Product = require('../models/product');
const Sequelize = require('sequelize');

const getProducts = async (request, response) => {
    const products = await Product.findAll({
        where: {
            price: {
                [Sequelize.Op.gt]: 400
            }
        }, raw: true
    });
    if (products) {
        response.render('products/all', { products, title: 'Products' });
    } else {
        response.render('404');
    }

}

const singleProduct = async (request, response) => {
    const id = request.params.productId;
    const product = await Product.findOne({ where: { id: id }, raw: true });
    if (product) {
        response.render('products/single', product);
    } else {
        response.render('404');
    }

}

const searchProducts = async (request, response) => {
    const searchTerm = request.query.search;
    try {
        const products = await Product.findAll({
            where: {
                name: {
                    [Sequelize.Op.like]: `%${searchTerm}%`
                }
            },
            raw: true
        });

        response.render('products/search', { products });
    } catch (error) {
        console.error('Error searching for products:', error);

        response.render('error', { error });
    }
}

module.exports = {
    searchProducts,
    singleProduct,
    getProducts

}