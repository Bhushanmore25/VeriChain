import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <>
        <div className='navbar h-12 bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg w-full flex justify-center gap-5 items-center px-14'>
            <div className='w-1/3'> apna logo</div>
            <div className='flex justify-around w-1/3 font-sans font-bold text-md'>
                <NavLink to="/admin/protected/" className={(e)=>{return e.isActive?"grey":""}}>Dashboard</NavLink>
                <NavLink to="/admin/protected/requests" className={(e)=>{return e.isActive?"grey":""}}>Requests</NavLink>
                <NavLink to="/admin/protected/complete" className={(e)=>{return e.isActive?"grey":""}}>Complete</NavLink>
            </div>
            <div className='w-1/3 flex justify-end'><li className='w-20 font-semibold flex text-white justify-center items-center text-md py-1  rounded-md cursor-pointer bg-blue-400'>Logout</li></div>
        </div>
    </>
  )
}

export default AdminNavbar