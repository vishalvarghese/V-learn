import React,{useState} from 'react'
import headerlogo from '../../asset/header logo.png'
import feedimg from '../../asset/feedimg.png'
import chatimg from '../../asset/chat.png'
import connectionimg from '../../asset/connection.png'
import profilepic from '../../asset/profilepic.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

function Header() {
    const navigate = useNavigate()
    const [profiledrop,setprofiledrop]=useState(false)
    const user = useSelector((state) => state.user)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const dispatch = useDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

            <button onClick={(e) => { setprofiledrop(!profiledrop) }} class="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
              <span class="mx-1">{user.name}</span>
              <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
              </svg>
            </button>


            {profiledrop && <div class="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
              <a href="/profile" class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                <img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src={PF + user.profilePicture} alt="jane avatar" />
                <div class="mx-1">
                  <h1 class="text-sm font-semibold text-gray-700 dark:text-gray-200">{user.name}</h1>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                </div>
              </a>

              <hr class="border-gray-200 dark:border-gray-700 " />

              <a href="/profile" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                view profile
              </a>

              <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Settings
              </a>

              {/* <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Keyboard shortcuts
              </a>

              <hr class="border-gray-200 dark:border-gray-700 " />

              <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Company profile
              </a>

              <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Team
              </a>

              <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Invite colleagues
              </a>

              <hr class="border-gray-200 dark:border-gray-700 " />

              <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Help
              </a> */}
              <a onClick={(e) => { logout(e) }} href="" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
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
                      href="/feed"
                      aria-label="Our product"
                      title="Our product"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Feed
                    </a>
                  </li>
                  <li>
                    <a
                      href="/connections"
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
  )
}

export default Header
