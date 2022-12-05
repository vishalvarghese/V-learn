const mongoose=require('mongoose')
const user=require('./userschema')
const postSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        ref:user
    },
    desc:{
        type:String,
        max:500
    },
    img:{
        type:String
    },
    video:{
        type:String
    },
    likes:{
        type:Array,
        default:[]
    },
    courseName:{
        type:String
    },
    courseId:{
      type:String
    },
    },{
        timestamps:true 
    })

module.exports=mongoose.model("post",postSchema)