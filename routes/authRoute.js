const express = require('express');
const Authentication = require('../middlewares/Authentication');
const authRouter = express.Router();
authRouter.post('/login',Authentication.login);
authRouter.post('/register',Authentication.register);
module.exports = authRouter;