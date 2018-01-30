const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017",(err,client)=>{
  if(err){
    return console.log("Unable to connect to MongoDB server");
}
  console.log("Connected to MongoDB server");
  client.db("TodoApp").collection('Users').find({name:'Martin'}).toArray().then((docs)=>{
    console.log("Todos");
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
      console.log("Unable to fetch todos",err);
  })
//  client.db("TodoApp").collection('Todos').count({_id:new ObjectID('5a63dc19eedd98a05a3be265')}).then((count)=>{
//     console.log('Todos count: ',count);
//   },(err)=>{
//       console.log("Unable to fetch todos",err);
//   })

//client.close();
});



