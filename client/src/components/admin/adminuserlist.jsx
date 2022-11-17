import React,{useEffect,useState} from 'react'
import Sidebar from './sidebar'
import Axios from 'axios'
import {confirmAlert} from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import {Link,useNavigate} from "react-router-dom"

function Adminuserlist() {
    const navigate =useNavigate()
useEffect(()=>{
    const token=localStorage.getItem("admintoken")
    if(!token)
    {
        navigate('/admin')
    }
})


    
    const [userlist,setuserlist]=useState([])
    const [change,setchange]=useState(true)
    useEffect(()=>{
        Axios.get('http://localhost:5000/adminuserlist',{
            headers:{"x-access-token":localStorage.getItem('admintoken')}
        }).then((response)=>{
        //  console.log(response.data); 
        setuserlist(response.data)
        }).catch((err)=>{
          console.log(err);
        })
      },[change])

      function blockUser(id) {
        confirmAlert({
            title:"Confirm your Action!",
            message:"Are you sure about blocking the user?",
            buttons:[
                {
                    label:'yes',
                    onClick:()=>{
                      
                        Axios.post('http://localhost:5000/blockuser/'+id)
                        .then((res)=>{
                            setchange(!change)
                          navigate("/adminuserlist")
                        })   
                         
                    }
                },
                {
                    label:"no"
                }
            ]
        })
      }
      function unBlockuser(id) {
        confirmAlert({
            title:"Confirm your Action!",
            message:"Are you sure about Unblocking the user?",
            buttons:[
                {
                    label:'yes',
                    onClick:()=>{
                       
                        Axios.post('http://localhost:5000/unblockuser/'+id)
                        .then((res)=>{
                            setchange(!change)
                          navigate("/adminuserlist")
                        })

                    }
                },
                {
                    label:"no"
                }
            ]
        })
      }
  return (
    <div
    id="view"
    class="h-full w-screen flex flex-row "
    x-data="{ sidenav: true }" >
    <button
      // @click="sidenav = true"
      class="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
    >
      <svg
        class="w-5 h-5 fill-current"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  {/* side bar */}
  <div>{<Sidebar/>}</div>

  <div className='flex justify-start w-full items-start'>
  {/* <!-- start --> */}

<div class="table w-full p-2">
        <table class="w-full border">
            <thead>
                <tr class="bg-gray-50 border-b">
                   
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            ID
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Name
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Email
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Status
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Contact no.
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Action
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                userlist.map((obj,index)=>{
                    return(
                <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                    
                    <td class="p-2 border-r">{index+1}</td>
                    <td class="p-2 border-r">{obj.name}</td>
                    <td class="p-2 border-r">{obj.email}</td>
                    <td class="p-2 border-r">{obj.status}</td>
                    <td class="p-2 border-r">{obj.phonenumber}</td>
                    
                    <td>
                      {obj.status == "Active" ?  
                        <button onClick={(e)=>{blockUser(obj._id)}} className='bg-red-600 text-white rounded-2xl py-2 px-4'>Block</button>:
                        <button onClick={(e)=>{unBlockuser(obj._id)}} className='bg-green-300 text-black rounded-2xl p-2'>Unblock</button>
                      } 
                    </td>
                </tr>
              )})}
            </tbody>
        </table>
    </div>
  
  {/* end */}
  </div>
      
        

  </div>
  )
}

export default Adminuserlist
