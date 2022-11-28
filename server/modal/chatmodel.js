const mongoose= require('mongoose');

const Chatschema =mongoose.Schema(
    {
    members:{
        type:Array,
    },
},
    {
        timestamps:true,
    }
)
const ChatModel =mongoose.model("chat",Chatschema)
module.exports=ChatModel;