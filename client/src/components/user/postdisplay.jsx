import React, { useState, useEffect } from 'react'
import { format, render, cancel, register } from 'timeago.js';
import profilepic from '../../asset/profilepic.jpg'
import { GrFavorite } from "react-icons/gr";
import { TiHeartFullOutline } from "react-icons/ti";
import { useSelector } from 'react-redux'
import axios from 'axios'


function Postdisplay({ obj }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const user = useSelector((state) => state.user)
  const [commentShow, setCommentShow] = useState(false)
  const [commentDesc, setCommentDesc] = useState('')
  const [commentData, setCommentdata] = useState([])

  const [isLiked, setIsLiked] = useState(false);
  const [like, setLike] = useState(obj.likes.length);
  const [postDrop,setPostdrop]=useState(false)

  const [noOfComments,setNoOfComments]=useState('')
 
  const[updateDesc,setUpdateDesc]=useState('')
  const [showModalPostupdation,setShowModalPostupdation]=useState(false);
  
  const [showModalReport,setShowModalReport]=useState(false)
   const [reportMessage,setReportMessage]=useState('')
  useEffect(() => {
    setIsLiked(obj.likes.includes(user._id));
  
  },[]);

  const likeHandler = () => {
    try {
      axios.put('http://localhost:5000/post/like/'+obj._id,{ userId:user._id });
    } catch (err) {
      console.log(err);
    }
     setLike(isLiked ? like - 1 : like + 1);
     setIsLiked(!isLiked);
  };
 


  const submitHandler = async (e) => {
    e.preventDefault()
    const newComment = {
      userId: user._id,
      postId: obj._id,
      comment: commentDesc,
    }

    try {
      await axios.post('http://localhost:5000/newComment', newComment)
      // window.location.reload()
      setCommentDesc('')
    } catch (err) {
      console.log(err);
    }

  }
  useEffect(() => {
    // pass post id
    axios.get('http://localhost:5000/getComment/' + obj._id).then((response) => {
      // console.log(response.data, 'hdelooooooooooo');
      setCommentdata(response.data)
      setNoOfComments(response.data.length)

     

    }).catch((err) => {
      console.log(err);
    })
  }, [commentDesc])

  const deletePost=(id)=>{
    // console.log(id,"dddddddddddddd")
 axios.post('http://localhost:5000/deletePost/'+id).then((response)=>{
  console.log(response)
 }).catch((err)=>{
  console.log(err)
})
  }

const submitEditHandler = async(e)=>{
  e.preventDefault()
  console.log("edit post form submited")
  try{
const postUpdateData={
  postDesc:updateDesc,
  postId:obj._id
}

axios.post('http://localhost:5000/EditPost',postUpdateData).then((response)=>{
  console.log(response)
  window.location.reload()
 }).catch((err)=>{
  console.log(err)
})

  }catch(error){
    console.log(error);
  }
}

const submitReport= async(e)=>{
  e.preventDefault()
  // console.log(reportMessage)
 const reportData={
  reportMessage:reportMessage,
  postId:obj._id,
  userName:user.name,
  userId:user._id
 }
try{
 axios.post('http://localhost:5000/Reportsubmit',reportData).then((response)=>{
  console.log(response)
  // window.location.reload()
 }).catch((err)=>{
  console.log(err)
})
}catch(error){
  console.log(error)
}

}

  return (
    <div>
      <div className='flex justify-between'>
      <p class="  text-sm font-normal text-gray-500 mt-7"> <img className='w-10 h-10 rounded-2xl m-2' src={obj.userId.profilePicture} alt="" />
        {obj.userId.name}</p>
        {/* //profile drop start */}
        <div class="flex justify-center">
          <div class="relative inline-block mb-20">

            <button onClick={(e) => { setPostdrop(!postDrop ) }} class="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
              {/* <span class="mx-1">. . . </span> */}
              <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
              </svg>
            </button>


            {postDrop && <div class="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
              {/* <a href="/profile" class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                <img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src={user.profilePicture} alt="jane avatar" />
                <div class="mx-1">
                  <h1 class="text-sm font-semibold text-gray-700 dark:text-gray-200">{user.name}</h1>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                </div>
              </a> */}

              <hr class="border-gray-200 dark:border-gray-700 " />

            

             {
             (obj.userId._id==user._id)?
              <a  onClick={(e)=>{setShowModalPostupdation(true)}}  class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Edit
              </a>:null
              }

              
{
             (obj.userId._id==user._id)?
              <a onClick={()=>{deletePost(obj._id)}} href="" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Delete
              </a>:null
              }
              
               {
             (obj.userId._id!=user._id)?
              <a onClick={()=>{setShowModalReport(true)}} class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Report
              </a>:null
              }
               

            
           
           
              {/* 

              <hr class="border-gray-200 dark:border-gray-700 " />

              <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Help
              </a> */}
             
            </div>
            }
          </div>
        </div>
        {/* //profile drop end */}
        </div>
      <p class=" text-sm font-normal text-gray-500 mb-3">{format(obj.createdAt)}</p>

      <p class="bg-slate-100 mb-4 text-base font-normal text-gray-600">
        {obj.desc}
      </p>

      {/* video */}
      {obj.video && <video className='w-full h-96' controls src={obj.video} type="video/mp4"></video>}
      {/* image */}
      {obj.img && <img className='.max-w-full .h-auto' src={obj.img} alt="" />}
      {/* youtubelink */}
      <div>
        {/* <iframe className='w-full h-96' src="https://www.youtube.com/embed/JKEJizRiBgQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      </div>
      {/* <input placeholder="Co  ?" id="comment" className='bg-blue-50 mt-1 shareInput'/> */}
      <div className='flex'>
        <p className='text-black mx-2'><button onClick={(e) => {likeHandler()}} className='w-auto p-1 rounded-2xl'>{isLiked ? <TiHeartFullOutline style={{ color:"red"}}/>: <GrFavorite style={{ backgroundColor: "" }}/> }</button></p>
        <p>({like})</p>
        <p className='text-blue-900 mx-2 '><u className='cursor-pointer' onClick={(e) => { setCommentShow(!commentShow) }}>comments</u></p>
        <p>({noOfComments})</p>
      </div>
      {/* comment box start */}
      {/* <div class="mx-auto my-10 max-w-xl rounded-xl border px-4 py-6 text-gray-700">
              <div class="rounded-lg bg-gray-100 p-2">
                <p class="mb-2 text-gray-500"> You <span className='text-xs'> Sep 4</span></p>
                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem eum nostrum.</p>
              </div>
              <div class="rounded-lg bg-gray-100 p-2">
                <p class="flex  text-gray-500"> <img className='w-10 h-10 rounded-2xl ' src={profilepic} alt="" />
                  <span className='mt-3'> vishal varghese</span><span className='text-xs'> Sep 4</span></p>
                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem eum nostrum.</p>
              </div>
            </div> */}

      {commentShow ?
        <div>
          {
            commentData.map((obj) => {
              return (
                <div className="bg-slate-50 flex gap-3 my-2 items-center">
                  <div>
                    {/* <img className="w-8 rounded-full" src={PF+obj.userId.profilePicture} alt="profile" /> */}
                    <img className="w-8 rounded-full" src={obj.userId.profilePicture} alt="profile" />
                  </div>
                  <div>
                    <div>
                      <span className="font-medium text-sm mr-2">{obj.userId.name}</span>
                      <span className="">{obj.comment}</span>
                    </div>
                    <p className="text-slate-500 text-xs ">{format(obj.createdAt)}</p>
                  </div>
                </div>
              )
            })}
          <form onSubmit={submitHandler} action="" class="w-full p-4 bg-slate-100">
            <label class="block mb-2">
              <textarea value={commentDesc} onChange={(e) => { setCommentDesc(e.target.value) }} class="block w-full mt-1 rounded" rows="3" placeholder='Post a Comment'></textarea>
            </label>
            <button type='submit' class="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded" >Comment</button>
          </form>

        </div>
        : null}
      {/* comment box start */}



      {showModalPostupdation ? (
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
                                <h3 className="text-3xl font-semibold">Update post </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={(e) =>setShowModalPostupdation(false)}
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
    <form onSubmit={(event)=>{submitEditHandler(event);setShowModalPostupdation(false);setPostdrop(false)}} action="">
    <div class="-ml-20 flex p-4 text-left text-gray-700">
      <img class="mr-5 h-12 w-12 rounded-full" src="https://ui-avatars.com/api/?name=John+Doe" alt="" />
      <div class="w-full space-y-3 text-gray-700">
       
       {/* <label htmlFor="imageFile">Upload New Profile Picture</label> */}
          {/* <input onChange={(e) => { setImageFile(e.target.files[0]) }} name='imageFile' type="file" placeholder="name" class="h-12 w-full max-w-full rounded-md  bg-white px-5 text-sm outline-none" /> */}
        
       
        <div class="">
          <textarea onChange={(e) => { setUpdateDesc(e.target.value) }} name="comment" id="" placeholder="Enter updated text for Post" cols="30" rows="6" class="h-40 w-full min-w-full max-w-full overflow-auto whitespace-pre-wrap rounded-md border bg-white p-5 text-sm font-normal normal-case text-gray-600 opacity-100 outline-none focus:text-gray-600 focus:opacity-100 focus:ring"></textarea>
        </div>
        <div class="float-right">
          <button  type="submit"  class="relative inline-flex h-10 w-auto max-w-full cursor-pointer items-center justify-center overflow-hidden whitespace-pre rounded-md bg-blue-700 px-4 text-center text-sm font-medium normal-case text-white opacity-100 outline-none focus:ring" />
        </div>
      </div>
    </div>
    </form>
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
 

 {showModalReport ? (
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
                                <h3 className="text-3xl font-semibold">Report</h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={(e) =>setShowModalReport(false)}
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
    <form onSubmit={(event)=>{submitReport(event);setShowModalReport(false);setPostdrop(false)}} action="">
    <div class="-ml-20 flex p-4 text-left text-gray-700">
      <img class="mr-5 h-12 w-12 rounded-full" src="https://ui-avatars.com/api/?name=John+Doe" alt="" />
      <div class="w-full space-y-3 text-gray-700">
       
       {/* <label htmlFor="imageFile">Upload New Profile Picture</label> */}
          {/* <input onChange={(e) => { setImageFile(e.target.files[0]) }} name='imageFile' type="file" placeholder="name" class="h-12 w-full max-w-full rounded-md  bg-white px-5 text-sm outline-none" /> */}
        
       
        {/* <div class="">
          <textarea onChange={(e) => { setReportMessage(e.target.value) }} name="comment" id="" placeholder="Enter updated text for Post" cols="30" rows="6" class="h-40 w-full min-w-full max-w-full overflow-auto whitespace-pre-wrap rounded-md border bg-white p-5 text-sm font-normal normal-case text-gray-600 opacity-100 outline-none focus:text-gray-600 focus:opacity-100 focus:ring"></textarea>
        </div> */}
       
    <div className=' w-64 min-w-full max-w-full'></div>
        <p>Select:</p>
    <div>
        <input onChange={(e) => { setReportMessage(e.target.value)}} type="radio" name="report" value="Inappropriate content" id="xs"/>
        <label for="xs"> Inappropriate content</label>
    </div>
    <div>
        <input onChange={(e) => { setReportMessage(e.target.value)}} type="radio" name="report" value="Hate speech" id="s"/>
        <label for="s"> Hate speech</label>
    </div>
    <div>
        <input onChange={(e) => { setReportMessage(e.target.value)}} type="radio" name="report" value="Pretending to be someone else" id="s"/>
        <label for="s"> Pretending to be someone else</label>
    </div>
    <div>
        <input onChange={(e) => { setReportMessage(e.target.value)}} type="radio" name="report" value="Harassment" id="s"/>
        <label for="s"> Harassment</label>
    </div>


        <div class="float-right">
          <button  type="submit"  class="relative inline-flex h-10 w-auto max-w-full cursor-pointer items-center justify-center overflow-hidden whitespace-pre rounded-md bg-blue-700 px-4 text-center text-sm font-medium normal-case text-white opacity-100 outline-none focus:ring" />
        </div>
      </div>
    </div>
    </form>
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

export default Postdisplay
