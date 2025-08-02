import React from 'react'
import backgroundImage from "../assets/images/bgimage.webp"

const AdminLogin = () => {
  return (
    <>
    <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    <div className='flex justify-center items-center '>
    <div className=' flex justify-center items-center h-[70vh] my-20 flex-col gap-5 w-[30vw] rounded-lg bg-slate-200 '>
        
    <h2 className='text-3xl my-5 py-1 font-sans font-bold border-b-4 shadow-lg px-7 border-stone-900 rounded-lg bg-slate-200'> Admin Login</h2>
        <input type="text" placeholder='Enter Email' className='border border-blue-700 px-2 w-80 rounded-md py-1' />
        <input type="password" placeholder='Enter Pasword' className='border border-blue-700 px-2 w-80 rounded-md py-1' />
        <button className=' w-80 py-1 rounded-md bg-blue-800 text-white font-semibold'>Login</button>
    </div>
  </div>
  </div>
  </>
  )
}

export default AdminLogin