const express = require ('express');
const app = express();
app.set('view engine', 'ejs');
require('dotenv').config();
app.get('/', function(request,result){
    console.log("hello");
   result.render('Home');

})
app.get('/about', function(request, result){
    result.status(200).json({message:"Aboutpage"})
})
app.post('/user/store', function(req, res){
    res.status(200).json({message:"Data submitted"})
})
app.listen(process.env.PORT, function(){
    console.log(`server started running on port ${process.env.PORT}!`)
})