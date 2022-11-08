const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/productdetailes",{
   // useNewUrlParser: true, useUnifiedTopology: true 
}).then (()=>{
    console.log(`connected successful`);
}).catch((e)=>{
    console.log(`no connection`)
})