const userController = require ('../controllers/userController');
const express = require('express');
const userRouter = express.Router();
userRouter.get('',userController.list);
userRouter.post('',userController.create);
userRouter.put('/:id', userController.update);
userRouter.delete('/:id', userController.delete);
userRouter.get('/:id', userController.details);
module.exports= userRouter;