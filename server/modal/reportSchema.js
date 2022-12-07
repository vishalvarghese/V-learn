const mongoose = require('mongoose')
const postschema = require('./postschema')
const userone = require('./userschema')
const reportSchema = new mongoose.Schema({

   userId:{
    type:String,
    required:true,
    ref:userone
   },
   
   userName:{
    type:String
   },

   postId:{
    type:String,
    required:true,
    ref:postschema
   },

   reportMessage:{
    type:String,
    max:500
   },
         
    
},
{timestamps:true}

)

const reportModel = mongoose.model('reports',reportSchema)
module.exports=reportModel