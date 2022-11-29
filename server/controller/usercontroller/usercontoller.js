const app = require("../../app");
const User=require("../../modal/userschema")
const bcrypt =require('bcrypt')
const jwt = require("jsonwebtoken")
const Post=require("../../modal/postschema")
const CommentSchema=require('../../modal/commentschema');
const CommentModel = require("../../modal/commentschema");
const postSignup = async (req, res) => {
    try {
        // console.log({ ...req.body });
        let { name, email,phonenumber, password } = req.body
        password = await bcrypt.hash(password, 10)

        const user = await new User({
            name,
            email,
            phonenumber,
            password
        })
        await user.save()
        res.status(200).json({ res: user })
    } catch (error) {
        console.log(error.message);
    }

}
//login and jwt token generated
const login = async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
        return res.json({ error: "User not found" })
    }
    else if(user.status=='Blocked')
    {
        return res.json({ error: "Access denied temporarily" })
    }
    else {
        const auth = await bcrypt.compare(password, user.password);
        // console.log(auth, "klklk");
        if (auth) {
            console.log("entered");
            //token generation
            const usertoken = jwt.sign({ email: user.email }, process.env.JWT_SECRET,{ expiresIn: "7d" })
            // console.log(token);
            if (res.status(201)) {
                console.log('hai');
                return res.json({ state: "ok", userdata: usertoken,user:user })
            } else {
                console.log('hello');
                return res.json({ error: "error" });
            }
        }
        else {
            return res.json({ status: "error", error: "Invalid Password" })
        }
    }
}

const addpost= async(req,res)=>{
    // console.log(req.body);
    const newPost=new Post(req.body)
    try {
      const savedPost=await newPost.save()
    //   await Users.updateOne({$push:{posts:savedPost._id}})
      res.json(savedPost)
      
    } catch (error) {
      res.json(error)
    }
}
const getpost=async(req,res)=>{
   try{
    const allpost=await Post.find().populate('userId').sort({_id:-1});
    // console.log(allpost);   
    res.json(allpost)
   }catch(error)
   {
    console.log(error);
   }
}

const newComment=async(req,res)=>{
   try{
    const newComment=new CommentSchema(req.body)
    const savedComment=await newComment.save()
    res.json(savedComment)   
}catch(error)
   {
    console.log(error);
   }
    
}
const getComment=async(req,res)=>{
    console.log(req.params.id);
    try{
     const allComment=await CommentModel.find({ postId: req.params.id}).populate('userId').sort({_id:1});
      console.log(allComment);   
     res.json(allComment)
    }catch(error)
    {
     console.log(error);
    }
 }
 
 const likePost=async(req,res)=>{
    console.log(req.body.userId);
    console.log(req.params.id);
    try{
        console.log('like');
        const post=await Post.findById(req.params.id)
        console.log(post);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}})
            res.json("The post has been liked")

        }else{
            await post.updateOne({$pull:{likes:req.body.userId}}) 
            res.json("The post has been unliked")
        }
    }catch(error){
        res.json(error)
    }
   }

   const visituser=async(req,res)=>{
    console.log(req.params.id);
    try{
      const otherUser= await User.find({_id:req.params.id})
      console.log(otherUser);
      res.json(otherUser)
       }catch(error){
        console.log(error);
    }
   }
   
   const getUserData= async(req,res)=>{
    console.log(req.params.id);
    try{
    const userDetail=await User.find({_id:req.params.id})
    console.log(userDetail);
    res.json(userDetail)
    } catch(error){
       console.log(error); 
    }
   }

   const connectionhelper=async(req,res)=>{
    try{
        const currentUserId=req.params.id //userId
     const connectedList= await User.findById(req.params.id).populate("connections")
     console.log(connectedList);
    
     const suggestionList=""
        const data = await User.find({_id:{$nin:[currentUserId]}});
    
        // console.log(data);

        res.json({data,connectedList})
    }catch(error){
        console.log(error.messsage);
    }
   }

   const sendRequest= async (req,res)=>{
    try{ const sender=req.params.senderId;
    const reciever=req.params.recieverId;
     console.log('send request recieved from :',req.params.senderId,'reciever',req.params.recieverId);
    await User.updateOne({_id:reciever}, { $addToSet: { connection_Request: sender } } );
        
        }catch(error)
        {
            console.log(err);
        }
    }

    const connectionRequestList= async(req,res)=>{
        try{
            const user= await User.findById(req.params.id)
            // console.log(user);
           if(user){
           const requestList =await Promise.all(user?.connection_Request?.map((id)=>{
            return User.findOne({_id:id},{name:1,profilePicture:1})
           }))
        //    console.log(requestList,"hjhdjjjjjjjjj");
        res.status(200).json(requestList)
           }
           else{
            console.log('no user');
            res.status(402).json('please try again')
           } 
      
        }catch(error)
        {
            console.log(error)
            res.status(500).json(error)
        }
    }

    const acceptConnection= (req,res)=>{
        try{
         console.log(req.params.senderId,"accepted your request",req.params.accepterId);
        
         User.updateOne({_id:req.params.accepterId}, 
            {$addToSet: { connections: req.params.senderId}}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated Docs : ", docs);
            }
        });

        User.updateOne({_id:req.params.senderId}, 
            {$addToSet: { connections:req.params.accepterId }}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated Docs : ", docs);
            }
        });

        User.updateOne({_id:req.params.accepterId}, 
            {$pull: { connection_Request:req.params.senderId }}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated Docs : ", docs);
            }
        });
        res.status(200).json('success')
        }catch(error){
            console.log(error);
        }
    }

module.exports={acceptConnection,connectionRequestList,sendRequest,getUserData,postSignup,login,addpost,getpost,newComment,getComment,likePost,visituser,connectionhelper}