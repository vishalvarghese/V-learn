import React from 'react'
import { useEffect,useState } from 'react'
import { getUser } from '../../api/chatRequest'
import { getMessages } from '../../api/messageRequest'
import { format, render, cancel, register } from 'timeago.js';
function CurrentChat({chat,currentUserId}) {
  
  const[userData,setUserData]= useState(null)
  
  const[messages,setMessages]=useState([])
  //fetching data for header

  useEffect(()=>{
    const userId =chat?.members?.find((id)=>id!=currentUserId)
    const getUserData = async()=>{
      try{   
         const {data}=await getUser(userId)
         setUserData(data)
         console.log(data);
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
     const {data}= await getMessages(chat._id)//write function
     setMessages(data);
     console.log(data) //1.04
      }catch(error){
        console.log(error);
      }
    }
    if(chat !==null)fetchMessages();
  },[chat])
  return (  
      <div class="flex-auto flex flex-col justify-between overflow-y-auto messagelist">
            <div class="flex flex-col h-96">
               {/* frnds messsage start */}
               {
               messages.map((obj)=>{
                    return(  
           <>
                  {(obj.senderId===currentUserId)?
                  <div class="flex flex-row justify-end">
              <div class="p-1">
                
                <div class="px-4 py-3 rounded-full my-2 bg-blue-500 text-white flex flex-row items-center">
                  <p class="text-sm flex">
                    {obj.text} current
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
              <img src="https://www.statnews.com/wp-content/uploads/2018/01/AdobeStock_107381486-645x645.jpeg" class="h-12 w-12 rounded-full self-end" alt=""/>
            </div>
            <div class="w-11/12 p-2">
              <div class="bg-gray-50 p-3 rounded-xl mb-2 relative">
                <h2 class="text-sm font-semibold mb-2">{obj.name}</h2>
                <p class="text-sm">{obj.text} noncurrent</p>
                <span class="text-xs text-gray-500 absolute right-2 bottom-2">{format(obj.createdAt)}</span>
              </div>
              
            </div>
          </div>}            
         
          </>
          
           ) }  )}
            
              
              {/* own message start*/}
              <div class="flex flex-row justify-end">
                <div class="p-1">
                  
                  <div class="px-4 py-3 rounded-full my-2 bg-blue-500 text-white flex flex-row items-center">
                    <p class="text-sm flex">
                      There are many variations of passages of Lorem Ipsum 
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
              </div>
               {/*own message end  */}
                  {/* frnds messsage start */}
              <div class="flex flex-row p-2 w-11/12">
                
                <div class="w-1/12 py-2 flex">
                  <img src="https://www.statnews.com/wp-content/uploads/2018/01/AdobeStock_107381486-645x645.jpeg" class="h-12 w-12 rounded-full self-end" alt=""/>
                </div>
                <div class="w-11/12 p-2">
                  <div class="bg-gray-50 p-3 rounded-xl mb-2 relative">
                    <h2 class="text-sm font-semibold mb-2">Alexa Androz</h2>
                    <p class="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span class="text-xs text-gray-500 absolute right-2 bottom-2">09:24</span>
                  </div>
                  
                </div>
              </div>
              {/* friends message end */}
                 {/* frnds messsage start */}
                 <div class="flex flex-row p-2 w-11/12">
                
                <div class="w-1/12 py-2 flex">
                  <img src="https://www.statnews.com/wp-content/uploads/2018/01/AdobeStock_107381486-645x645.jpeg" class="h-12 w-12 rounded-full self-end" alt=""/>
                </div>
                <div class="w-11/12 p-2">
                  <div class="bg-gray-50 p-3 rounded-xl mb-2 relative">
                    <h2 class="text-sm font-semibold mb-2">Alexa Androz</h2>
                    <p class="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span class="text-xs text-gray-500 absolute right-2 bottom-2">09:24</span>
                  </div>
                  
                </div>
              </div>
              {/* friends message end */}
                  {/* own message start*/}
                  <div class="flex flex-row justify-end">
                <div class="p-1">
                  
                  <div class="px-4 py-3 rounded-full my-2 bg-blue-500 text-white flex flex-row items-center">
                    <p class="text-sm flex">
                      There are many variations of passages of Lorem Ipsum 
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
              </div>
               {/*own message end  */}
            </div>
          </div>
    
  )
}

export default CurrentChat
