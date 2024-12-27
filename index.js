const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoute');
const dbconnect = require('./config/dbconnect');
const Authentication = require('./middlewares/Authentication');
const authRouter = require('./routes/authRoute');
const cors = require('cors');
const productRouter = require('./routes/productRoute');
const orderRouter = require('./routes/orderRoute');
//1
const expressLayout = require('express-ejs-layouts');
const Product = require('./models/Product');
//2
app.use(expressLayout);
app.set('view engine','ejs')
app.use(express.static('public'));
require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

dbconnect();

app.get('/',function(request,result){
    result.render('home');
})
app.get('/product',async function(request,result) {
    const products = await Product.find({deleted_at:null})
    return result.render('products',{data:products});
})

app.delete('/product/:id',async function(request,result) {
    const id = request.params.id;
    const products = await Product.findById(id)
    products.deleted_at = Date.now();
    products.save();
    return result.redirect('/product')
})


app.use('/api/v1/user',Authentication.verifyToken,userRouter)
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/product',productRouter)
app.use('/api/v1/order',Authentication.verifyToken,orderRouter)

app.listen(process.env.PORT,function(){
    console.log(`Server Started Running on PORT ${process.env.PORT}!`)
})
