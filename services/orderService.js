const Item = require('../models/Item');
const Order = require('../models/Order')

class orderService{
    
    async list(req,res){
        try{
            const order = await Order.find({}).populate('items');
            res.status(200).json({message:"success",data:order})
        }
        catch(err){
            res.status(400).json({message:err})
        }
    }

    async create(req,res){
        try{
            let data = (({method,payable,address,comment})=>({method,payable,address,comment}))(req.body);
            data.user =  req.user.id
            const order = await Order.insertMany([data]);

            const items = req.body.items;

            items.forEach((item) => {
                item.order = order[0]._id; // Setting the order (1-based index)
            });
              
            await Item.insertMany(items);

            res.status(200).json({message:"Order created successfully"})
        }
        catch(err){
            res.status(400).json({message:err})
        }
    }
}

module.exports = new orderService