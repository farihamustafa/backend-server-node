const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoute');
const dbconnect = require('./config/dbconnect');
const Authentication = require('./middlewares/Authentication');
const authRouter = require('./routes/authRoute');
const cors = require('cors');
//1
const methodOverride = require('method-override');
const productRouter = require('./routes/productRoute');
const orderRouter = require('./routes/orderRoute');

const expressLayout = require('express-ejs-layouts');
const Product = require('./models/Product');
const User = require('./models/User');

app.use(expressLayout);
app.set('view engine','ejs')
app.use(express.static('public'));
require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: false }))
//2
app.use(methodOverride('_method'))
app.use(bodyParser.json());
app.use(cors());

dbconnect();

app.get('/',function(request,result){
    result.render('home');
})


app.get('/user', async function (request, result) {
    const users = await User.find({ deleted_at: null });
    return result.render('users', { data: users });
  });

  ///CRUD OPERATIONS FOR USER
//   app.delete('/user/:id',async function(request,result) {
//     const id = request.params.id;
//     const users = await User.findById(id)
//     users.deleted_at = Date.now();
//     users.save();
//     return result.redirect('/user')
// })
app.delete('/user/:id', async function (request, result) {
    try {
      const id = request.params.id;
      const users = await User.findById(id);
  
      // Handle non-existent users
      if (!users) {
        return result.status(404).send("User not found");
      }
  
      // Soft delete the user
      users.deleted_at = Date.now();
      await users.save();
  
      // Redirect after successful save
      return result.redirect('/user');
    } catch (error) {
      console.error("Error deleting user:", error);
      return result.status(500).send("Internal Server Error");
    }
  });
  


  
 //// CRUD OPERATION OF PRODUCTS
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

app.get('/product/create',async function(request,result) {
    return result.render('create-product',{layout: 'layout'});
})

app.get('/product/:id/edit',async function(request,result) {
    const id = request.params.id;
    const product = await Product.findById(id)
    return result.render('edit-product',{layout: 'layout',data:product});
})

app.post('/product/store',async function(request,result) {
    const data = (({name,description,price,url})=>({name,description,price,url}))(request.body);
    await Product.insertMany([data])
    return result.redirect('/product')
})

app.put('/product/update',async function(request,result) {
    const id = request.body.id;
    const data = (({name,description,price,url})=>({name,description,price,url}))(request.body);
    await Product.findByIdAndUpdate(id,data);
    return result.redirect('/product')
})


app.use('/api/v1/user',Authentication.verifyToken,userRouter)
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/product',productRouter)
app.use('/api/v1/order',Authentication.verifyToken,orderRouter)

app.listen(process.env.PORT,function(){
    console.log(`Server Started Running on PORT ${process.env.PORT}!`)
})
