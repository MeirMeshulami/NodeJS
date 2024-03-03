const Product = require('../models/product');
const Sequelize = require('sequelize');

const getProducts = async(request , response) =>{
    const products= await Product.findAll({where: {
        price: {
            [Sequelize.Op.gt]: 400
        }
    }, raw: true});
    if(products){
        response.render('products/all', {products, title: 'Products'});
    }else{
        response.render('404');
    }
    response.render('products/all', { title: 'Products'});
}

const singleProduct = async (request , response) =>{
    const id = request.params.productId;
    const product = await Product.findOne({where:{id: id}, raw: true});
    if(product){
        response.render('products/single', product);
    }else{
        response.render('404');
    }
    
}

module.exports ={
    singleProduct,
    getProducts
}