const express = require("express");
require("../src/db/conn");//connect mongodb database
const techatcore = require("./service/router/routers")

const app = express();
const port = process.env.PORT||4000;

app.use(express.json());

//calling routes
app.use('/',techatcore);



app.listen(port,()=>{
    console.log(`server is running at port no ${port}`)
})