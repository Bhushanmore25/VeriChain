import React from 'react'
import { NavLink } from 'react-router-dom'
const UserNavbar = () => {
  return (
    <>
        <div className='navbar h-12 bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg w-full flex justify-center gap-5 items-center px-14'>
            <div className='w-1/3'> apna logo</div>
            <div className='flex justify-around w-1/3 font-sans font-bold text-md'>
                <NavLink to="/user"className={(e)=>{return e.isActive?"grey":""}}>DashBoard</NavLink>
                <NavLink to="/mydocs" className={(e)=>{return e.isActive?"grey":""}}>My Docs</NavLink>
                <NavLink to="/createandverify" className={(e)=>{return e.isActive?"grey":""}}>Create & Verify</NavLink>
            </div>
            <div className='w-1/3 flex justify-end'><li className='w-20 font-semibold flex text-white justify-center items-center text-md py-1  rounded-md cursor-pointer bg-blue-400'>Logout</li></div>
        </div>
    </>
  )
}

export default UserNavbar