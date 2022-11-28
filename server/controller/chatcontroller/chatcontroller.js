const ChatModel=require("../../modal/chatmodel")

const createChat =async(req,res)=>{
    try{
       const newChat =new ChatModel({
        members:[req.body.senderId,req.body.receiverId]
       })

       const result =await newChat.save()
       res.status(200).json(result)

      } catch(error){
    res.status(500).json(error)
   }
}

const userChats=async(req,res)=>{
    try{

   const chat =await ChatModel.find({
     members:{$in:[req.params.userId]}
   })
//    13.17
   res.status(200).json(chat)

    } catch(error){
res.status(500).json(error)
    }
}

 const findChat= async(req,res)=>{
    try{
    const chat =await ChatModel.findOne({
        members:{$all:[req.params.firstId,req.params.secondId]}    
    })
    res.status(200).json(chat)
    } catch(error){
        res.status(500).json(error)
    }
}
module.exports={findChat,userChats,createChat}