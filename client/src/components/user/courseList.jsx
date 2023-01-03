import React,{useState,useEffect} from 'react'
import Header from './hearder'
import axios from 'axios'
import { Link } from 'react-router-dom';
function CourseList() {

    const [courses,setCourses]=useState([])

    const axiosInstance=axios.create({
      baseURL:process.env.REACT_APP_API_URL
    })

    useEffect(()=>{
      axiosInstance.get('/getcourses').then((response)=>{
          setCourses(response.data) 
          // console.log(response.data);
       }).catch((err)=>{
         console.log(err);
       })
      
        },[])
        
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
   {/* header start */}
   <Header/>
   {/* header end */}

             {/* profile deop */}
            <div>
            
           
            </div>
             {/* navbar div here close */}
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
             {/* <polygon
               className="text-gray-300 fill-current"
               points="2560 0 2560 100 0 100"
             ></polygon> */}
           </svg>
         </div>
       </section>
       <section className="relative py-16 bg-gray-300">
         <div className="container mx-auto px-4">
           <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-96">
             <div className="px-6">
               <div className="flex flex-wrap justify-center">
                 <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                   <div className="relative">
                     {/* <img
                       alt="..."
                       src={profilepic}
                       className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                       style={{ maxWidth: "150px" }}
                     /> */}
                   </div>
                 </div>
                 <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                   <div className="py-6 px-3 mt-32 sm:mt-0">
                     {/* <button
                       className="bg-blue-900 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                       type="button"
                       style={{ transition: "all .15s ease" }}
                     >
                       Connect
                     </button> */}
                   </div>
                 </div>
                 <div className="w-full lg:w-4/12 px-4 lg:order-1">
                   <div className="flex justify-center py-4 lg:pt-4 pt-8">
                     {/* <div className="mr-4 p-3 text-center">
                       <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                         22
                       </span>
                       <span className="text-sm text-gray-500">Connections</span>
                     </div> */}
                     {/* <div onClick={(e)=>{setShowGallery(true);setShowRequest(!showRequest)}} className="cursor-pointer mr-4 p-3 text-center">
                       <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                         10
                       </span>
                       <span  className="text-sm text-gray-500">Photos</span>
                     </div> */}
                     {/* <div onClick={(e)=>{setShowRequest(true);setShowGallery(!showGallery)}} className="cursor-pointer lg:mr-4 p-3 text-center">
                       <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                         5
                       </span>
                       <span  className=" text-sm text-gray-500">Requests</span>
                     </div> */}
                   </div>
                 </div>
               </div>
               <div className="text-center ">
                 <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                 Courses
                 </h3>
                 {/* <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
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
 {/* start of course card */}
{
 courses.map((obj,index)=>{
   return(
 
  <div>
   <div class="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
       <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
           <div class="lg:w-1/3 h-full flex justify-center">
           
               <img className='.max-w-full .h-auto' src={obj.img} alt="" />
             
           </div>
           <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-2/3">
               <h2 class="text-3xl text-gray-800 font-bold">{obj.courseName}</h2>
               <p class="mt-4 text-gray-600">{obj.desc}</p>
              <div className='flex justify-center'>
               <p>Educator:</p>
               <div>
               <img className='mx-2 rounded-2xl w-10 h-10' src={obj.creatorPic} alt="" />
               </div>             
              <div>
              <p><span className='text-indigo-600'>
               {obj.creatorName}</span> </p>
               </div>
               </div>

               <div class="mt-8">
                   {/* <a href="#" class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Join Now</a> */}
                   <Link className='bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded' key={index} to="/courseview" state={{CourseViewDetail:obj}}>Join Now</Link>
               </div>
           </div>
       </div>
     </div> 
 </div>
)
})  
}
      
     {/* End of course card*/}

               </div>
               <div className=" border-t border-gray-300 text-center">
                 <div className="flex flex-wrap justify-center">
                   <div className="w-full lg:w-9/12 px-4">
                     {/* <p className="mb-4 text-lg leading-relaxed text-gray-800">
                       An artist of considerable range, Jenna the name taken by
                       Melbourne-raised, Brooklyn-based Nick Murphy writes,
                       performs and records all of his own music, giving it a
                       warm, intimate feel with a solid groove structure. An
                       artist of considerable range.
                     </p> */}
                     {/* <a
                       href="#pablo"
                       className="font-normal text-pink-500"
                       onClick={e => e.preventDefault()}
                     >
                       Show more
                     </a> */}
               
                   </div>
                      
                    
                 
                    {/* {showRequest?  <Connect_requests/>:null } 
                    <Owncourse/>                             */}
                 </div>
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

export default CourseList
