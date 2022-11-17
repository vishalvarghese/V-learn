import React, { useState } from 'react'
import Vlearnlogo from '../../asset/Vlearn-logos_transparent.png'
import loginpageimg from '../../asset/loginpageimg.webp'
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux'
import { login } from '../../redux/userSlice';
function Loginform() {
  const navigate = useNavigate()
const dispatch=useDispatch()
  const formvalues = {
    email: "",
    password: ""
  }
  const [errorMessage, setErrorMessage] = useState('')
  const [loginData, setloginData] = useState(formvalues);
  const [cookie, setCookie] = useCookies(['user'])
  const handleChange = (e) => {
    setloginData({ ...loginData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      if (!loginData.email) {
        setErrorMessage("Email is required");
      } else if (!loginData.email.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
        setErrorMessage("Enter a valid email");
      } else if (!loginData.password) {
        setErrorMessage("Password is required");
      } else if (loginData.password.length < 4) {
        setErrorMessage("Password must be atleast 4 characters");
      } else if (loginData.password.length > 20) {
        setErrorMessage("Password must be less than 20 characters");
      } else {
        axios
          .post("http://localhost:5000/login", loginData)
          .then((response) => {
            console.log(response.data.error);
            setErrorMessage(response.data.error)
            if (response.data.state === "ok") {
              // alert("login sucessful")
              localStorage.setItem('usertoken', response.data.userdata)
            localStorage.setItem('user',JSON.stringify(response.data.user))
            dispatch(login(response.data.user))
              navigate("/feed")
            }

          })
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className='flex justify-evenly'>
        <div className='hidden md:block font-bold'><p className='text-2xl pt-5'> IF <span className='text-4xl text-blue-900'> OPPORTUNITY</span> <br /> DOESN'T KNOCK,<br /><span className='text-4xl text-blue-900'> BUILD A DOOR.</span></p></div>
        <div> <img className='w-40 h-45 m-4' src={Vlearnlogo} alt="" /></div>
        <div className='p-5'>NEW TO <Link to='/signup'><span className='text-blue-900'> V-LEARN?</span></Link></div>
      </div>

      <div className=' md:flex-row md:flex md:justify-evenly '>
      <div className='flex justify-center'><img className='w-75 h-72 m-3' src={loginpageimg} alt="" /></div>

      <div className='m-3 md:w-96 flex justify-center'>
          {/* //start */}
         
          <form className='pl-4 max-w-[400px] w-full h-max mx-auto rounded-lg bg-slate-300 p-8 px-8 '>
            {errorMessage && <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">{errorMessage}</div>}
            <h2 className='text-4xl text-white font-extrabold text-center'>LOGIN</h2>


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
        {/* login form */}
     
    

      </div>

      <div className='w-full mt-9 bg-slate-300'>
        <img className='w-36 h-36 ' src={Vlearnlogo} alt="" />
      </div>

    </div>
  )
}
export default Loginform
