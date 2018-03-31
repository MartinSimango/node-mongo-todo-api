const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017",(err,client)=>{
  if(err){
    return console.log("Unable to connect to MongoDB server");
}
  const db= client.db("TodoApp");
  console.log("Connected to MongoDB server");
   db.collection('todos').find().count().then((count)=>{
   //db.collection('todos).find({name:"Martin"}).then((docs)=>) ....
    console.log("Todos");
    console.log(count);
    //console.log(JSON.stringify(docs,undefined,2));
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
