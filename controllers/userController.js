const userService = require('../services/userServices')
class userController {
    static list(req, res){
        userService.list(req,res)

    }
    static create(req, res){
        userService.create(req,res)

    }
    static update(req, res){
        userService.update(req,res)

    }
    static delete(req, res){
        userService.delete(req,res)

    }
    static details(req, res){
        userService.details(req,res)

    }

}
module.exports= userController;