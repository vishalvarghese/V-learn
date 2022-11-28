const { text } = require('express');
const mongoose= require('mongoose');
var userschema =mongoose.Schema({
 name:String,
 email:String,
 profilePicture:{type:String,default:"profilepicdefault.png"},
 coverPicture:String,
 connections:String,
 phonenumber:Number,
 password:String,
 connection_Request:{
    type:Array,
    default:[]
},
connections:{
    type:Array,default:[]
},
 status:{type:String,default:"Active"},

});
var userone =mongoose.model("user",userschema)
module.exports=userone  
