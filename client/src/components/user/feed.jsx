import Header from './hearder'
import React, { useState, useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import previewIcon from '../../asset/previewIcon.jpg'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { logout } from '../../redux/userSlice'
import Postdisplay from './postdisplay'
function Feed() {
  const navigate = useNavigate()
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [imageFile, setImageFile] = useState('')
  const [videoFile, setVideoFile] = useState('')
  const [desc, setDesc] = useState('')
  const user = useSelector((state) => state.user)
  const [post, setPost] = useState([])
  const [previewImage, setPerviewImage] = useState('')
  const [previewVideo, setPreviewVideo] = useState('')
  const [previewUrl, setPreviewUrl] = useState('')
  //console.log(user);
  const [profiledrop, setprofiledrop] = useState(false)

  const axiosInstance=axios.create({
    baseURL:process.env.REACT_APP_API_URL
  })

  const dispatch = useDispatch();
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
      // newPost.img = fileName
      try {
        await axiosInstance.post('/post/upload', data).then((response)=>{
          // console.log(response,'qqqqqqqqqqqqqqq');
          newPost.img='https://drive.google.com/uc?export=view&id='+response.data
        })

      } catch (error) {
        console.log(error);
      }
    }
    if (videoFile) {
      const data = new FormData();
      const fileName = videoFile.name
      data.append("file", videoFile)
      data.append("name", fileName)
      // newPost.video = fileName
      try {
        await axiosInstance.post('/post/upload', data).then((response)=>{
          // console.log(response.data,'qqqqqqqqqqqqqqq');
          newPost.video='https://drive.google.com/uc?export=view&id='+response.data
        })
      } catch (error) {
        console.log(error);
      }
    } 
    try {
      await axiosInstance.post('/post', newPost)
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    axiosInstance.get('/feedpost', {
    }).then((response) => {
      // console.log(response.data); 
      setPost(response.data)

    }).catch((err) => {
      console.log(err);
    })
  }, [])
  // console.log(post);

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


  const logout = (e) => {
    e.preventDefault()
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'you have successfully logged out!',
          'Your file has been deleted.',
          'success'
        )

        localStorage.removeItem('user');
        localStorage.removeItem('usertoken')
        // setUserDetails(null)
        // removeCookie("token");   
        // alert('help to logout') 
        navigate("/");
        dispatch(logout)


      }
    })


  };

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
              {/* header start  */}
           <Header/>

            
              {/* header end */}
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
                                <textarea required onChange={(e) => { setDesc(e.target.value) }} placeholder="what's in your mind ?" className='postmessage mt-3 shareInput h-9 w-18' name="" id="" cols="30" rows="10"></textarea>

                              </div>
                              <hr className='shareHr' />
                              <div className='shareBottom'>
                                <div className="shareOptions">
                                  <div className="shareOptions">



                                    <span className='shareOptionText'>
                                      <label for="fileInput1">
                                        <img className='w-10 h-10' id="icon" src={picimg} />
                                      </label>
                                      <input hidden id="fileInput1" name='imageFile' type="file" accept="image/*" onChange={(e) => { setImageFile(e.target.files[0]); setPerviewImage(e.target.files[0]); }}></input>
                                      {/* <img id="uploadPreview" style="width: 100px; height: 100px;" /> */}

                                    </span>
                                    <span className='mx-4 shareOptionText'>
                                      <label for="fileInput2">
                                        <img className='w-10 h-10' id="icon" src={videoimg} />
                                      </label>
                                      <input accept='video/*' hidden id="fileInput2" name='videoFile' type="file" onChange={(e) => { setVideoFile(e.target.files[0]); setPreviewVideo(e.target.files[0]); }}></input>
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
                        {previewImage && <div className='flex justify-center border-collapse m-10'><img className='w-25 h-20' src={previewIcon} alt="" /> <img className='w-96 h-80' src={previewUrl} alt="" /></div>}
                        {previewVideo && <div className='flex justify-center border-collapse m-10'><img className='w-25 h-20' src={previewIcon} alt="" /><video className='w-96 h-80' controls src={previewUrl} type="video/mp4"></video></div>}


                        {/* space starts */}

                        <div className='text-left mt-9'>
                          {
                            post.map((obj) => {
                              return (
                                <Postdisplay obj={obj} />
                              )
                            })}
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
