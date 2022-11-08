const multer = require("multer");



//set storage
var akhil = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./public/uploads")
    },
    filename:(req,file,callback)=>{

        console.log(file)

        //to get extention(image.jpg)
        var ext = file.originalname.substring(file.originalname.lastIndexOf("."));

        console.log("ext",ext);

        callback(null,file.fieldname + "-" +Date.now() + ext)

        //callback(null,req.decoded.username +".jpg");
    }
})

const fileFilter = (req,file,callback)=>{
    if(file.mimetype == "image/jpeg" || file.mimetype =="image/png")
    {
        callback(null,true);
    }else{
        callback(null,false);
    }
}
const fileload = multer({storage:akhil,
limits:{
    filesize:1024*1024*6
},
fileFilter:fileFilter,
})

module.exports=fileload;