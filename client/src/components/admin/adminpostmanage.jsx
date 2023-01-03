import React,{useEffect,useState} from 'react'
import Sidebar from './sidebar'
import Axios from 'axios'
import {confirmAlert} from 'react-confirm-alert'
import { useNavigate } from "react-router-dom";
import axios from "axios"
function Adminpostmanage() {
  const axiosInstance=axios.create({
    baseURL:process.env.REACT_APP_API_URL
  })

  const navigate = useNavigate()
  const [showModal,setShowModal]=useState(false);
  const [postList,setPostList]=useState([])
    const [change,setchange]=useState(true)
    useEffect(()=>{
      axiosInstance.get('/adminpostlist',{
            // headers:{"x-access-token":localStorage.getItem('admintoken')}
        }).then((response)=>{
         console.log(response.data); 
        setPostList(response.data)
        }).catch((err)=>{
          console.log(err);
        })
      },[change])

      const submitHandler=async(e)=>{
        console.log('post managed');
      }

      const [modalData,setModalData]=useState({
        id:'',
        desc:'',
        img:'',
        video:'',
        status:''
      })
      const modalshow = (id) => {
        postList.filter((obj) => {
            if (obj._id === id) {
                setModalData({
                  id:obj._id,  
                  desc: obj.desc,
                    img:obj.img,
                    video:obj.video,
                    status:obj.status
                })
                setShowModal(true)
            }
        })
      }

      const blockPost=(id)=>{
        confirmAlert({
          title:"Confirm your Action!",
          message:"Are you sure about blocking the post?",
          buttons:[
              {
                  label:'yes',
                  onClick:()=>{
                    
                      axiosInstance.post('/blockPost/'+id)
                      .then((res)=>{
                          setchange(!change)
                        navigate("/adminpostmanage")
                      })   
                       
                  }
              },
              {
                  label:"no"
              }
          ]
      })

      }

      function unBlockPost(id) {
        confirmAlert({
            title:"Confirm your Action!",
            message:"Are you sure about Unblocking the post?",
            buttons:[
                {
                    label:'yes',
                    onClick:()=>{
                       
                        axiosInstance.post('/unblockPost/'+id)
                        .then((res)=>{
                            setchange(!change)
                          navigate("/adminpostmanage")
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
{/* 
  <div className='flex justify-center w-full items-center'>
    <h2 className='text-blue-900 font-bold text-4xl'>post management</h2>
  </div> */}
  <div class="table w-full p-2">
        <table class="w-full border">
            <thead>
                <tr class="bg-gray-50 border-b">
                   
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            No.
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                           Post
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                          User Name
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                          Post Type
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
                postList.map((obj,index)=>{
                    return(
                <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                    
                    <td class="p-2 border-r">{index+1}</td>
                    <td class="p-2 border-r">{obj.desc}</td>
                    <td class="p-2 border-r">{obj.userId.name}</td>
                   
                    <td class="p-2 border-r">{obj.courseName}</td>
                    <td class="p-2 border-r">{obj.status}</td>
                      <td class="p-2 border-r"><button onClick={()=>modalshow(obj._id)} className='p-2 bg-blue-500 rounded-xl text-white'>View</button> </td>
                  
                </tr>
              )})}
            </tbody>
        </table>
    </div>
       
    {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                {/* <h3 className="text-3xl font-semibold">{modalData.name}</h3> */}
                                <h3 className="text-3xl font-semibold">Post Details</h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                <div class="">
  <div class="mx-auto max-w-screen-sm px-4">
    {/* <p class="mt-6 text-xl font-bold sm:mb-6 sm:text-3xl">Write your comment</p> */}
    {/* <form onSubmit={(e)=>{submitHandler(e);setShowModal(false)}} action=""> */}
    <div class="-ml-20 flex p-4 text-left text-gray-700">
      <img class="mr-5 h-12 w-12 rounded-full" src="https://ui-avatars.com/api/?name=John+Doe" alt="" />
      <div class="w-full space-y-3 text-gray-700">
       <p>{modalData.desc}</p>
       {modalData.img &&<img className='w-full h-60' src={modalData.img} alt="" />}
       {modalData.video&& <video className='w-full h-60' controls src={modalData.video}></video>}
       <label htmlFor="imageFile">post details</label>
          {/* <input accept="image/*" onChange={(e) => { setImageFile(e.target.files[0]) }} name='imageFile' type="file" placeholder="name" class="h-12 w-full max-w-full rounded-md  bg-white px-5 text-sm outline-none" /> */}
        
        <div class="">
          {/* <input onChange={(e) => { setDesignation(e.target.value) }} type="text" placeholder="Profession/Desigination" class="h-12 w-full max-w-full rounded-md border bg-white px-5 text-sm outline-none focus:ring" /> */}
        </div>
       
        <div class="">
        {/* onChange={(e) => { setDesc(e.target.value) }} */}
          {/* <textarea  name="comment" id="" placeholder="Write About your self" cols="30" rows="6" class="h-40 w-full min-w-full max-w-full overflow-auto whitespace-pre-wrap rounded-md border bg-white p-5 text-sm font-normal normal-case text-gray-600 opacity-100 outline-none focus:text-gray-600 focus:opacity-100 focus:ring"></textarea> */}
        </div>
        <div class="float-right">
         {(modalData.status=='active')?
                  <input onClick={()=>{blockPost(modalData.id);setShowModal(false)}} value="block"  type="submit"  class="relative inline-flex h-10 w-auto max-w-full cursor-pointer items-center justify-center overflow-hidden whitespace-pre rounded-md bg-blue-700 px-4 text-center text-sm font-medium normal-case text-white opacity-100 outline-none focus:ring" />
        :
        <input onClick={()=>{unBlockPost(modalData.id);setShowModal(false)}} value="Unblock"  type="submit"  class="relative inline-flex h-10 w-auto max-w-full cursor-pointer items-center justify-center overflow-hidden whitespace-pre rounded-md bg-blue-700 px-4 text-center text-sm font-medium normal-case text-white opacity-100 outline-none focus:ring" />

         }
        </div>
      </div>
    </div>
    {/* </form> */}
  </div>
</div>
{/* body */}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}   
  </div>
  )
}

export default Adminpostmanage
