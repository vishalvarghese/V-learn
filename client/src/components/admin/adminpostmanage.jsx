import React from 'react'
import Sidebar from './sidebar'
function adminpostmanage() {
  return (
    <div
    id="view"
    class="h-full w-screen flex flex-row "
    x-data="{ sidenav: true }" >
    <button
      // @click="sidenav = true"
      class="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
    >
      <svg
        class="w-5 h-5 fill-current"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  {/* side bar */}
  <div>{<Sidebar/>}</div>

  <div className='flex justify-center w-full items-center'>
    <h2 className='text-blue-900 font-bold text-4xl'>post management</h2>
  </div>
      
        

  </div>
  )
}

export default adminpostmanage
