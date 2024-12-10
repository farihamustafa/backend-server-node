const orderController =require('../controllers/orderController');
const express =require('express');

const orderRouter =express.Router();

orderRouter.get('',orderController.list);//list
orderRouter.post('',orderController.create);

module.exports= orderRouter;