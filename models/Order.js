const mongoose = require('mongoose')

const { Schema } = mongoose

const OrderSchema = new Schema({
    user :{type: Schema.Types.ObjectId, ref: 'users'},
    method : {type:String , enum :['cash', 'online', 'card', 'cheque'] },
    payable:{type:Number},
    orderno :{type:String},
    address:{type:String},
    comment:{type:String},
    status:{type:String , enum :['pending','delivered','cancelled','intransit'], default:"pending"},
    reason:{type:String},
    create_at:{type:Date, default:Date.now},
})

OrderSchema.virtual('items',{
    ref: 'items',
    localField:'_id',
    foreignField: 'order',
    justOne : false
})
OrderSchema.set('toObject', {virtuals: true});
OrderSchema.set('toJSON', {virtuals: true})

const Order = mongoose.model('orders', OrderSchema)
module.exports= Order;