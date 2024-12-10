const Order = require('../models/Order');
const Product = require('../models/Product')
class orderService{
    async list(req,res){
        try {
            const order = await Order.find({}).populate('items');
            res.status(200).json({message:"success", data:order})

            
        } catch (error) {
            res.status(400).json({message:error})
            
        }

    }
    async create(req,res){
        try {
           
           const data = (({method, address,payable, comment})=>({method, address,payable, comment}))(req.body);
           data.user = req.user.id
           const order = await Order.insertMany([data]);
           const items = req.body.items;

           
           // console.log(data)
           res.status(200).json({message :"Oder created successfully"});
        } catch (error) {
           
           res.status(400).json({message:error});
        }
           
       }
}
    module.exports= new orderService;