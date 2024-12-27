const User = require('../models/User')

class userService{
    
    async list(req,res){
        try{
            const user = await User.find({});
            res.status(200).json({message:"success",data:user})
        }
        catch(err){
            res.status(400).json({message:err})
        }
    }

    async create(req,res){
        try{
            const data = (({name,email,password})=>({name,email,password}))(req.body);
            User.insertMany([data]);
            res.status(200).json({message:"User created successfully"})
        }
        catch(err){
            res.status(400).json({message:err})
        }
    }

    async update(req,res){
        try{
            const id = req.params.id;
            const data = (({name,email})=>({name,email}))(req.body);
            await User.findByIdAndUpdate(id,data);
            res.status(201).json({message:"User updated successfully"})
        }
        catch(e){
            res.status(400).json({message:e})
        }
    }

    async delete(req,res){
        try{
            const id = req.params.id;
            await User.findByIdAndDelete(id);
            res.status(200).json({message:"User Delete Successfully"})

        } catch(err){
            res.status(400).json({message:err})
        }
    }

    async detail(req,res){
        try{
            const id = req.params.id;
            const user = await User.findById(id);
            res.status(200).json({message:"success",data:user})

        } catch(err){
            res.status(400).json({message:err})
        }

    }

}

module.exports = new userService