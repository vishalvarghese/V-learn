const io =require('socket.io')(8800,{
    path:'/socket/socket.io',
    cors:{
        orgin:"http://catchlatest.ml"
    }
})

let activeUsers =[]

io.on("connection",(socket)=>{
    //add new User
    socket.on('new-user-add',(newUserId)=>{
   // if user is not added previously
   if(!activeUsers.some((user)=>user.userId === newUserId))
   {
    activeUsers.push({
        userId:newUserId,
        socketId:socket.id
    })
   }
   console.log("connected Users",activeUsers)
   io.emit('get-users',activeUsers)
    })

    //send Message
    socket.on("send-message",(data)=>{
        const {recieverId}=data;
        console.log(data);
        const user =activeUsers.find(user=> user.userId === recieverId)
        console.log("Sending from socket to :", recieverId);
        console.log("Data",data)
        if(user){
            io.to(user.socketId).emit("recieve-message",data)
        }

    })

    socket.on("disconnect",()=>{
        activeUsers =activeUsers.filter((user)=>user.socketId !==socket.id)
        console.log("User Disconnected",activeUsers);
        io.emit('get-users',activeUsers)
    })

})