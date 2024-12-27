const userService = require("../services/userService");

class userController{

    static list(req,res){
        userService.list(req,res);
    }

    static create(req,res){
        userService.create(req,res);
    }

    static update(req,res){
        userService.update(req,res);
    }

    static delete(req,res){
        userService.delete(req,res);
    }

    static detail(req,res){
        userService.detail(req,res);
    }

}

module.exports=userController;