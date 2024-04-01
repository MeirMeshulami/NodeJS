const hbs = require('hbs');




hbs.registerHelper("getProductImage",function(product, option){
    if(product.ProductImages){
        return `<img src="${product.ProductImages.url[0]}" alt="${product.name}" />`
    }
    return '';
});