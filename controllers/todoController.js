var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:false});
var mongoose=require('mongoose');
mongoose.Promise= global.Promise;
//To connect local mongodb
mongoose.connect('mongodb://localhost:27017/todo',{ useNewUrlParser: true });
//To create Schema
var TodoSchema=new mongoose.Schema({
    item:String
});
//To model the databasee
var Todo=mongoose.model('Todo',TodoSchema);
var arr=['Walking','Swimming'];
module.exports = function(app){

app.get('/',(req,res)=>{
  res.redirect('/todo');
})
app.get('/todo',(req,res)=>{
  Todo.find().then((data)=>{
    res.render('todo',{todo:data});
  },(err)=>{
    throw err;
  });
});


app.post('/todo',urlencodedParser,(req,res)=>{
//  var json=JSON.stringify(req.body.todo);
  //console.log(req.body.todo);
   if(req.body.todo.length!==0){
     var todo=req.body.todo;
  var newTodo=new Todo({item:todo}).save(function(err,data){
    if(err) throw err;
    res.json(newTodo);
  });
}
else{
  return;
}
//   var todo=Todo()
//   //arr.push(req.body.todo);
//   res.json(arr);
// }
// else{
//   return;
// }
});

app.delete('/todo/:item',(req,res)=>{
  //arr=arr.filter(item=>item!==req.params.item);
    // console.log(arr);
    Todo.findOne({item:req.params.item}).then((data)=>{
     Todo.deleteMany({item:data.item},(err)=>{
         if(err) return handleError(err);
         //console.log(data.item);
         res.json(data.item);
       });
     },(err)=>{
       if(err) throw err;
     });
      // res.json(data);
    });
//});
}
