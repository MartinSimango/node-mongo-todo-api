var mongoose=require('mongoose');

mongoose.Promise=global.Promise; //use the javasrcipt promise library
//connect to the mongo database
mongoose.connect('mongodb://localhost:27017/TodoApp');

//model specifies what attrivutes a doc in the model(document) can have
var Todo= mongoose.model('Todo',{ //Todo is the name of the collection
    text:{
        type:String,
        required:true,
        minlength:1,
        trim:true 
    },
    completed:{
        type:Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default:null
    }
});

// var newTodo= new Todo({
//     text: 'Cook Dinner'
// });

// newTodo.save().then((doc)=>{
// console.log("Saved the todo",doc);
// },(err)=>{
// console.log("Unable to save todo",err);
// });

var newTodo_2 = new Todo({
    text: 'Open the Door'
});

// newTodo_2.save().then((doc)=>{
// console.log("Saved the todo",doc);
// },(err)=>{
// console.log("Unable to save todo",err);
// });


var User= mongoose.model('User',{
    email:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    }
})

var newUser= new User({
    email:"shukosimango@yahoo.com"
})
newUser.save().then((doc)=>{
console.log("Saved the todo",doc);
},(err)=>{
console.log("Unable to save todo",err);
});
