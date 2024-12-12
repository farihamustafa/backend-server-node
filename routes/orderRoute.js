const orderController = require('../controllers/orderController');
const express = require('express');

const orderRouter = express.Router();

orderRouter.get('',orderController.list); 
orderRouter.post('',orderController.create);
orderRouter.get('/filter',orderController.filter);
orderRouter.get('/track/:id',orderController.track);

module.exports=orderRouter;

