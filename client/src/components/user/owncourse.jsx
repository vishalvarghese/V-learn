import React from 'react'

function owncourse() {
  return (
    <div>
            {/* start course */}
            <section class="py-20">
  <h1 class="mb-12 text-center font-sans text-5xl font-bold">Launched Courses</h1>
  <div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
    
    <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
      <a href="#" class="block h-full w-full">
        <img class="max-h-40 w-full object-cover" alt="featured image" src="https://www.filepicker.io/api/file/4M8w50NiQeuN7DBHRYEm" />
        <div class="w-full bg-white p-4">
          <p class="text-md font-medium text-indigo-500">Course 1</p>
          <p class="mb-2 text-xl font-medium text-gray-800">Learn Python: The Complete Python Programming Course</p>
          {/* <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p> */}
          <div class="justify-center mt-4 flex flex-wrap items-center">
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600"><a href="/courseview"> Open</a></div>
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Enroll</div>
          </div>
        </div>
      </a>
    </article>
    
    <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
      <a href="#" class="block h-full w-full">
        <img class="max-h-40 w-full object-cover" alt="featured image" src="https://cdn-images-1.medium.com/max/2000/1*6ahbWjp_g9hqhaTDSJOL1Q.png" />
        <div class="w-full bg-white p-4">
          <p class="text-md font-medium text-indigo-500">Course 2</p>
          <p class="mb-2 text-xl font-medium text-gray-800">The Complete JavaScript Course 2023: From Zero to Expert!</p>
          {/* <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p> */}
          <div class="justify-center mt-4 flex flex-wrap items-center">
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600"><a href="/courseview">Open</a></div>
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Enroll</div>
          </div>
        </div>
      </a>
    </article>
   

  
  </div>
</section>
                      {/* end course */}
    </div>
  )
}

export default owncourse
