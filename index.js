const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const TheSchemaTables = require("./models/theSchemaTable");

mongoose.connect("mongodb+srv://mcompany4151:NewYork4151@cluster0.wj0zkmz.mongodb.net/new_db_test_500?retryWrites=true&w=majority")
.then(()=>{
  console.log("You  are connected to mongoose");

})
.catch(error=>{
  console.log(error);
});


const app =express();



const _portStringNumber = 3005;

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))

app.get("/p", async(req,res)=>{
const _p = await TheSchemaTables.find({});
res.render("index",{_p});

});

app.get("/p/new",(req,res)=>{

  res.render("new");
  
  });

app.get("/p/:id",async(req,res)=>{
 const {id} = req.params;
const _p = await TheSchemaTables.findById(id);
res.render("show",{_p});



});


app.post("/p", async(req,res)=>{
const newPost =   new TheSchemaTables(req.body);
await newPost.save();
res.redirect(`/p/${newPost._id}`);

});

app.get("/p/:id/edit",async(req,res)=>{
const {id} = req.params;
const _p = await TheSchemaTables.findById(id);
res.render("edit",{_p});


});

app.put("/p/:id",async(req,res)=>{
const {id} = req.params;
const _p = await TheSchemaTables.findByIdAndUpdate(id,req.body,{runValidators:true,new:true});
res.redirect(`/p/${_p._id}`);
});

app.delete("/p/:id",async(req,res)=>{
 const {id} = req.params;
 const _p = await TheSchemaTables.findByIdAndDelete(id);
 res.redirect("/p");


});

app.listen(_portStringNumber,(req,res)=>{

console.log("You are on port number",_portStringNumber);



});

