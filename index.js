const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const cors = require('cors');
const userRouter = require('./routes/userRoute');
const dbconnect = require('./config/dbconnect');
const Authentication = require('./middlewares/Authentication');
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const orderRouter = require('./routes/orderRoute');
require('dotenv').config();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
dbconnect();

app.get('/', function(request,result){
    console.log("hello");
   result.render('Home');

})

app.use('/api/v1/user',Authentication.verifyToken, userRouter);
app.use('/api/v1/auth', authRouter )
app.use('/api/v1/product', productRouter )
app.use('/api/v1/order',Authentication.verifyToken, orderRouter);

app.listen(process.env.PORT, function(){
    console.log(`server started running on port ${process.env.PORT}!`)
})