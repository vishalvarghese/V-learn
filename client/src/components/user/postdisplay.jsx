import React from 'react'

function postdisplay() {
  return (
    
                <div>
            <p class="  text-sm font-normal text-gray-500"> <img className='w-10 h-10 rounded-2xl m-2' src={profilepic} alt="" />
              vishal varghese</p>
            <p class=" text-sm font-normal text-gray-500 mb-3">April 16, 2020</p>

            <p class="mb-4 text-base font-normal text-gray-600">
              {obj.desc}  
            </p>
            
           {/* video */}
           { obj.video &&  <video className='w-full h-96' controls src={PF+obj.video} type="video/mp4"></video>}
            {/* image */}
           { obj.img && <img className='.max-w-full .h-auto' src={PF+obj.img} alt="" />}
           {/* youtubelink */}
            <div>
              {/* <iframe className='w-full h-96' src="https://www.youtube.com/embed/JKEJizRiBgQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
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

          </div>
    
  )
}

export default postdisplay
