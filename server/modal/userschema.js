const { text } = require('express');
const mongoose= require('mongoose');
var userschema =mongoose.Schema({
 name:String,
 email:String,
 profilePicture:{type:String,default:"https://drive.google.com/uc?export=view&id=13SafIroAozxqAesjbWVtcBZAzRDAZFts"},
 coverPicture:String,
 phonenumber:Number,
 password:String,
 connection_Request:{
    type:Array,
    default:[]
},
connections:[{
    type:mongoose.Schema.Types.ObjectId,
    require:true,
    ref:"user"
}],
 status:{type:String,default:"Active"},
 designation:String,
 desc:String

});
var userone =mongoose.model("user",userschema)
module.exports=userone  
