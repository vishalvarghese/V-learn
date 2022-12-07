import React,{useState,useEffect} from 'react'
import add from '../../asset/add.jpg'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Header from './hearder'
function Course_view() {
  
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const courseInfo=useLocation().state.CourseViewDetail
  const user = useSelector((state) => state.user)
  const [videoFile,setVideoFile]=useState('')
  const [desc, setDesc] = useState('')

  const [showModal,setShowModal]=useState(false);
  
  const [chapters,setChapters]=useState([])

  const [playVideo,setPlayVideo]=useState('')
  const [addOption,setAddOption]=useState(false)
  const modalshow=(e)=>{
    e.preventDefault()
    setShowModal(true)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    console.log("form submitted");

   try{
    var ChapterDetails={
      courseName:courseInfo.courseName,
      courseId:courseInfo._id,
      userId:user._id,
      desc:desc,
      creatorPic:user.profilePicture,
    }

    if (videoFile) {
      const data = new FormData();
      const fileName = videoFile.name
      data.append("file", videoFile)
      data.append("name", fileName)
      // ChapterDetails.video = fileName
      try {
        await axios.post('http://localhost:5000/post/upload', data).then((response)=>{
          // console.log(response.data,'qqqqqqqqqqqqqqq');
          ChapterDetails.video='https://drive.google.com/uc?export=view&id='+response.data
        })

      } catch (error) {
        console.log(error);
      }
    }

    axios.post("http://localhost:5000/post",ChapterDetails).then(
      (res)=>{
        console.log(res.data)
        window.location.reload()
        
      }
    )
  }catch(error){
    console.log(error);
  }
  }


  useEffect(()=>{
    axios.get(`http://localhost:5000/getChapters/${courseInfo._id}`).then((response)=>{
      setChapters(response.data) 
       console.log(response.data);

       if(courseInfo.userId==user._id)
        {
          setAddOption(true)
        }

   }).catch((err)=>{
     console.log(err);
   })
  
    },[])


  return (
    <div>
        <Header/>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          {/* <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Chapter 1
          </p> */}
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="679d5905-e08c-4b91-a66c-84aefbb9d2f5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#679d5905-e08c-4b91-a66c-84aefbb9d2f5)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{' '}
        {courseInfo.courseName}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        {courseInfo.desc}
        </p>
      </div>
      <div className="mx-auto lg:max-w-2xl">
        <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
          {/* <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          /> */}
       {playVideo &&   <video  autoPlay controls src={playVideo}></video>}
          {/* <a
            href="/"
            aria-label="Play Video"
            className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
          > */}
            {/* <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
              <svg
                className="w-10 text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
              </svg>
            </div> */}
          {/* </a> */}
        </div>
      </div>
          {/* start course */}
          <section class="py-20">
  <h1 class="mb-12 text-center font-sans text-5xl font-bold">Lessons</h1>
  <div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
   { chapters.map((obj,index)=>{
    return(
    <article onClick={()=>{setPlayVideo(obj.video)}} class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
      {/* <a href="#" class="block h-full w-full"> */}
        {/* <img class="max-h-40 w-full object-cover" alt="featured image" src=  {PF+courseInfo.img} /> */}
        <video className='max-h-40 w-full object-cover' src={obj.video}></video>
        <div class="w-full bg-white p-4">
          <p class="text-md font-medium text-indigo-500">Chapter {index+1}</p>
          <p class="mb-2 text-xl font-medium text-gray-800">{obj.desc}</p>
          {/* <p class="text-md font-light text-gray-400"></p> */}
          <div class="justify-center mt-4 flex flex-wrap items-center">
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600"><a href="/courseview"> Start</a></div>
            {/* <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Enroll</div> */}
          </div>
        </div>
      {/* </a> */}
    </article>

    )
   })
    
    }
    {/* <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
      <a href="#" class="block h-full w-full">
        <img class="max-h-40 w-full object-cover" alt="featured image" src="https://cdn-images-1.medium.com/max/2000/1*6ahbWjp_g9hqhaTDSJOL1Q.png" />
        <div class="w-full bg-white p-4">
          <p class="text-md font-medium text-indigo-500">Chapter 2</p>
          <p class="mb-2 text-xl font-medium text-gray-800">The Complete JavaScript Course 2023: From Zero to Expert!</p>
          <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p>
          <div class="justify-center mt-4 flex flex-wrap items-center">
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600"><a href="/courseview">Open</a></div>
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Enroll</div>
          </div>
        </div>
      </a>
    </article> */}
    
{addOption&&
    <article class="h-90 w-72 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
      <a href="" class="block h-full w-full">
        <img class="h-60 w-full object-cover" alt="featured image" src={add} />
        <div class="w-full bg-white p-4">
          {/* <p class="text-md font-medium text-indigo-500">Add new Course</p> */}
          <p class="mb-2 text-xl font-medium text-gray-800">Add New Chapter</p>
          {/* <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p> */}
          <div class="justify-center mt-4 flex flex-wrap items-center">
            <div onClick={(e)=>{modalshow(e)}} class="cursor-pointer mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Begin</div>
            {/* <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Enroll</div> */}
          </div>
        </div>
      </a>
    </article>
}  

  
  </div>
</section>
                      {/* end course */}

                                            {/* modal begins */}
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
                                <h3 className="text-3xl font-semibold">New Chapter </h3>
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
    <form onSubmit={(e)=>{submitHandler(e);setShowModal(false)}} action="">
    <div class="-ml-20 flex p-4 text-left text-gray-700">
      <img class="mr-5 h-12 w-12 rounded-full" src="https://ui-avatars.com/api/?name=John+Doe" alt="" />
      <div class="w-full space-y-3 text-gray-700">
       
        {/* <div class="">
          <input type="text" placeholder="Chapter description" class="h-12 w-full max-w-full rounded-md border bg-white px-5 text-sm outline-none focus:ring" />
        </div> */}
       
        
       
        <div class="">
          <textarea required onChange={(e) => {setDesc(e.target.value)  }} name="comment" id="" placeholder="Write description of the course" cols="30" rows="6" class="h-40 w-full min-w-full max-w-full overflow-auto whitespace-pre-wrap rounded-md border bg-white p-5 text-sm font-normal normal-case text-gray-600 opacity-100 outline-none focus:text-gray-600 focus:opacity-100 focus:ring"></textarea>
        </div>
        <label htmlFor="chaptervideo"></label>
        <input name='chaptervideo' required accept='video/*' onChange={(e) => { setVideoFile(e.target.files[0]) }} type="file" placeholder="name" class="h-12 w-full max-w-full rounded-md  bg-white px-5 text-sm outline-none" />

        <div class="float-right">
          <input  type="submit" value="Save" class="relative inline-flex h-10 w-auto max-w-full cursor-pointer items-center justify-center overflow-hidden whitespace-pre rounded-md bg-blue-700 px-4 text-center text-sm font-medium normal-case text-white opacity-100 outline-none focus:ring" />
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
{/* modal ends */}
    </div>
    </div>
  )
}

export default Course_view
