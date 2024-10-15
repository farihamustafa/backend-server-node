const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const userRouter = require('./routes/userRoute');
require('dotenv').config();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function(request,result){
    console.log("hello");
   result.render('Home');

})
app.use('/api/v1/user', userRouter);
app.listen(process.env.PORT, function(){
    console.log(`server started running on port ${process.env.PORT}!`)
})