const route = require("express").Router()
const fileload = require("../middleware/multer");
const sai = require("../controller/contr");
const ved = require("../controller/contr");
const vinay = require("../controller/contr");
const rak = require("../controller/contr");
const rahul =require("../controller/contr");

//routes

route.get("/",sai.home);


route.post("/add",fileload.single("productImage"),ved.post);


route.get("/add/:price",vinay.get);

route.put("/add/:productname",rak.put);

route.delete("/add/:quantity",rahul.delete);


module.exports=route;