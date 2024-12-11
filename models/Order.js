const mongoose = require('mongoose')

const {Schema} = mongoose

const OrderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users' } ,
    method : {type:String, enum: ['cash', 'card', 'cheque','online']},
    payable : {type:Number},
    orderno : {type:String},
    address : {type:String},
    comment : {type:String},
    status : {type:String, enum: ['pending', 'delivered', 'cancelled','intransit'],default:"pending"},
    reason : {type:String},
    created_at:{type:Date,default:Date.now}
})


// Virtual for populating the items in this order
OrderSchema.virtual('items', {
    ref: 'items',  // The model to use for population
    localField: '_id',  // The field in the order model to match
    foreignField: 'order',  // The field in the item model that references the order
    justOne: false  // We want to get an array of items, not just one item
});

// Ensure virtuals are included when converting the document to JSON
OrderSchema.set('toObject', { virtuals: true });
OrderSchema.set('toJSON', { virtuals: true });

const Order = mongoose.model('orders',OrderSchema)
module.exports = Order