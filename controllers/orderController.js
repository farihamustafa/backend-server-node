const orderService = require("../services/orderService");

class orderController{

    static list(req,res){
        orderService.list(req,res);
    }

    static create(req,res){
        orderService.create(req,res);
    }
    static filter(req,res){
        orderService.listByUserId(req,res);
    }
    static track(req,res){
        orderService.fetchById(req,res);
    }



}

module.exports=orderController;