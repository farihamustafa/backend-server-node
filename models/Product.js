const mongoose = require('mongoose')

const {Schema} = mongoose

const ProductSchema = new Schema({
    name : {type:String},
    description : {type:String},
    price:{type:String},
    url:{type:String},
    created_at:{type:Date,default:Date.now},
    deleted_at:{type:Date,default:null}
})

const Product = mongoose.model('products',ProductSchema)
module.exports = Product