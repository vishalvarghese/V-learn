import React, { useRef } from 'react'
import { useEffect,useState } from 'react'
import { getUser } from '../../api/chatRequest'
import { getMessages } from '../../api/messageRequest'
import { format, render, cancel, register } from 'timeago.js';
import InputEmoji from 'react-input-emoji'
import {IoIosSend} from 'react-icons/io'
import { addMessage } from '../../api/messageRequest'
function CurrentChat({chat,currentUserId,setSendMessage,recieveMessage}) {
  const [newMessage,setNewMessage]= useState("")
  const[userData,setUserData]= useState({})
  // const[chats,setChats]=useState([])
  const[messages,setMessages]=useState([])

  const scroll = useRef()
  
  
  useEffect(()=>{
if(recieveMessage!==null && recieveMessage.chatId===chat._id){
setMessages([...messages,recieveMessage])}
},[recieveMessage])
  
  
  //fetching data for header
  useEffect(()=>{
    const userId =chat?.members?.find((id)=>id!=currentUserId)
    const getUserData = async()=>{
      try{   
         const {data}=await getUser(userId)
         setUserData(data[0])
        
       }catch(error){
        console.log(error);
       }
      }
if(chat!==null) getUserData();
  },[chat,currentUserId])

  //fetching data for messages
  useEffect(()=>{
    const fetchMessages =async ()=>{
      try{
        // console.log(chat._id +"hhhhhhhhhhhhhhhhhhhhhhhhhhh")
     const {data}= await getMessages(chat._id)//write function
     setMessages(data);
    //  console.log(data) //1.04
      }catch(error){
        console.log(error);
      }
    }
    if(chat !==null)fetchMessages();
  },[chat])

  const handleChange= (newMessage)=>{
    setNewMessage(newMessage)
  }
  const handleSend=async(e)=>{
    e.preventDefault();
    // if(newMessage.length>0)
    const message={
      senderId:currentUserId,
      text:newMessage,
      chatId:chat._id
    }
    //send mesage to database
    try{
        const {data}=await addMessage(message)

        setMessages([...messages,data])
        setNewMessage("")  
    }catch(error){
      console.log(error);
    }
    // console.log(currentUserId,"ccccccccccccccccccccccccc");
    const recieverId=chat.members.find((id)=> id!== currentUserId)
    // console.log(recieverId,"rrrrrrrrrrrrrrrrrrrrrr",message);
    

     setSendMessage({...message,recieverId})

    //  console.log("mesasakhkjjjjjjjjjjjjjj");

  }
  
  //Always scroll to the last message
  useEffect(()=>{
    scroll.current?.scrollIntoView({behavior:"smooth"})
  })

  return (  <div className='flex flex-col'>
    <div class="flex flex-row items-center justify-between px-3 py-2 bg-gray-50 bg-opacity-40 border-b-2 border-gray-100">
            <div class="">
              <h2 class="font-medium p-2">{userData.name}</h2>
            
            </div>
            </div>
      <div class="flex-auto flex flex-col justify-between overflow-y-auto messagelist">
            <div class="flex flex-col h-96">
               {/* frnds messsage start */}
               {
               messages.map((obj)=>{
                    return(  
           <>
                  {(obj.senderId===currentUserId)?
                  <div ref={scroll} class="flex flex-row justify-end">
              <div class="p-1">
                
                <div class="px-4 py-3 rounded-full my-2 bg-blue-500 text-white flex flex-row items-center">
                  <p class="text-sm flex">
                    {obj.text} 
                  </p>
                  <div class="ml-2 flex flex-row text-xs text-gray-300">
                    <span class="mr-1">
                      10:46
                    </span>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 19 14">
                      <path fill-rule="nonzero" d="M4.96833846,10.0490996 L11.5108251,2.571972 C11.7472185,2.30180819 12.1578642,2.27443181 12.428028,2.51082515 C12.6711754,2.72357915 12.717665,3.07747757 12.5522007,3.34307913 L12.4891749,3.428028 L5.48917485,11.428028 C5.2663359,11.6827011 4.89144111,11.7199091 4.62486888,11.5309823 L4.54038059,11.4596194 L1.54038059,8.45961941 C1.2865398,8.20577862 1.2865398,7.79422138 1.54038059,7.54038059 C1.7688373,7.31192388 2.12504434,7.28907821 2.37905111,7.47184358 L2.45961941,7.54038059 L4.96833846,10.0490996 L11.5108251,2.571972 L4.96833846,10.0490996 Z M9.96833846,10.0490996 L16.5108251,2.571972 C16.7472185,2.30180819 17.1578642,2.27443181 17.428028,2.51082515 C17.6711754,2.72357915 17.717665,3.07747757 17.5522007,3.34307913 L17.4891749,3.428028 L10.4891749,11.428028 C10.2663359,11.6827011 9.89144111,11.7199091 9.62486888,11.5309823 L9.54038059,11.4596194 L8.54038059,10.4596194 C8.2865398,10.2057786 8.2865398,9.79422138 8.54038059,9.54038059 C8.7688373,9.31192388 9.12504434,9.28907821 9.37905111,9.47184358 L9.45961941,9.54038059 L9.96833846,10.0490996 L16.5108251,2.571972 L9.96833846,10.0490996 Z"></path>
                    </svg>
                  </div>
                </div>
               
              </div>
            </div>:
            <div class="flex flex-row p-2 w-11/12">
                
            <div class="w-1/12 py-2 flex">
              <img src={userData.profilePicture} class="h-12 w-12 rounded-full self-end" alt=""/>
            </div>
            <div class="w-11/12 p-2">
              <div class="bg-gray-50 p-3 rounded-xl mb-2 relative">
                <h2 class="text-sm font-semibold mb-2">{obj.name}</h2>
                <p class="text-sm">{obj.text}</p>
                <span class="text-xs text-gray-500 absolute right-2 bottom-2">{format(obj.createdAt)}</span>
              </div>
              
            </div>
          </div>}            
        
          </>
          
           ) }  )}
            
          
             
            </div>

          
          </div>
          <div class="flex flex-row justify-between items-center p-3">
            
     
            <div class="flex-1 px-3">
            <InputEmoji 
              className="w-full border-2 border-gray-100 rounded-full px-4 py-1 outline-none text-gray-500 focus:outline-none focus:ring"
              value={newMessage}
              onChange = {handleChange}
              />
            </div>
            <div class="flex flex-row">
         
              
              <button onClick={handleSend} type="button" class="p-2 ml-2 text-gray-400 rounded-full hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring" aria-label="Record a voice">
                <IoIosSend className='w-8 h-8 fill-blue-600'/>
              </button>
            </div>
          </div>
          </div>    
  )
}

export default CurrentChat
