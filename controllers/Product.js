
exports.getProducts = (request , response) =>{
    response.render('products/all', { title: 'Products'});
}

exports.singleProduct = (request , response) =>{
    console.log('Signle Product');
}