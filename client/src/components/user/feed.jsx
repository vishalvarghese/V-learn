import React from 'react'
import Vlearnlogo from '../../asset/Vlearn-logos_transparent.png'
function feed() {
  return (
    <div>
         {/*feed header start*/}
       
     

          {/* header end */}
      <h1>this is your feed page</h1>
      <div className='w-screen mt-9 bg-slate-300'>
        <img className='w-36 h-36 ' src={Vlearnlogo} alt="" />
       </div>
    </div>
  )
}

export default feed
