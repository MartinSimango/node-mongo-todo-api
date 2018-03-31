var express = require('express');
var bodyParser= require('body-parser');


var {mongoose}=require('./db/mongoose');
var {ObjectID}= require('mongodb'); //for validating an ID
var {Todo}=require("./models/todo");
var {User}=require("./models/user");

var app=express();

const port= process.env.PORT || 3000; //set up the port

app.use(bodyParser.json()); //use the body parser to convert string to json

app.post('/todos',(req,res)=>{ //handle a post request at the route /todos
    var todo= new Todo({ //create
        text: req.body.text
    }); 
    todo.save().then((doc)=>{
        res.send(doc); //
    },(err)=>{
        res.status(400).send(err);
    });
})

app.get("/todos/:id",(req,res)=>{
    var id= req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findById(id).then((todo)=>{
        if(!todo){
          return res.status(404).send();
        }
        res.send({todo});
    }).catch((err)=>{
        res.send(400).send();
    })
    //validate id
        //ssend 404 if not valid
    
})
app.get("/todos",(req,res)=>{
Todo.find().then((todos)=>{
    res.send({todos});
},(err)=>{
res.status(400).send(err);
})

})

app.listen(port,()=>{
    console.log("Server is running on port",port);
});
module.exports= {
    app
}