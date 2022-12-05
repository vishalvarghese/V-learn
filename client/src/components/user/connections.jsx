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
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'
import Header from './hearder'
function Connections() {

  const navigate =useNavigate()
 
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const user = useSelector((state) => state.user)
  const[suggestionList,setSuggestionList]=useState([])
  const[connectedList,setConnectedList]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/connections/'+user._id).then((response)=>{
      console.log(response.data.connectedList.connections,"jjjjjjjjjjjjjjjjjjj");
      setSuggestionList(response.data.suggestionList)
      setConnectedList(response.data.connectedList.connections)
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  
  const [profiledrop,setprofiledrop]=useState(false)
  // const [showOwnCourse, setShowOwnCourse] = useState(false);

  
//   const gotoprofile=(id)=>{
//     axios.get('http://localhost:5000/othersprofile/'+id).then((res)=>{
//    console.log(res.data);
//    navigate('/otherprofile',{Data:res.data})
//  })
//   }


  const [showModal,setShowModal]=useState(false);
  const [modalData,setModalData]=useState({
    connectUserId:'',  
  })

  const modalshow=(id)=>{
    // e.preventDefault()
    setModalData({
      connectUserId:id
    })
    setShowModal(true)
  }

  const sendRequest=()=>{
  // console.log(modalData,'send requesst scucesssssssssssss');
  axios.post(`http://localhost:5000/sendRequest/${user._id}/${modalData.connectUserId}`).then((res)=>{
    console.log(res.data);
  })

  }

  const startChat=(recieverId)=>{
    const data={
      senderId:user._id,
      receiverId:recieverId
    }
  axios.post('http://localhost:5000/chat',data).then((res)=>{
    console.log(res.data);
    navigate('/chatbox')
  })

  }
  

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
            <Header/>
         
              {/* navbar div here close */}
           
            
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative min-h-screen flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-96">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                   
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                    
                    

                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    

                    
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
            
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      {/* <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p> */}
                      <h1 className='text-center text-2xl'>Connections</h1>
                 
                
                    </div>
                       
                  


{/* Connection cards start */}
<div class="xl:px-36 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-4 w-full">
{ 
 connectedList.map((obj,index)=>{
  return(  <div class="flex justify-between relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md">
	<img class="w-12 h-12 rounded-full bg-gray-100" src={profilepic} alt="" />
	<div class="ml-3">
	  <p class="font-medium text-gray-800 text-center">{obj.name}</p>
	 
	</div>
    <button onClick={()=>{startChat(obj._id)}} className='rounded-2xl bg-blue-500 p-1'><p class="text-white text-sm  text-center">Message</p></button>
  </div>
)

 })}
 

  
</div>
{/* connection ends */}

{/* suggestions start */}
<p className='mt-10'>People You may know?</p>
<div class="xl:px-36 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-4 w-full">
{ 
 suggestionList.map((obj,index)=>{
  return(  
  <div class="flex justify-between relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md">
	<img class="w-12 h-12 rounded-full bg-gray-100" src={PF+obj.profilePicture} alt="" />
	<Link key={index} to={'/otherprofile'} state={{otheruser:obj}}><div class="cursor-pointer ml-3">
	  <p class="font-medium text-gray-800 text-center">{obj.name}</p>
	</div></Link>
    <button onClick={(e)=>{modalshow(obj._id)}} className='rounded-2xl bg-blue-500 p-2'><p class="text-white text-sm  text-center">Connect</p></button>
  </div>
  
  )
  })
}
  
</div>
{/* suggestions ends */}



                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
   
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
                                <h3 className="text-3xl font-semibold">Connection Request</h3>
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

                                  <p>Are you sure that you want to send connection request?</p>
                                  <div className='flex justify-center'> 
                                    <button onClick={()=>{sendRequest();setShowModal(false)}} className='m-2 py-1 px-3 rounded-xl bg-green-300'>Yes</button>
                                    <button onClick={()=>{setShowModal(false)}} className='m-2 py-1 px-3 rounded-xl bg-red-300'>No</button>
                                  </div>
                                   
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

export default Connections