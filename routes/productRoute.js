const productController =require('../controllers/productController');
const express =require('express');

const productRouter =express.Router();

productRouter.get('',productController.list);//list

module.exports= productRouter;