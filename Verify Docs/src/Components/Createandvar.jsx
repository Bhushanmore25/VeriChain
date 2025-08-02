import React from 'react'

const Createandvar = () => {
  return (
    <>
      <div className='bg-slate-300 container w-[60vw] h-auto shrink'>
        <h1 className='text-center text- font-semibold py-10 text-2xl'>Create and Verify Documents</h1>
        <div className='flex flex-col gap-32 py-6 px-4'>
          <div className='w-[60vw] flex justify-center items-center '>
          <label className='text- text-sm font-semibold px-6'>Upload your Image: </label>
          <input type="file" placeholder='Enter Your Name' className='border border-blue-700 px-2 w-80 rounded-md py-1' />
          </div>
          <div className='flex flex-row gap-32'>
          <div className=' flex flex-col gap-4'>
          <label className='text- text-sm font-semibold'>Document Type: </label>
          <select className='border border-blue-700 px-2 w-80 rounded-md py-1'>
            <option value='1'>Aadhar Card</option>
            <option value='2'>Pancard</option>
            <option value='3'>Voter ID</option>
          </select>
          <label className='text- text-sm font-semibold'>Name: </label>
          <input type="text" placeholder='Enter Your Name' className='border border-blue-700 px-2 w-80 rounded-md py-1' />
          <label className='text- text-sm font-semibold'>Date of Birth: </label>
          <input type="date" className='border border-blue-700 px-2 w-80 rounded-md py-1' /></div>
          <div className=' flex flex-col gap-4'>
          <label className='text- text-sm font-semibold'>Phone Number: </label>
          <input type="text" placeholder='Enter Your Phone Number' className='border border-blue-700 px-2 w-80 rounded-md py-1' />
          <label className='text- text-sm font-semibold'>Address :</label>
          <input type="text" placeholder='Enter Your Address' className='border border-blue-700 px-2 w-80 rounded-md py-1' />
          <label className='text- text-sm font-semibold'>Pincode :</label>
          <input type="text" placeholder='Enter Your Pincode' className='border border-blue-700 px-2 w-80 rounded-md py-1' /></div>
        </div></div>
      <div className='flex justify-end mx-36'><li className='w-40 font-semibold flex text-white justify-center items-center text-md py-2  rounded-md cursor-pointer bg-blue-700'>Submit</li></div>
      </div>
    </>
  )
}

export default Createandvar