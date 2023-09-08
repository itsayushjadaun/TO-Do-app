const router = require('express').Router();
const { log } = require('console');
const Todo = require("../models/todo");


router.post("/add/todo",(req,res)=>{
      const { todo } = req.body ;
      const newTodo = new Todo({todo})
      
      newTodo.save().then(()=>{
        console.log("successfull added!")
        res.redirect("/");
      }).catch((err)=>console.log("couden't add task",err));
})

router.get("/delete/todo/:_id",(req,res)=>{
      let {_id} = req.params;
      console.log(req.params);
      // console.log(">>>>" ,Todo.findOne({_id}));
      Todo.deleteOne({_id})
      .then(()=>{
            console.log("deleted item")
            res.redirect("/");
      })
      .catch((err)=>{
            console.log("couden't delete item",err);
            res.redirect("/");
      });
})

 
module.exports = router;