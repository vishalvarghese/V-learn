const { text } = require('express');
const mongoose= require('mongoose');
var userschema =mongoose.Schema({
 name:String,
 email:String,
 phonenumber:Number,
 password:String
});
var userone =mongoose.model("user",userschema)
module.exports=userone  