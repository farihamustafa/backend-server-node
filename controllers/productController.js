const productService = require("../services/productService");

class productController{

    static list(req,res){
        productService.list(req,res);
    }


}

module.exports=productController;