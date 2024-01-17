const TheSchemaTables = require("./models/theSchemaTable");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mcompany4151:NewYork4151@cluster0.wj0zkmz.mongodb.net/new_db_test_500?retryWrites=true&w=majority")
.then(()=>{
  console.log("You  are connected to mongoose");

})
.catch(error=>{
  console.log(error);
});

const inserInto=[

{ 
 name:"tim"

},
{

 name:"kim"

}

];




const InsertIntoTable = TheSchemaTables.insertMany(inserInto)
.then((res)=>{

    console.log(res);
})
.catch(error=>{

    console.log(error);
});