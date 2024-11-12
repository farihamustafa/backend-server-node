const userController =require('../controllers/userController');
const express =require('express');
const userReq = require('../requests/userReq');

const userRouter =express.Router();

userRouter.get('',userController.list);
userRouter.post('',userReq.validationRules(),userReq.validate,userController.create);
userRouter.put('/:id',userReq.validationRules(true),userReq.validate, userController.update);
userRouter.delete('/:id',userController.delete);
userRouter.get('/:id',userController.detail);

module.exports= userRouter;