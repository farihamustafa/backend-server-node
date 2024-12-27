const userController = require('../controllers/userController');
const express = require('express');
const userReq = require('../requests/userReq');

const userRouter = express.Router();

userRouter.get('',userController.list); //list
userRouter.post('',userReq.validationRules(),userReq.validate,userController.create); //create
userRouter.put('/:id',userReq.validationRules(true),userReq.validate,userController.update); //update
userRouter.delete('/:id',userController.delete); //delete
userRouter.get('/:id',userController.detail); //detail

module.exports=userRouter;

