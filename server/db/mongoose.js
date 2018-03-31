var mongoose= require('mongoose');

mongoose.Promise=global.Promise; //make the mongoose use nodejs promises
mongoose.connect("mongodb://localhost:27017/TodoApp");
//cooonect to the TodoApp database running on port 27017 on the localhost

module.exports ={
    mongoose
}