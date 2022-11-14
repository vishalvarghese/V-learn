import React, { useState } from 'react'
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
function Feed() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='bg-blue-50'>
      {/*feed header start*/}

      <div class="bg-blue-50">
        <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="relative flex items-center justify-between">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              class="inline-flex items-center"
            >
              {/* <svg
              class="w-8 text-teal-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg> */}

              <img className='w-20 h-20' src={headerlogo} alt="" />
              <span class="ml-2 text-xl font-bold tracking-wide text-blue-900">
                V-learn
              </span>
            </a>
            <div className='flex justify-between'>
              <ul class="bg-white p-2 rounded-3xl flex  items-center hidden space-x-8 lg:flex">
                <li>
                  <a

                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    class="font-medium tracking-wide text-blue-900 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    <div className='text-xs'>  <img className='w-10 h-10' src={feedimg} alt="" />
                      FEED
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
                    <div className='flex text-xs justify-center'>
                      <img className='w-10 h-10' src={connectionimg} alt="" />
                      <p className='pt-3'> CONNECTIONS</p>
                    </div>
                  </a>
                </li>
                {/* <li>
              <a
                href="/"
                aria-label="Product pricing"
                title="Product pricing"
                class="font-medium tracking-wide text-blue-900 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Educators
              </a>
            </li> */}
                <li>
                  <a
                    href="/"
                    aria-label="About us"
                    title="About us"
                    class="font-medium tracking-wide text-blue-900 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    <div className='text-xs  justify-between w-full items-center'>
                      <img className='w-10 h-10' src={chatimg} alt="" />
                      CHAT
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <ul class="bg-white rounded-3xl flex items-center hidden space-x-8 lg:flex">
              <li>
                <a
                  href="/profile"
                  class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-blue-900 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  <img className='w-10 h-10 rounded-2xl m-2' src={profilepic} alt="" />
                  Vishal Varghese
                </a>


                {/* side box start */}

                {/* side box end */}

              </li>
            </ul>
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
                          {/* <svg
                          class="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg> */}
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
                            href="/"
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
          </div>
        </div>
      </div>
      {/* header end */}

      {/* post begins */}
      <div className='bg-white w-full px-4 py-12 mx-auto max-w-7xl md:w-3/4 lg:w-3/5'>
        {/* kousal */}
        <div className='share'>
          <div className='shareWrapper'>
            <div className="shareTop">
              {/* <img src='/assets/c2.jpg' className='shareProfileImg' alt=""></img> */}
              <p className='text-blue-900 text-sm font-bold'>NEW POST</p>
              <input placeholder="what's in your mind ?" className='mt-3 shareInput' />

            </div>
            <hr className='shareHr' />
            <div className='shareBottom'>
              <div className="shareOptions">
                <div className="shareOptions">
                  {/* <PermMedia htmlColor="tomato" className='shareIcon'/> */}

                  <span className='shareOptionText'><img className='w-10 h-10' src={picimg} alt="" /></span>
                  <span className='mx-4 shareOptionText'><img className='w-10 h-10' src={videoimg} alt="" /></span>
                </div>
              </div>

              <button className='shareButton'><img className='w-10 h-10' src={sendicon} alt="" /></button>
            </div>
          </div>
        </div>
        {/* kousal */}
      </div>
      <section class=" bg-white w-full px-4  mx-auto max-w-7xl md:w-3/4 lg:w-3/5">
        {/* <div class="mb-12 text-left md:text-center">
    <h2 class="mb-2 text-3xl font-extrabold leading-tight text-gray-900">Skcript Blog</h2>
    <p class="text-lg text-gray-500">Everything comes directly from the desk of the respective engineers, creators and managers at Skcript.</p>
  
  </div> */}


        <div class="flex flex-col divide-y divide-gray-200">
          <div>

            <p class="  text-sm font-normal text-gray-500"> <img className='w-10 h-10 rounded-2xl m-2' src={profilepic} alt="" />
              vishal varghese</p>
            <p class=" text-sm font-normal text-gray-500 mb-3">April 16, 2020</p>
            {/* <h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
        <a href="#" class="text-gray-900 hover:text-purple-700">Process Documents Using Artificial Intelligence For RPA Bots</a>
      </h2> */}
            <p class="mb-4 text-base font-normal text-gray-600">
              Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
              Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
            </p>
            <img className='.max-w-full .h-auto' src={postimage} alt="" />
            {/* <input placeholder="Co  ?" id="comment" className='bg-blue-50 mt-1 shareInput'/> */}
            <div className='flex'>
              <p className='text-black mx-2'><button className='bg-blue-400 w-auto p-1 rounded-2xl'>Like(24)</button></p>
              <p className='text-blue-900 mx-2'><u>comments</u> (3)</p>
            </div>
            {/* comment box start */}
            <div class="mx-auto my-10 max-w-xl rounded-xl border px-4 py-6 text-gray-700">
              <div class="rounded-lg bg-gray-100 p-2">
                <p class="mb-2 text-gray-500"> You <span className='text-xs'> Sep 4</span></p>
                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem eum nostrum.</p>
              </div>
              <div class="rounded-lg bg-gray-100 p-2">
                <p class="flex  text-gray-500"> <img className='w-10 h-10 rounded-2xl ' src={profilepic} alt="" />
                  <span className='mt-3'> vishal varghese</span><span className='text-xs'> Sep 4</span></p>
                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem eum nostrum.</p>
              </div>
            </div>

            {/* comment box start */}

            {/* <a href="#" class="btn btn-light btn-sm">comments</a> */}

          </div>
          {/* <div>
      <p class="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p>
      <h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
        <a href="#" class="text-gray-900 hover:text-purple-700">Implement Dark Mode in Your Android App</a>
      </h2>
      <p class="mb-4 text-base font-normal text-gray-600">
        Are you curious to implement the Dark Mode in Android Application? Here’s the perfect guideline to attain the Dark Mode in Android Application. Don’t waste your time; just implement and enjoy
        Dark Mode.
      </p>
      <a href="#" class="btn btn-light btn-sm">Continue Reading</a>
    </div> */}
          <div>
            {/* post2 start */}
            <p class="  text-sm font-normal text-gray-500"> <img className='w-10 h-10 rounded-2xl m-2' src={profilepic} alt="" />
              vishal varghese</p>
            <p class=" text-sm font-normal text-gray-500 mb-3">April 16, 2020</p>
            {/* <h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
        <a href="#" class="text-gray-900 hover:text-purple-700">Process Documents Using Artificial Intelligence For RPA Bots</a>
      </h2> */}
            <p class="mb-4 text-base font-normal text-gray-600">
              Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
              Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
            </p>
            {/* <img className='.max-w-full .h-auto' src={postimage} alt="" /> */}
            <div>

              <iframe className='w-full h-96' src="https://www.youtube.com/embed/JKEJizRiBgQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
            {/* <input placeholder="Co  ?" id="comment" className='bg-blue-50 mt-1 shareInput'/> */}
            <div className='flex'>
              <p className='text-black mx-2'><button className='bg-blue-400 w-auto p-1 rounded-2xl'>like(24)</button></p>
              <p className='text-blue-900 mx-2 '><u>comments</u> (3)</p>
            </div>
            {/* comment box start */}
            <div class="mx-auto my-10 max-w-xl rounded-xl border px-4 py-6 text-gray-700">
              <div class="rounded-lg bg-gray-100 p-2">
                <p class="mb-2 text-gray-500"> You <span className='text-xs'> Sep 4</span></p>
                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem eum nostrum.</p>
              </div>
              <div class="rounded-lg bg-gray-100 p-2">
                <p class="flex  text-gray-500"> <img className='w-10 h-10 rounded-2xl ' src={profilepic} alt="" />
                  <span className='mt-3'> vishal varghese</span><span className='text-xs'> Sep 4</span></p>
                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem eum nostrum.</p>
              </div>
            </div>

            {/* comment box start */}
            {/* post2 end */}
          </div>
          <div>
            <p class="  text-sm font-normal text-gray-500"> <img className='w-10 h-10 rounded-2xl m-2' src={profilepic} alt="" />
              vishal varghese</p>
            <p class=" text-sm font-normal text-gray-500 mb-3">April 16, 2020</p>
            <p class="mb-4 text-base font-normal text-gray-600">
              Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
              Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
            </p>
            <video className='w-full h-96' controls src={openmike} type="video/mp4"></video>
            <div className='flex'>
            <p className='text-black mx-2'><button className='bg-blue-400 w-auto p-1 rounded-2xl'>like(24)</button></p>
              <p className='text-blue-900 mx-2'><u>comments</u> (3)</p>

            </div>

          </div>
          {/* <div>
      <p class="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p>
      <h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
        <a href="#" class="text-gray-900 hover:text-purple-700">3 things you should change during your focus group interview</a>
      </h2>
      <p class="mb-4 text-base font-normal text-gray-600">We changed three things about our feedback sessions, and it changed everything about running customer feedback sessions.</p>
      <a href="#" class="btn btn-light btn-sm">Continue Reading</a>
    </div> */}
          {/* <div>
      <p class="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p>
      <h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
        <a href="#" class="text-gray-900 hover:text-purple-700">Using Webpack with React Typescript</a>
      </h2>
      <p class="mb-4 text-base font-normal text-gray-600">
        Ever wondered if there is a way to just tie up all your code into one single module for easy usage. If so, in this article I will show you how to bundle all your code into a single javascript
        module that you can easily use in any other project.
      </p>
      <a href="#" class="btn btn-light btn-sm">Continue Reading</a>
    </div> */}
        </div>
        <div class="flex flex-col items-center justify-center pt-12 mt-12 space-x-0 space-y-2 border-t border-gray-200 md:space-x-2 md:space-y-0 md:flex-row">
          <a href="#" class="text-blue-900 w-full rounded-full btn btn-light btn-xl md:w-auto"><u> View more posts</u></a>
          {/* <a href="#" class="w-full rounded-full btn btn-light btn-xl md:w-auto">Next Page</a> */}
        </div>
      </section>


      {/* post ends */}

      <div className='w-auto mt-9 bg-slate-300'>
        <img className='w-36 h-36 ' src={Vlearnlogo} alt="" />
      </div>

    </div>
  )
}

export default Feed
