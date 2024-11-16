const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const cors = require('cors');
const userRouter = require('./routes/userRoute');
const dbconnect = require('./config/dbconnect');
const Authentication = require('./middlewares/Authentication');
const authRouter = require('./routes/authRoute');
require('dotenv').config();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(request,result){
    console.log("hello");
   result.render('Home');

})
dbconnect();
app.use('/api/v1/user',Authentication.VerifyToken, userRouter);
app.use('/api/v1/auth', authRouter )

app.listen(process.env.PORT, function(){
    console.log(`server started running on port ${process.env.PORT}!`)
})