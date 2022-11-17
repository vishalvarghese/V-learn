const { text } = require('express');
const mongoose= require('mongoose');
var userschema =mongoose.Schema({
 name:String,
 email:String,
 profilePicture:String,
 coverPicture:String,
 connections:String,
 phonenumber:Number,
 password:String,
 status:{type:String,default:"Active"},

});
var userone =mongoose.model("user",userschema)
module.exports=userone  
