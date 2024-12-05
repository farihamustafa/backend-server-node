const mongoose = require('mongoose');

const { Schema } = mongoose

const ItemSchema = new Schema({
    product:{type:Schema.Types.ObjectId, ref:'products'},
    order :{type:Schema.Types.ObjectId, ref:'orders'},
    price:{type:Number},
    qty:{type:Number},
    create_at:{type:Date, default:Date.now},
})

const Item = mongoose.model('items', ItemSchema)
module.exports= Item;