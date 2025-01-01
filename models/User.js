const mongoose = require('mongoose')

const {Schema} = mongoose

const UserSchema = new Schema({
    name : {type:String},
    email : {type:String,unique:true},
    password:{type:String},
    created_at:{type:Date,default:Date.now},
    deleted_at:{type:Date,default:null}
})

const User = mongoose.model('users',UserSchema)
module.exports = User