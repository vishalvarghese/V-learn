import React,{useState} from 'react'
import add from '../../asset/add.jpg'
function Owncourse() {
  const [showModal,setShowModal]=useState(false);
  const [modalData,setModalData]=useState({
    name:'',
      Address:'',
      City:'',
      Phonenumber:'',
      Email:'',
      businessDetail:''
  })

  const modalshow=(e)=>{
    e.preventDefault()
    setShowModal(true)
  }
  // const modalshow = (id) => {
  //   applicants.filter((obj) => {
  //       if (obj._id === id) {
  //           setModalData({
  //               name: obj.name, Address: obj.Address, Email: obj.Email,
  //               Phonenumber: obj.Phonenumber, businessDetail: obj.businessDetail,
  //                status: obj.status
  //           })
  //           setShowModal(true)
  //       }
  //   })
  // }
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

    <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
      <a href="" class="block h-full w-full">
        <img class="max-h-40 w-full object-cover" alt="featured image" src={add} />
        <div class="w-full bg-white p-4">
          {/* <p class="text-md font-medium text-indigo-500">Add new Course</p> */}
          <p class="mb-2 text-xl font-medium text-gray-800">ADD NEW COURSE</p>
          {/* <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p> */}
          <div class="justify-center mt-4 flex flex-wrap items-center">
            <div onClick={(e)=>{modalshow(e)}} class="cursor-pointer mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Begin</div>
            {/* <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Enroll</div> */}
          </div>
        </div>
      </a>
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
                                <h3 className="text-3xl font-semibold">georhe</h3>
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
                                    <table>
                                        <tbody className='flex flex-col '>
                                            <tr className='pt-2'>
                                                <th className='text-right pr-2 w-[35%]'>Name : </th>
                                                {/* <td width="200px">{modalData.name}</td> */}
                                                <td width="200px">george</td>
                                            </tr>
                                            <tr className='pt-2'>
                                                <th className='text-right pr-2 w-[35%]'>Email : </th>
                                                {/* <td width="200px">{modalData.Email}</td> */}
                                                <td width="200px">vishal@gmail.com</td>
                                            </tr>
                                            <tr className='pt-2'>
                                                <th className='text-right pr-2 w-[35%]'>Phone : </th>
                                                {/* <td width="200px">{modalData.phone}</td> */}
                                                <td width="200px">9999999999</td>
                                            </tr>
                                            {/* <tr className='pt-2'>
                                                <th className='text-right pr-2 w-[35%] align-top'>Address : </th>
                                                <td width="200px">{modalData.Address}</td>
                                            </tr>
                                            <tr className='pt-2'>
                                                <th className='text-right pr-2 w-[35%]'>Business : </th>
                                                <td width="200px"> {modalData.businessDetail}</td>
                                            </tr>
                                            <tr className='pt-2'>
                                                <th className='text-right pr-2 w-[35%]'>Status : </th>
                                                <td width="200px">{modalData.status}</td>
                                            </tr><tr className='pt-2'>
                                                <th className='text-right pr-2 w-[35%]'>Mobile : </th>
                                                <td width="200px">{modalData.Phonenumber}</td>
                                            </tr> */}
                                            {/* <tr className='pt-2'>
                                                <th className='text-right pr-2 w-[35%] align-top'>Logo : </th>
                                                <td width="200px"><img src={`/images/${modalData.image}`} alt="" className='w-[100px] ' /></td>
                                            </tr> */}



                                        </tbody>
                                    </table>
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
