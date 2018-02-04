const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017",(err,client)=>{
  if(err){
    return console.log("Unable to connect to MongoDB server");
}
  console.log("Connected to MongoDB server");
//delete Many
/*client.db("TodoApp").collection("Todos").deleteMany({text:"Wash clothes"}).then((result)=>{
console.log(result);
})*/
//delete one
/*client.db("TodoApp").collection("Todos").deleteOne({text:"Wash clothes"}).then((result)=>{
console.log(result);
})*/
//find one and delete
client.db("TodoApp").collection("Todos").findOneAndDelete({completed:false}).then((result)=>{
console.log(result);
//client.close();
});
});


