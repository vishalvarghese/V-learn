const mongoose=require('mongoose')
const user=require('./userschema')
const post=require('./postschema')
const courseSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        ref:user
    },
    creatorName:{
       type:String,
    },
    creatorPic:{
      type:String,
    },
    courseName:{
        type:String,
    },
    desc:{
        type:String,
        max:500
    },
    img:{
        type:String
    },
    chapters:[{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:post
    }],
    },{
        timestamps:true 
    })

module.exports=mongoose.model("course",courseSchema)