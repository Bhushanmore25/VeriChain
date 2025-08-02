import React from 'react'
import backgroundImage from "../assets/images/bgimage.webp"

const AdminSignup = () => {
  return (
    <>
    <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        <div className='flex justify-center items-center flex-col '>
          <div className=' flex justify-center items-center h-[70vh] my-20 flex-col gap-5 w-[30vw] rounded-lg bg-slate-200 '>
                <h2 className='text-3xl my-5 py-1 font-sans font-bold border-b-4 border-stone-900 shadow-lg px-7 rounded-lg bg-slate-200'> Admin SignUp</h2>
              <input type="text" placeholder='Enter Username' className='border border-blue-700 shadow-lg px-2 w-80 rounded-md py-1' />
              <input type="text" placeholder='Enter Email' className='border border-blue-700 shadow-lg px-2 w-80 rounded-md py-1' />
              <input type="password" placeholder='Enter Pasword' className='border border-blue-700 shadow-lg px-2 w-80 rounded-md py-1' />
              <button className=' w-80 py-1 my-6 rounded-md bg-blue-500 shadow-lg text-white font-semibold'>SignUp</button>
          </div>
        </div>
        </div>
    </>
  )
}

export default AdminSignup