const Product = require('../models/Product')

class productService{
    
    async list(req,res){
        try{
            const product = await Product.find({});
            res.status(200).json({message:"success",data:product})
        }
        catch(err){
            res.status(400).json({message:err})
        }
    }
}

module.exports = new productService