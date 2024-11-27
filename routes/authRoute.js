
const express = require('express');
const Authentication = require('../middlewares/Authentication');
const userReq = require('../requests/userReq');

const authRouter = express.Router();

authRouter.post('/login',Authentication.login); //create
authRouter.post('/register',userReq.validationRules(),userReq.validate,Authentication.register);
authRouter.post('/logout',Authentication.logout);
authRouter.post('/verify',Authentication.verify);
module.exports=authRouter;

