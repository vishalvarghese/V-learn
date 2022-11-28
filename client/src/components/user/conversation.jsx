import React from 'react'
import { useEffect,useState } from 'react'
import { getUser } from '../../api/chatRequest'
import picimg from '../../asset/picimg.png'
function Conversation({data,currentUserId,online}) {
 const [userData,setUserData]=useState([])
 const PF = process.env.REACT_APP_PUBLIC_FOLDER
 useEffect(()=>{
  const userId= data.members.find((id)=>id!==currentUserId)
  console.log(userId);
  const getUserData = async()=>{
    try{   
       const {data}=await getUser(userId)
       setUserData(data)
         console.log(data,"list of connections");
     }catch(error){
      console.log(error);
     }

  }
  getUserData();
 },[])
//47.09

  return (
 <>
    
{
userData.map((obj)=>{
  return(
    // <div><p>{obj.name}</p></div>
<li class="my-2 p-2 flex flex-row cursor-pointer rounded-lg hover:bg-gray-50 hover:bg-opacity-50">
    <div className=' flex'> <img src={PF+obj.profilePicture} class="hidden md:block h-12 w-12 rounded-full mr-4" alt=""/>
    
    </div>
    
    {/* <span className='rounded-xl w-2 h-2 bg-green-500'></span> */}
    <div class="w-full flex flex-col justify-center">
      <div class="flex flex-row justify-between items-center">
      
        <h2 class="text-xs font-bold">{obj.name}</h2>
        {/* <span className='rounded-xl w-2 h-2 bg-green-500'></span> */}
        <div class="text-xs flex flex-row">
          {/* <svg class="w-4 h-4 text-blue-600 fill-current mr-1" viewBox="0 0 19 14">
            <path fill-rule="nonzero" d="M4.96833846,10.0490996 L11.5108251,2.571972 C11.7472185,2.30180819 12.1578642,2.27443181 12.428028,2.51082515 C12.6711754,2.72357915 12.717665,3.07747757 12.5522007,3.34307913 L12.4891749,3.428028 L5.48917485,11.428028 C5.2663359,11.6827011 4.89144111,11.7199091 4.62486888,11.5309823 L4.54038059,11.4596194 L1.54038059,8.45961941 C1.2865398,8.20577862 1.2865398,7.79422138 1.54038059,7.54038059 C1.7688373,7.31192388 2.12504434,7.28907821 2.37905111,7.47184358 L2.45961941,7.54038059 L4.96833846,10.0490996 L11.5108251,2.571972 L4.96833846,10.0490996 Z M9.96833846,10.0490996 L16.5108251,2.571972 C16.7472185,2.30180819 17.1578642,2.27443181 17.428028,2.51082515 C17.6711754,2.72357915 17.717665,3.07747757 17.5522007,3.34307913 L17.4891749,3.428028 L10.4891749,11.428028 C10.2663359,11.6827011 9.89144111,11.7199091 9.62486888,11.5309823 L9.54038059,11.4596194 L8.54038059,10.4596194 C8.2865398,10.2057786 8.2865398,9.79422138 8.54038059,9.54038059 C8.7688373,9.31192388 9.12504434,9.28907821 9.37905111,9.47184358 L9.45961941,9.54038059 L9.96833846,10.0490996 L16.5108251,2.571972 L9.96833846,10.0490996 Z"></path>
          </svg> */}
          {/* <span class="text-gray-400">
            10:45
          </span> */}
        </div>
      </div>
      
      <div class="flex flex-row justify-between items-center">
        
        {online?  <p class="text-xs text-gray-500">Online</p>:<p class="text-xs text-gray-500">Offline</p>}
        {/* <span class="text-sm bg-blue-500 rounded-full w-5 h-5 text-center text-white font-bold">4</span> */}
      </div>
    {online?  <span className='rounded-xl w-2 h-2 bg-green-500'></span>:null}
    {/* 53.10  */}
    </div>
  </li>


  )
})}
      
</>   
  )
}

export default Conversation
