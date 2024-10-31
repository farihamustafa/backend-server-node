const User = require('../models/User')
class userService{
    async list(req,res){
        try {
            const user = await User.find({});
            res.status(200).json({message:"success", data:user})

            
        } catch (error) {
            res.status(400).json({message:error})
            
        }

    }
    async create(req,res){
     try {
        
        const data = (({name, email,password})=>({name,email,password}))(req.body);
         User.insertMany([data]);
        // console.log(data)
        res.status(200).json({message :"User created successfully"});
     } catch (error) {
        
        res.status(400).json({message:error});
     }
        
    }
    async update(req,res){
        try {
            const id = req.params.id;
            const data = (({name, email, password})=>({name,email, password}))(req.body);
            await User.findByIdAndUpdate(id,data);
            res.status(201).json({message:"User updtaed successfully"})
            
        } catch (error) {
            res.status(400).json({message:error})
        }
        
    }
    async delete(req,res){
        try {
            const id = req.params.id;
             await User.findByIdAndDelete(id);
            res.status(200).json({message:"user deleted successfully"});
            
           } catch (error) {
            res.status(400).json({message: error})
            
           }

    }
      
    async details(req,res){

        try {
            const id = req.params.id;
            const user = await User.findById(id);
            res.status(200).json({message:"user find successfully", data:user});
            
           } catch (error) {
            res.status(400).json({message: error})
            
           }
            
        }
    }
module.exports= new userService;