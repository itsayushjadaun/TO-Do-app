const express = require('express');
const mongoose = require('mongoose');
const path = require("path");



mongoose.connect("mongodb://127.0.0.1:27017/todo");

const app = express();

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.resolve('./public')));
app.set("view engine","ejs");
app.set("views", path.resolve("./views"));


app.use(require("./routes/index"));
app.use(require("./routes/todo"));




app.listen(8000,()=>console.log("app is listing on port :8000"));