var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:false});
var arr=['Walking','Swimming'];
module.exports = function(app){

app.get('/todo',(req,res)=>{
    res.render('todo',{todo:arr});
});

app.post('/todo',urlencodedParser,(req,res)=>{
//  var json=JSON.stringify(req.body.todo);
  //console.log(req.body.todo);
  if(req.body.todo.length!==0){
  arr.push(req.body.todo);
  res.json(arr);
}
else{
  return;
}
});

app.delete('/todo/:item',(req,res)=>{
  arr=arr.filter(item=>item!==req.params.item);
     console.log(arr);
     res.json(arr);
});
}
