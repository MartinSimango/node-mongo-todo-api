const expect= require('expect');
const supertest= require('supertest');

var {Todo}= require("../models/todo");
var {app}= require("../server");

const todos=[{
text:"First test todo"
},{
text:"Second test todo"
},{
text:"Third test todo"
}]
beforeEach((done)=>{
Todo.remove({}).then(()=>{
   return Todo.insertMany(todos);  //return a promise
}).then(()=>done());
});
describe("POST /todos",()=>{

it("Should create a new todo",(done)=>{ //done because its calling an asynchronous function
var text="Hi"
supertest(app)
.post("/todos")
.send({text:text})
.expect(200)
.expect((res)=>{
    expect(res.body.text).toBe(text);
})
.end((err,res)=>{
    if(err){
        return done(err);
    }
    Todo.find({text}).then((todos)=>{ //check the database
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
    }).catch((e)=>{
       return done(e);
    })
})
})

it("Should not create todo",(done)=>{
 supertest(app)
 .post("/todos")
 .send({})
 .expect(400)
 .end((err,res)=>{
     if(err){
         return done(err);
     }
     Todo.find().then((todos)=>{ 
         expect(todos.length).toBe(3);
         done();
     }).catch((e)=>done(e))
 })

})
})

describe("GET /todos",()=>{

it("Should get all todos",(done)=>{
supertest(app)
.get("/todos")
.expect(200)
.expect((res)=>{
 expect(res.body.todos.length).toBe(3);
})
.end(done);

})



})

