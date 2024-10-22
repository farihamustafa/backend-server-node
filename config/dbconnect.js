const mongoose = require ('mongoose')

const dbconnect = async ()=>{
    await mongoose.connect(process.env.MONGODB_URL)
    .then((response)=>{
        console.log("connected to database");
    })
    .catch((error)=>{
        console.log(error);
    })
}
module.exports= dbconnect;