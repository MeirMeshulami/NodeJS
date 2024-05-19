const hbs = require('hbs');





Handlebars.registerHelper('getProductImage', function(product) {
    if (product.ProductImages && product.ProductImages.length > 0) {
        return `<img src="${product.ProductImages[0].url}" alt="${product.name} Image" />`;
    } else {
        return `<img src="/path/to/placeholder/image.jpg" alt="Placeholder Image" />`;
    }
});


Handlebars.registerHelper('getCategoryName', function(product) {
    if (product.Categories.name) {
        return product.Categories.name;
    } else {
        return "No category";
    }
});