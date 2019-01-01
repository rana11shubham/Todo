var express=require('express');
var todoController=require('./controllers/todoController');
var bodyParser=require('body-parser');

var app=express();
//set up view engine as ejs
app.set('view engine','ejs');
//static files
app.use(express.static('./public'));
//start the todo Controller
todoController(app);
// listen to port
app.listen('3000',()=>{
  console.log('App is started at port 3000');
});
