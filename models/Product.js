const mongoose = require('mongoose')

const { Schema } = mongoose

const ProductSchema = new Schema({
    name :{type:String},
    description :{type:String},
    price :{type:String},
    url:{type:String},
    create_at:{type:Date, default:Date.now},
})

const Product = mongoose.model('products', ProductSchema)
module.exports= Product;