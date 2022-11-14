import React,{useState} from 'react'
import Vlearnlogo from '../../asset/Vlearn-logos_transparent.png'
import signimg from '../../asset/signupimg.webp'
import {Link,useNavigate} from "react-router-dom";
import axios from 'axios'
function Signupform() {
  const navigate =useNavigate()
  const formvalues ={
    name:"",
    email:"",
    phonenumber:"",
    password:"",
    confirmpassword:""
   }
   const [signup,setSignup]=useState(formvalues);
   const [errorMessage, setErrorMessage] = useState('')
 
const handleChange= (e) =>{
  setSignup({...signup,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
  e.preventDefault()
try {
  if(!signup.name)
  {
    setErrorMessage("Name is required")
  }else if(signup.name.length<3)
  {
setErrorMessage('Name must be atleast 3 characters')
  } else if (!signup.name.match(/^[A-Za-z][A-Za-z ]*$/)) 
  {
    setErrorMessage("Enter a valid name");
   }
   else if (!signup.email) {
    setErrorMessage("Email is required");
} else if (!signup.email.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
    setErrorMessage("Enter a valid email");
}
else if (!signup.phonenumber) {
  setErrorMessage("Phone is required");
} else if (signup.phonenumber.match(/[^0-9]/g)) {
  setErrorMessage("Enter a valid Phone number");
} else if (signup.phonenumber.length !== 10) {
  setErrorMessage("Phone must be 10 characters");
}
 else if (!signup.password) {
    setErrorMessage("Password is required");
} else if (signup.password.length < 4) {
    setErrorMessage("Password must be atleast 4 characters");
} else if (signup.password.length > 20) {
    setErrorMessage("Password must be less than 20 characters");
}
else if (signup.password!=signup.confirmpassword) {
  setErrorMessage("Password mismatch");
}
  else{
    axios
    .post("http://localhost:5000/signup",signup)    
    .then((res)=>{
      navigate("/login")
    })
  }
   

}catch(error){
console.log(error.message);
}
}

  return (
    <div>
      <div className='flex justify-between'>
        <div> <img className='w-52 h-45 m-4 ml-20' src={Vlearnlogo} alt="" /></div>
                <div className='font-bold'><p className='mt-28 text-4xl pt-5 text-blue-900'>Create Account </p></div>

        <div className='p-5 mr-20'>ALREADY IN <Link to='/login'><span className='text-blue-900'> V-LEARN?</span></Link></div>
      </div>

      <div className='flex justify-evenly'>
      <div><img className='' src={signimg} alt="" /></div>
        {/* login form */}
        <div className='w-1/2'>
          {/* //start */}
          <form className='max-w-[400px] w-full h-max mx-auto rounded-lg bg-slate-300 p-8 px-8 '>
          {errorMessage && <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">{errorMessage}</div>}
            <h2 className='text-4xl text-white font-extrabold text-center'>Sign Up</h2>

            <div className='flex flex-col text-gray-400 py-2'>
              <label className='text-blue-900 text-bold'>Name</label>
              <input className='rounded-lg bg-white mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text"
                name='name'
                onChange={handleChange}
                required />
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
              <label className='text-blue-900 text-bold'>Email</label>
              <input className='rounded-lg bg-white mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email"
                name='email'
                onChange={handleChange}
                required />
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
              <label className='text-blue-900 text-bold'>Phone number</label>
              <input className='rounded-lg bg-white mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="number"
                name='phonenumber'
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
            <div className='flex flex-col text-blue-900 py-2'>
              <label className=''>Confirm Password</label>
              <input className='p-2 rounded-lg bg-white mt-2 focus:border-blue-500 focus:bg-gray-900 focus:outline-none' type="password"
                name='confirmpassword'
                onChange={handleChange}
                required />
            </div>
            <button onClick={handleSubmit} type='Submit' className='w-full my-5 py-2 bg-blue-900 shadow-lg hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Submit</button>
            {/* <Link className='text-white underline' to="/signup">Sign up</Link> */}

          </form>
          {/* //end */}
        </div>
        

      </div>

      <div className='w-auto mt-9 bg-slate-300'>
        <img className='w-36 h-36 ' src={Vlearnlogo} alt="" />
       </div>
    
    </div>
  )
}

export default Signupform
