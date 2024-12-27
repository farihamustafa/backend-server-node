const mongoose = require('mongoose')

require("dotenv").config();

const dbconnect = async ()=>{
    await mongoose.connect(process.env.MONGODB_URL)
    .then((response)=>{
        console.log("MongoDB Connected Successfully")
    })
    .catch((err)=>{
        console.log(err)
    })
}


module.exports = dbconnect;