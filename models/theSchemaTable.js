const mongoose = require("mongoose");


const TheSchemaTable = new mongoose.Schema({
 name:{
    type:String, required:true,
 }
});

const TheSchemaTables = mongoose.model("TheSchemaTable",TheSchemaTable);
module.exports = TheSchemaTables;