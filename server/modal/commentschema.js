const mongoose = require('mongoose')
const userone = require('./userschema')
const CommentSchema = new mongoose.Schema({

   userId:{
    type:String,
    required:true,
    ref:userone
   },

   postId:{
    type:String,
    required:true
   },

   comment:{
    type:String,
    max:500
   },

   likes:{
    type:Array,
    default:[],
   }
   
        
    
},
{timestamps:true}

)

const CommentModel = mongoose.model('Comments',CommentSchema)
module.exports=CommentModel