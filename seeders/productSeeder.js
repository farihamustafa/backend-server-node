const dbconnect = require('../config/dbconnect');
const {faker} = require("@faker-js/faker")
const Product = require('../models/Product');
dbconnect();
async function generateProduct(num){
try {
    const products = [];
    for(var i = 0; i < num;i++ ){
        const product ={
            name :faker.commerce.productName(),
            description :faker.commerce.productDescription(),
            price :faker.commerce.price(),
            url:faker.image.urlPlaceholder(),
        }
        products.push(product)

    }
    await Product.insertMany(products);
    console.log("User seeder Run successfully");
    
} catch (error) {
    console.log(error)
    
}
}
generateProduct(3)