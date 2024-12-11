const orderService = require("../services/orderService");

class orderController{

    static list(req,res){
        orderService.list(req,res);
    }

    static create(req,res){
        orderService.create(req,res);
    }


}

module.exports=orderController;