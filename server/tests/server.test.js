const expect= require('expect');
const supertest= require('supertest');

var {Todo}= require("../models/todo");
var {app}= require("../server");
var {ObjectID}=require('mongodb');
const todos=[{
_id:new ObjectID(),
text:"First test todo"
},{
_id: new ObjectID(),
text:"Second test todo"
},{
_id: new ObjectID(),    
text:"Third test todo"
}]
beforeEach((done)=>{
Todo.remove({}).then(()=>{
   return Todo.insertMany(todos);  //return a promise
}).then(()=>done());
});
// describe("POST /todos",()=>{

// it("Should create a new todo",(done)=>{ //done because its calling an asynchronous function
// var text="Hi"
// supertest(app)
// .post("/todos")
// .send({text:text})
// .expect(200)
// .expect((res)=>{
//     expect(res.body.text).toBe(text);
// })
// .end((err,res)=>{
//     if(err){
//         return done(err);
//     }
//     Todo.find({text}).then((todos)=>{ //check the database
//         expect(todos.length).toBe(1);
//         expect(todos[0].text).toBe(text);
//         done();
//     }).catch((e)=>{
//        return done(e);
//     })
// })
// })

// it("Should not create todo",(done)=>{
//  supertest(app)
//  .post("/todos")
//  .send({})
//  .expect(400)
//  .end((err,res)=>{
//      if(err){
//          return done(err);
//      }
//      Todo.find().then((todos)=>{ 
//          expect(todos.length).toBe(3);
//          done();
//      }).catch((e)=>done(e))
//  })

// })
// })

// describe("GET /todos",()=>{

// it("Should get all todos",(done)=>{
// supertest(app)
// .get("/todos")
// .expect(200)
// .expect((res)=>{
//  expect(res.body.todos.length).toBe(3);
// })
// .end(done);

// })



// })

describe("GET /todos/:id",()=>{
    it("should get the first todo",(done)=>{
        var id=todos[0]._id;
        supertest(app)
        .get("/todos/"+id)
        .expect(200)
        .expect((res)=>{
                //expect(res.body.todo.text)
                   expect(res.body.todo.text).toEqual(todos[0].text);
         
        }).end(done);
    })
    it("should return a 404 if todo not found",(done)=>{
        var id= new ObjectID().toHexString();
        supertest(app)
        .get("/todos/"+id)
        .expect(404)
        .end(done);

    });
     it("should return a 404 for non object id's",(done)=>{
         supertest(app)
         .get("/todos/123")
         .expect(404)
         .end(done);
        
    });

})
