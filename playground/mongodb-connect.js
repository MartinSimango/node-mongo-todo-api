//  user= {name:'martin',age:21};
// var {name,age}=user;
// console.log(name,age);
// const MongoClient= require("mongodb").MongoClient; 
// var obj= new ObjectID();
// console.log(obj);
const {MongoClient,ObjectID}= require("mongodb"); //uses destructor


MongoClient.connect("mongodb://localhost:27017",(err,client)=>{
    if(err){
    return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    // client.db("TodoApp").collection('Todos').insertOne({ //create a new 'table(collection)' and insert a row
    // text:"Something todo",
    // completed:false
    // },(err,result)=>{
    //     if(err){
    //        return console.log("Failed to insert item:",err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2)); //result.ops contains all the records(documents) that were inserted
    // });    
    // client.db("TodoApp").collection("Users").insertOne({
    //     name: "Martin",
    //     age:  20,
    //     location:"20 Espin Drive,Grahamstown"
    // },(err,result)=>{
    //     if(err){
    //          return console.log("Failed to insert item:",err);
    //     }
    //      console.log(result.ops[0]._id.getTimestamp());
    // })
    client.close(); //close connection with database
});

readline();