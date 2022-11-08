const express = require("express");
const mongoose = require("mongoose");
const productShceema= new mongoose.Schema({
    productname:{
        type:String,
        require:true,
        unique: true,
    },
    price:{
        type:Number,
        require:true,
    },
    quantity:{
        type:Number,
        require:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    image:{
        type:String,
        require:true,
    }
});
const Data = new mongoose.model("Data",productShceema);
module.exports=Data;