import React,{useState} from 'react'
// import profilepic from '../../asset/img/team-2-800x800.jpg'
import profilepic from '../../asset/profilepic.jpg'
import Owncourse from './owncourse'
import Gallery from './gallery'
import Connect_requests from './connect_requests'
import feedimg from '../../asset/feedimg.png'
import connectionimg from '../../asset/connection.png'
import chatimg from '../../asset/chat.png'
import headerlogo from '../../asset/header logo.png'
import { useLocation } from 'react-router-dom'

// import { useSelector } from 'react-redux'
function OtherProfile(props) {
    const other=useLocation().state.otheruser
    // console.log(other);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [showGallery, setShowGallery] = useState(true);
  const [showRequest, setShowRequest] = useState(false);
  // const [showOwnCourse, setShowOwnCourse] = useState(false);
  const [profiledrop,setprofiledrop]=useState(false)
//   const user = useSelector((state) => state.user)
 
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
          {/* <a
              href="/"
              aria-label="Company"
              title="Company"
              class="inline-flex items-center"
            >
              <img className='w-20 h-20' src={headerlogo} alt="" />
              <span class="ml-2 text-xl font-bold tracking-wide text-blue-900">
                V-learn
              </span>
            </a> */}
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
                    href="/"
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
{/* <div class="flex justify-center">
    <div class="relative inline-block mb-20">
       
        <button onClick={(e)=>{setprofiledrop(!profiledrop)}} class="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
            <span class="mx-1">{other.name}</span>
            <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
            </svg>
        </button>

      
{profiledrop&&       <div class="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
            <a href="#" class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                <img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src={other.profilePicture} alt="jane avatar"/>
                <div class="mx-1">
                    <h1 class="text-sm font-semibold text-gray-700 dark:text-gray-200">{other.name}</h1>
                    <p class="text-sm text-gray-500 dark:text-gray-400">other@email.com</p>
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
</div> */}
{/* //profile drop end */}
            </ul>
            </div>
            







            {/*  */}
             </div>

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
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        // src={require("../../asset/img/team-2-800x800.jpg").default}
                        src={profilepic}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-blue-900 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          22
                        </span>
                        <span className="text-sm text-gray-500">Connections</span>
                      </div>
                      <div onClick={(e)=>{setShowGallery(true);setShowRequest(!showRequest)}} className="cursor-pointer mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          10
                        </span>
                        <span  className="text-sm text-gray-500">Photos</span>
                      </div>
                      {/* <div onClick={(e)=>{setShowRequest(true);setShowGallery(!showGallery)}} className="cursor-pointer lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          5
                        </span>
                        <span  className=" text-sm text-gray-500">Requests</span>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                  {other.name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    {other.designation}
                  </div>
                  {/* <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    University of Computer Science
                  </div> */}
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      {other.desc}
                      </p>
                      {/* <a
                        href="#pablo"
                        className="font-normal text-pink-500"
                        onClick={e => e.preventDefault()}
                      >
                        Show more
                      </a> */}
                
                    </div>
                       
                      {showGallery? <Gallery/>:null}
                     {/* {showRequest?  <Connect_requests/>:null }  */}
                     <Owncourse/>                            
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

export default OtherProfile