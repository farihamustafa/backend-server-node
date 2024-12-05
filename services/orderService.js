const Order = require('../models/Order');
const Product = require('../models/Product')
class orderService{
    async list(req,res){
        try {
            const order = await Order.find({});
            res.status(200).json({message:"success", data:order})

            
        } catch (error) {
            res.status(400).json({message:error})
            
        }

    }
    async create(req,res){
        try {
           
           const data = (({method, address,payable, comment})=>({method, address,payable, comment}))(req.body);
            Order.insertMany([data]);
           // console.log(data)
           res.status(200).json({message :"Oder created successfully"});
        } catch (error) {
           
           res.status(400).json({message:error});
        }
           
       }
}
    module.exports= new orderService;