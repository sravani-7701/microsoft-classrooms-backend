const mongoose = require('mongoose');
const DB=process.env.DATABASE;
const conn = mongoose.createConnection("mongodb+srv://sravani:rosra0704@cluster0.alfxl.mongodb.net/classroom?retryWrites=true&w=majority"
, {useNewUrlParser: true,useUnifiedTopology:true});

/*mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() =>{
    console.log("connection successful db");
}).catch((err) =>{
console.log(err)
});*/
module.exports=conn;