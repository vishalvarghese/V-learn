import React,{useState} from 'react'
import add from '../../asset/add.jpg'
import { useSelector } from 'react-redux'
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
function Owncourse() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [showModal,setShowModal]=useState(false);
  const [desc, setDesc] = useState('')
  const [courseName,setCourseName]=useState('')
  const [imageFile, setImageFile] = useState('')
  const user = useSelector((state) => state.user)
   const [courses,setCourses]=useState([])
  const modalshow=(e)=>{
    e.preventDefault()
    setShowModal(true)
  }

  const axiosInstance=axios.create({
		baseURL:process.env.REACT_APP_API_URL
	})

  const submitHandler = async (e) => {
    e.preventDefault()
    console.log("form submitted");

   try{
    var courseDetails={
      courseName:courseName,
      userId:user._id,
      creatorName:user.name,
      desc:desc,
      creatorPic:user.profilePicture,
    }

    if (imageFile) {
      const data = new FormData();
      const fileName = imageFile.name
      data.append("file", imageFile)
      data.append("name", fileName)
      // courseDetails.img = fileName
      try {
        await axiosInstance.post('/post/upload', data).then((response)=>{
          // console.log(response,'qqqqqqqqqqqqqqq');
          courseDetails.img='https://drive.google.com/uc?export=view&id='+response.data})

      } catch (error) {
        console.log(error);
      }
    }

    axiosInstance.post("/createCourse",courseDetails).then(
      (res)=>{
        console.log(res.data.newCourse)
        window.location.reload()
      }
    )
  }catch(error){
    console.log(error);
  }
  }
   
  useEffect(()=>{
    axiosInstance.get('/getcourses').then((response)=>{
  const ownCourse=(response.data).filter(obj=>obj.userId===user._id)

  setCourses(ownCourse) 
    // console.log(response.data);
 }).catch((err)=>{
   console.log(err);
 })

  },[courseName])

  return (
    <div>
            {/* start course */}
            <section class="py-20">
  <h1 class="mb-12 text-center font-sans text-5xl font-bold">Launched Courses</h1>
  <div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
    
    {/* <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
      <a href="#" class="block h-full w-full">
        <img class="max-h-40 w-full object-cover" alt="featured image" src="https://www.filepicker.io/api/file/4M8w50NiQeuN7DBHRYEm" />
        <div class="w-full bg-white p-4">
          <p class="text-md font-medium text-indigo-500">Course 1</p>
          <p class="mb-2 text-xl font-medium text-gray-800">Learn Python: The Complete Python Programming Course</p>
          <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p>
          <div class="justify-center mt-4 flex flex-wrap items-center">
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600"><a href="/courseview"> Open</a></div>
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Enroll</div>
          </div>
        </div>
      </a>
    </article> */}
    {
      courses.map((obj,index)=>{
        return(
          <article class="h-90 w-72 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
          {/* <a href="" class="block h-full w-full"> */}
            <img class="h-40 w-72 object-cover" alt="featured image" src={obj.img} />
            <div class="w-full bg-white p-4">
              <p class="text-md font-medium text-indigo-500">Course {index+1} </p>
              <p class="mb-2 text-xl font-medium text-gray-800">{obj.courseName}</p>
              <p class="text-md font-light text-gray-400">{obj.desc}</p>
              <div class="justify-center mt-4 flex flex-wrap items-center">
                <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600"><Link key={index} to="/courseview" state={{CourseViewDetail:obj}}>Open</Link></div>
                {/* <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Enroll</div> */}
              </div>
            </div>
          {/* </a> */}
        </article>
        )
      }
    )}
   

    <article onClick={(e)=>{modalshow(e)}} class="h-90 w-72 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
      {/* <a href="" class="block h-full w-full"> */}
        <img class="h-60 w-72 object-cover" alt="featured image" src={add} />
        <div class="w-full bg-white p-4">
          {/* <p class="text-md font-medium text-indigo-500">Add new Course</p> */}
          <p class="mb-2 text-xl font-medium text-gray-800">ADD NEW COURSE</p>
          {/* <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p> */}
          <div class="justify-center mt-4 flex flex-wrap items-center">
            <div onClick={(e)=>{modalshow(e)}} class="cursor-pointer mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Begin</div>
            {/* <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Enroll</div> */}
          </div>
        </div>
      {/* </a> */}
    </article>
   

  
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
                                <h3 className="text-3xl font-semibold">Create Course </h3>
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
        <div className="mb-4">
          <input required onChange={(e) => { setCourseName(e.target.value) }} type="text" placeholder="Course name" class="h-12 w-full max-w-full rounded-md border bg-white px-5 text-sm outline-none focus:ring" />
        </div>
       <label  htmlFor="imageFile">Course Poster Image</label>
          <input required accept="image/*" onChange={(e) => { setImageFile(e.target.files[0]) }} name='imageFile' type="file" placeholder="name" class="h-12 w-full max-w-full rounded-md  bg-white px-5 text-sm outline-none" />
        
       
        <div class="">
          <textarea required onChange={(e) => { setDesc(e.target.value) }} name="comment" id="" placeholder="Write description of the course" cols="30" rows="6" class="h-40 w-full min-w-full max-w-full overflow-auto whitespace-pre-wrap rounded-md border bg-white p-5 text-sm font-normal normal-case text-gray-600 opacity-100 outline-none focus:text-gray-600 focus:opacity-100 focus:ring"></textarea>
        </div>
        <div class="float-right">
          <input  type="submit" value="Launch" class="relative inline-flex h-10 w-auto max-w-full cursor-pointer items-center justify-center overflow-hidden whitespace-pre rounded-md bg-blue-700 px-4 text-center text-sm font-medium normal-case text-white opacity-100 outline-none focus:ring" />
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
  )
}

export default Owncourse
