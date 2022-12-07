import React,{useState} from 'react'
import Vlearnlogo from '../../asset/Vlearn-logos_transparent.png'
import adminimg from '../../asset/adminimg.webp'
import {useNavigate} from "react-router-dom";
import axios from "axios"
function Adminsignup() {
  const navigate=useNavigate()
  const formvalues ={
    email:"",
    password:""
   }
   const [errorMessage, setErrorMessage] = useState('')
  const [adminLoginData,setadminLoginData]=useState(formvalues);
  const handleChange= (e) =>{
    setadminLoginData({...adminLoginData,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios
    .post("http://localhost:5000/adminlogin",adminLoginData)    
    .then((response)=>{
      console.log(response);
      setErrorMessage(response.data.error)
      if (response.data.state=="ok") {
        console.log(response.data.admindata);
        alert("login sucessful")
        localStorage.setItem("admintoken",response.data.admindata)
      navigate("/adminuserlist")
      }
    }) 
    .catch((error)=>{
      console.log(error);
    })
   }
  return (
    <div>
 
      <div className='flex justify-evenly'>
        {/* <div className='font-bold'><p className='text-2xl pt-5'> IF <span className='text-4xl text-blue-900'> OPPORTUNITY</span> <br /> DOESN'T KNOCK,<br /><span className='text-4xl text-blue-900'> BUILD A DOOR.</span></p></div> */}
        <div> <img className='w-40 h-45 m-4' src={Vlearnlogo} alt="" /></div>
        {/* <div className='p-5'>NEW TO <Link to='/signup'><span className='text-blue-900'> V-LEARN?</span></Link></div> */}
      </div>

      <div className='flex justify-evenly'>
      <div><img className='w-80 h-80' src={adminimg} alt="" /></div>
        {/* login form */}
        <div className='w-96'>
          {/* //start */}
          <form className='max-w-[400px] w-full h-max mx-auto rounded-lg bg-slate-300 p-8 px-8 '>
          {errorMessage && <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">{errorMessage}</div>}
            <h2 className='text-4xl text-white font-extrabold text-center'>ADMIN</h2>


            <div className='flex flex-col text-gray-400 py-2'>
              <label className='text-blue-900 text-bold'>Email</label>
              <input className='rounded-lg bg-white mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text"
                name='email'
                onChange={handleChange}
                required />
            </div>
            <div className='flex flex-col text-blue-900 py-2'>
              <label className=''>Password</label>
              <input className='p-2 rounded-lg bg-white mt-2 focus:border-blue-500 focus:bg-gray-900 focus:outline-none' type="password"
                name='password'
                onChange={handleChange}
                required />
            </div>

            <button onClick={handleSubmit} type='Submit' className='w-full my-5 py-2 bg-blue-900 shadow-lg hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
            >LOGIN</button>
            {/* <Link className='text-white underline' to="/signup">Sign up</Link> */}

          </form>
          {/* //end */}
        </div>
        

      </div>

      <div className='w-screen mt-9 bg-slate-300'>
        <img className='w-36 h-36 ' src={Vlearnlogo} alt="" />
       </div>
    
    </div>
  )
}

export default Adminsignup
