const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017",(err,client)=>{
  if(err){
    return console.log("Unable to connect to MongoDB server");
}
  console.log("Connected to MongoDB server");
client.db("TodoApp").collection('Todos').findOneAndUpdate({_id: new ObjectID("5a76f6a9e5516e644b181ff6")},
{ $set: {completed: true} },{returnOriginal:false }
).then((result)=>{
    console.log(result);
})
client.db("TodoApp").collection('Users').findOneAndUpdate({name:'Martin'},{$set:{
    name: 'Martin Shuko'
},
$inc:{
    age:1
}
},{
    returnOriginal:false
}).then((result)=>{
console.log(result);
})

// client.close();
});


