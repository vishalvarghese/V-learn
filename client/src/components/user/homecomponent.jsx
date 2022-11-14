import React from 'react'
import Vlearnlogo from '../../asset/Vlearn-logos_transparent.png'
import homepic1 from '../../asset/homepic1.webp'
import homepic2 from '../../asset/homepic2.webp'
import homepic3 from '../../asset/homepic3.webp'
import {Link} from "react-router-dom";
import homepic1_2 from '../../asset/homepic1.2.jpeg'
import "./homecomponent.css";
function homecomponent() {
  return (
    <div>
      
        <div className='flex justify-between'>       
            <div> <img className='w-36 h-36 m-4'  src={Vlearnlogo} alt="" /></div>
       
            <div>
            <Link to='/login'> <button className='bg-blue-900 text-white rounded p-2 m-3'>Sign In</button></Link>
            <Link to='/signup'><button className='bg-blue-900 text-white rounded p-2 m-3'>Sign Up</button></Link>
            </div>
         </div>
       
       <div className='lg:flex'>
           <div >
           <img className='m-3' src={homepic1} alt="" />
           </div>
      
           <div >
                  <div><img className='' src={homepic1_2} alt="" /></div>
           </div>
       </div>

       <div className='flex'>
            <div className='w-1/2 text-center m-16'>
               <div className='text-6xl text-blue-900 font-bold m-3'>SHARE</div>
               <div><p className='text-3xl m-3'>YOUR KNOWLEGDGE FOR THE WORLD <br/> TO LEARN</p></div>
               <button className='bg-blue-900 text-white rounded p-2 m-3'>POST NOW</button>
           </div>
           <div><img src={homepic2} alt="" /></div>
       </div>

       <div className='flex'>
             <div>  <img src={homepic3} alt="" /></div>
       
             <div className='w-1/2 text-center m-40'>
                 <div><p className='text-3xl m-3'> <span className='text-blue-900'> CONNECT </span> WITH <span className='text-blue-900'> TOP EDUCATORS</span>  <br/> WHO CAN HELP</p></div>
                 <button className='bg-blue-900 text-white rounded p-2 m-3'>Connect</button>
              </div>
        </div>

       <div>
            <div className="homepic_4  text-center justify-items-end">
            
             <p className='text-2xl '> JOIN YOUR COLLEAGUES,<br/> CLASSMATES AND FRIENDS ON <span className='text-blue-900'> V-LEARN</span></p>
            </div>
       </div>

       <div className='w-auto bg-slate-300'>
        <img className='w-36 h-36 ' src={Vlearnlogo} alt="" />
       </div>

    </div>
  )
}

export default homecomponent
