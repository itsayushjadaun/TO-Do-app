const {Schema , model} = require("mongoose");



const todoSchema = new Schema({
       todo : {
            type  : String,
            required : true
       }
})

const Todo = model('Todo',todoSchema);


module.exports = Todo;
