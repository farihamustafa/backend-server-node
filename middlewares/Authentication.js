const jwt = require('jsonwebtoken');
const User = require('../models/User');
const userService = require('../services/userService');
require("dotenv").config();


const key = process.env.KEY;

let blacklist = [];

class Authentication{

    verifyToken(req,res,next){


        const authHeader = req.headers['authorization'];
        if (!authHeader) return res.status(403).json({ message: 'No token provided.' });

        const token = authHeader.split(' ')[1];
        if (!token) return res.status(403).json({ message: 'No token provided.' });

        if (blacklist.includes(token)) {
            return res.status(401).json({ message: 'Token revoked. Please login again.' });
        }

        jwt.verify(token,key, (err,decoded)=>{
            if (err) {
                return res.status(401).json({ message: 'Failed to authenticate token.' });
            }
            req.user = decoded;
            next();
        } )

    }

    verify(req,res){
        const authHeader = req.headers['authorization'];
        if (!authHeader) return res.status(403).json({ message: 'No token provided.' });

        const token = authHeader.split(' ')[1];
        if (!token) return res.status(403).json({ message: 'No token provided.' });

        if (blacklist.includes(token)) {
            return res.status(401).json({ message: 'Token revoked. Please login again.' });
        }

        jwt.verify(token,key, (err,decoded)=>{
            if (err) {
                return res.status(401).json({ message: 'Failed to authenticate token.' });
            }
            req.user = decoded;
            return res.status(200).json({message:"Valid token",user:req.user})
        } )
  
    }

    async login(req,res){
        try{
            const credentials = (({email,password})=>({email,password}))(req.body);
            const user = await User.findOne(credentials);
            if(!user){
                return  res.status(400).json({message:"User not found!" })
            }
            const token = jwt.sign({  email : user.email , name : user.name , id : user.id  }, key, { expiresIn: '1h' });
           return res.status(200).json({token});
        }
        catch(err){
            return  res.status(400).json({message:err.message })
        }      
    }

    async register(req,res){
        userService.create(req,res);
    }

    logout(req,res){  
        const authHeader = req.headers['authorization'];
        if (!authHeader) return res.status(403).json({ message: 'No token provided.' });

        const token = authHeader.split(' ')[1];
        if (!token) return res.status(403).json({ message: 'No token provided.' });
        
        blacklist.push(token);
        return res.status(200).json({ message: 'Logged out successfully.' });
    }
}

module.exports = new Authentication;