import React, { useState,useEffect } from 'react'
import Vlearnlogo from '../../asset/Vlearn-logos_transparent.png'
import headerlogo from '../../asset/header logo.png'
import feedimg from '../../asset/feedimg.png'
import connectionimg from '../../asset/connection.png'
import chatimg from '../../asset/chat.png'
import picimg from '../../asset/picimg.png'
import './feed.css'
import videoimg from '../../asset/videoimg.png'
import sendicon from '../../asset/sendicon.png'
import profilepic from '../../asset/profilepic.jpg'
import postimage from '../../asset/postimage.jpg'
import openmike from '../../asset/openmikecnn.mp4'
import pdf from '../../asset/pdf.pdf'
import { useSelector } from 'react-redux'
import axios from 'axios'
import previewIcon from '../../asset/previewIcon.jpg'


import Postdisplay from './postdisplay'
function Feed() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [imageFile, setImageFile] = useState('')
  const [videoFile,setVideoFile]=useState('')
  const [desc, setDesc] = useState('')
  const user = useSelector((state) => state.user)
  const [post,setPost]=useState([])
  const [previewImage,setPerviewImage]=useState('')
  const [previewVideo,setPreviewVideo]=useState('')
  const [previewUrl,setPreviewUrl] =useState('')
  //console.log(user);
  const [profiledrop,setprofiledrop]=useState(false)
  const submitHandler = async (e) => {
    e.preventDefault()
    const newPost = {
      userId: user._id,
      desc: desc,
    }
    if (imageFile) {
      const data = new FormData();
      const fileName = imageFile.name
      data.append("file", imageFile)
      data.append("name", fileName)
      newPost.img = fileName
      try {
        await axios.post('http://localhost:5000/post/upload', data)


      } catch (error) {
        console.log(error);
      }
    }
    if (videoFile) {
      const data = new FormData();
      const fileName = videoFile.name
      data.append("file",videoFile)
      data.append("name", fileName)
      newPost.video = fileName
      try {
        await axios.post('http://localhost:5000/post/upload', data)


      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.post('http://localhost:5000/post', newPost)
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(()=>{
    axios.get('http://localhost:5000/feedpost',{
    }).then((response)=>{
      // console.log(response.data); 
    setPost(response.data)

    }).catch((err)=>{
      console.log(err);
    })
  },[])
 console.log(post);
 
 useEffect(() => {
  if (previewImage) {
    setPreviewUrl(URL.createObjectURL(previewImage));
    setPreviewVideo('');
  }
}, [previewImage]);
useEffect(() => {
  if (previewVideo) {
    setPreviewUrl(URL.createObjectURL(previewVideo));
    setPerviewImage('');
  }
}, [previewVideo]);
  return (
    <div>
    <>
     {/* <Navbar transparent /> */}
     <main className="profile-page">
       <section className="relative block" style={{ height: "500px" }}>
         <div
           className="absolute top-0 w-full h-full bg-center bg-cover"
           style={{
             backgroundImage:
               "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
           }}
         >
          <div className='flex justify-between'>
          <div className='p-4'>
          <a
              href="/"
              aria-label="Company"
              title="Company"
              class="inline-flex items-center"
            >
              <img className='w-20 h-20' src={headerlogo} alt="" />
              <span class="ml-2 text-xl font-bold tracking-wide text-blue-900">
                V-learn
              </span>
            </a>
          </div>
                 {/* navbar div here */}
                 <div className='flex justify-center p-8 text-white text-2xl'> 
             <div className='flex justify-between'>
              <ul class="bg-white p-2 rounded-3xl flex  items-center hidden space-x-8 lg:flex">
                <li>
                  <a

                    href="/feed"
                    aria-label="Our product"
                    title="Our product"
                    class="font-medium tracking-wide text-blue-900 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    <div className='text-xs'>
                      <div className='flex justify-center'><img className='w-10 h-10' src={feedimg} alt="" /></div>
                      <div className='flex justify-center'> FEED</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/connections"
                    aria-label="Our product"
                    title="Our product"
                    class="font-medium tracking-wide text-blue-900 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    <div className='flex flex-col text-xs justify-center'>
                      <div className='flex justify-center'><img className='w-10 h-10' src={connectionimg} alt="" /></div>
                      <div><p className=''> CONNECTIONS</p></div>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href="/chatbox"
                    aria-label="About us"
                    title="About us"
                    class="font-medium tracking-wide text-blue-900 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    <div className='text-xs  justify-between w-full items-center'>
                      <div className='flex justify-center'><img className='w-10 h-10' src={chatimg} alt="" /></div>
                      <div className='flex justify-center'>CHAT</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            
             </div>
              {/* navbar div here close */}
 
           <div className='p-4'>
        
            <ul>
            {/* //profile drop start */}
<div class="flex justify-center">
    <div class="relative inline-block mb-20">
       
        <button onClick={(e)=>{setprofiledrop(!profiledrop)}} class="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
            <span class="mx-1">{user.name}</span>
            <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
            </svg>
        </button>

      
{profiledrop&&       <div class="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
            <a href="#" class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                <img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src={PF+user.profilePicture} alt="jane avatar"/>
                <div class="mx-1">
                    <h1 class="text-sm font-semibold text-gray-700 dark:text-gray-200">{user.name}</h1>
                    <p class="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                </div>
            </a>

            <hr class="border-gray-200 dark:border-gray-700 "/>
            
            <a href="/profile" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                view profile
            </a>
            
            <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Settings
            </a>

            <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Keyboard shortcuts
            </a>

            <hr class="border-gray-200 dark:border-gray-700 "/>
            
            <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Company profile
            </a>

            <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Team
            </a>

            <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Invite colleagues
            </a>

            <hr class="border-gray-200 dark:border-gray-700 "/>
            
            <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Help
            </a>
            <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Sign Out
            </a>
        </div>
        } 
    </div>
</div>
{/* //profile drop end */}
            </ul>
            {/* navbar menu on minimize */}
            <div class="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div class="absolute top-0 left-0 w-full">
                  <div class="p-5 bg-white border rounded shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="/"
                          aria-label="Company"
                          title="Company"
                          class="inline-flex items-center"
                        >

                          <img className='w-20 h-20' src={headerlogo} alt="" />
                          <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            V-learn
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul class="space-y-4">
                        <li>
                          <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Feed
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Connections
                          </a>
                        </li>
                        {/* <li>
                        <a
                          href="/"
                          aria-label="Product pricing"
                          title="Product pricing"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Educators
                        </a>
                      </li> */}
                        <li>
                          <a
                            href="/chatbox"
                            aria-label="About us"
                            title="About us"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Chat
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Sign up
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
              {/* navbar menu on minimize */}
           </div>

         

              </div>
           {/* <span
             id="blackOverlay"
             className="w-full h-full absolute opacity-50 bg-black"
           ></span> */}
         </div>
         <div
           className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
           style={{ height: "70px" }}
         >
           <svg
             className="absolute bottom-0 overflow-hidden"
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="none"
             version="1.1"
             viewBox="0 0 2560 100"
             x="0"
             y="0"
           >
             <polygon
               className="text-gray-300 fill-current"
               points="2560 0 2560 100 0 100"
             ></polygon>
           </svg>
         </div>
       </section>
       <section className="relative py-16 bg-gray-300">
         <div className="container mx-auto px-4">
           <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-56 lg:-mt-96  ">
             <div className="px-6">
               <div className="flex flex-wrap justify-center">
                 <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                   {/* <div className="relative">
                     <img
                       alt="..."
                  
                       src={profilepic}
                       className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                       style={{ maxWidth: "150px" }}
                     />
                   </div> */}
                 </div>
                 {/* <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                   <div className="py-6 px-3 mt-32 sm:mt-0">
                     <button
                       className="bg-blue-900 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                       type="button"
                       style={{ transition: "all .15s ease" }}
                     >
                       Connect
                     </button>
                   </div>
                 </div> */}
                 {/* <div className="w-full lg:w-4/12 px-4 lg:order-1">
                   <div className="flex justify-center py-4 lg:pt-4 pt-8">
                     <div className="mr-4 p-3 text-center">
                       <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                         22
                       </span>
                       <span className="text-sm text-gray-500">Connections</span>
                     </div>
                     <div className="mr-4 p-3 text-center">
                       <a href="/gallery"><span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                         10
                       </span></a>
                       <a href="/gallery"><span className="text-sm text-gray-500">Photos</span></a>
                     </div>
                     <div className="lg:mr-4 p-3 text-center">
                       <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                         5
                       </span>
                       <span className="text-sm text-gray-500">Requests</span>
                     </div>
                   </div>
                 </div> */}
               </div>
               <div className="text-center mt-12">
                 {/* <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                   Jenna Stones
                 </h3>
                 <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                   <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                   Software Developer,Devops
                 </div> */}
                 {/* <div className="mb-2 text-gray-700 mt-10">
                   <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                   Solution Manager - Creative Tim Officer
                 </div>
                 <div className="mb-2 text-gray-700">
                   <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                   University of Computer Science
                 </div> */}
               </div>
               <div className="mt-10 py-1  border-gray-300 text-center">
                 <div className="flex flex-wrap justify-center">
                   <div className="w-full lg:w-9/12 px-2">
                     {/* <p className="mb-4 text-lg leading-relaxed text-gray-800">
                       An artist of considerable range, Jenna the name taken by
                       Melbourne-raised, Brooklyn-based Nick Murphy writes,
                       performs and records all of his own music, giving it a
                       warm, intimate feel with a solid groove structure. An
                       artist of considerable range.
                     </p> */}
                     <div className='share'>
          <div className='shareWrapper'>
            <form onSubmit={submitHandler} action="">
              <div className="shareTop">
                {/* <img src='/assets/c2.jpg' className='shareProfileImg' alt=""></img> */}
                <p className='text-blue-900 text-sm font-bold'>NEW POST</p>
                {/* <input placeholder="what's in your mind ?" className='mt-3 shareInput' /> */}
                <textarea onChange={(e) => { setDesc(e.target.value) }} placeholder="what's in your mind ?" className='postmessage mt-3 shareInput h-9 w-18' name="" id="" cols="30" rows="10"></textarea>

              </div>
              <hr className='shareHr' />
              <div className='shareBottom'>
                <div className="shareOptions">
                  <div className="shareOptions">



                    <span className='shareOptionText'>
                      <label for="fileInput1">
                        <img className='w-10 h-10' id="icon" src={picimg} />
                      </label>
                      <input hidden  id="fileInput1" name='imageFile' type="file" onChange={(e) => {setImageFile(e.target.files[0]);setPerviewImage(e.target.files[0]);}}></input>
                      {/* <img id="uploadPreview" style="width: 100px; height: 100px;" /> */}
                     
                    </span>
                    <span className='mx-4 shareOptionText'>
                      <label for="fileInput2">
                        <img className='w-10 h-10' id="icon" src={videoimg} />
                      </label>
                      <input hidden id="fileInput2" name='videoFile' type="file" onChange={(e)=>{setVideoFile(e.target.files[0]);setPreviewVideo(e.target.files[0]);}}></input>
                      {/* <img className='w-10 h-10' src={videoimg} alt="" /> */}
                    </span>
                  </div>
                
                </div>

                <button type='submit' className='shareButton'><img className='w-10 h-10' src={sendicon} alt="" /></button>
              </div>
                
            </form>
          </div>
          
        </div>
        {/* kousal */}

    {/* perview box */}
      {previewImage &&<div className='flex justify-center border-collapse m-10'><img className='w-25 h-20' src={previewIcon} alt="" /> <img className='w-96 h-80' src={previewUrl} alt="" /></div>}
     {previewVideo &&<div className='flex justify-center border-collapse m-10'><img className='w-25 h-20' src={previewIcon} alt="" /><video className='w-96 h-80' controls src={previewUrl} type="video/mp4"></video></div> }


        {/* space starts */}
      
        <div className='text-left mt-9'>
        {
               post.map((obj)=>{
                    return(  
          <Postdisplay obj={obj}/>
          
           ) }  )}  
        </div>
        {/* space ends */}
               
                   </div>
                
                 
                
                 </div>
                  {/* space ends */}
                 {/* <div><h1>helokasodas</h1></div> */}
             
        
        
                  {/* soace ends */}
               </div>
               
             </div>
           </div>
         </div>
       </section>
     </main>
     {/* <Footer /> */}
   </>
   </div>
  )
}

export default Feed
