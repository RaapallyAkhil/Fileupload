 const Data = require("../../models/login.js");// database Schema

exports.home = (req,res)=>{
    res.render("hello");
}

//post method
exports.post =(req,res) =>{
    console.log(req.file.image);
  const storedata= Data({
    productname:req.body.productname,
    price:req.body.price,
    quantity:req.body.quantity,
    image:req.file.image

});
storedata.save()
.then(()=>{
    return res.json({msg:"profile successfully stored"});
})
.catch((err)=>{
    return res.status(400).json({err:err});
});
}


//get method
exports.get =(req,res)=>
{
    Data.findOne({price:req.params.price},
        (err,result)=>{
        if(err)
        res.status(500).json({msg:err});
        res.json({
            data:result,
            price:req.params.price

        })
    })
}

//put method or upadte method
exports.put=(req,res)=>
{
    const upproductname = req.params.productname;
    const upquantity = req.body.quantity;
    const upprice = req.body.price;
    Data.findOneAndUpdate({productname:upproductname},{$set:{quantity:upquantity,price:upprice}},
        {new:true},(err,Data)=>{
            if(err)
            {
                res.send("ERROR")
            }
            else{
                if(Data==null)
                {
                    res.send("nothing found")
                }
                else{
                    res.send(Data)
                }
            }
        })
}

//Delete method
exports.delete=(req,res)=>{
    Data.findOneAndDelete({
        quantity:req.params.quantity},
        (err,result)=>{
            if(err)
            return res.status(500).json({msg:err});
            const msg={
                msg:"user deleted",
                quantity:req.params.quantity,
            };
            return res.json(msg);
            });

        }