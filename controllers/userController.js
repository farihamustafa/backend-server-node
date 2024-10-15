class userController {
    static list(req, res){
res.status(200).json({message:"user list"})
    }
    static create(req, res){
        res.status(200).json({message:"create any user"})

    }
    static update(req, res){
        res.status(200).json({message:"update user"})

    }
    static delete(req, res){
        res.status(200).json({message:"delete user"})

    }
    static details(req, res){
        res.status(200).json({message:"user detail"})

    }

}
module.exports= userController;