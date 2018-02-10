const {ObjectID} = require('mongodb');
const {Todo} = require("../server/models/todo");
const {mongoose}= require("../server/db/mongoose");
const {User} = require("../server/models/user")
var id='5a773d245f0ac9a839b4891d';

// if(!ObjectID.isValid(id)){
//     console.log("ID not valid");
//  }
// // Todo.find({
// //     _id:id
// // }).then((todos)=>{
// // console.log('Todos',todos);
// // })

//  Todo.findOne({
//      _id:id
//  }).then((todos)=>{
// console.log('Todos',todos);
// }).catch((err)=>{
//     console.log(err);
// });
// // Todo.findById(id).then((todo)=>{
// //     if(!todo){
// //         return console.log("No todo found");
// //     }
// // console.log('Todos',todos);
// // })
User.findById(id).then((user)=>{
    if(!user){
     return console.log("No user found");
    }
    console.log("Todos",user);
},(err)=>{
    console.log(err);
})