import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/images/uidai_english_logo.png"
// import logo2 from "../assets/images/"
const Navbar = () => {
  return (
    <div className='bg-transparent flex justify-between items-center'>
    <img src={logo} alt='uidai_english_logo.png' className='w-80 py-2 px-10'/>
    <img src="https://uidai.gov.in/images/logo/aadhaar_english_logo.svg" alt="uidai_english_logo.png" />
    <div className='flex gap-8 px-10'>
        <Link to="/login" className={(e)=>{return e.isActive?"grey":""}}>
            <li className='w-20 font-semibold flex text-white justify-center items-center text-md py-1 border rounded-md cursor-pointer bg-blue-700'>Login</li>
        </Link>
        <Link to="/signUp" className={(e)=>{return e.isActive?"grey":""}}>
            <li className='w-20 font-semibold flex text-white justify-center items-center text-md py-1 border rounded-md cursor-pointer bg-blue-700'>SignUp</li>
        </Link>
   
    </div>
    </div>
  )
}

export default Navbar