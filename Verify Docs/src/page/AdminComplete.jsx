import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import AdminCom from '../Components/AdminCom'
import AdminProfile from '../Components/AdminProfile'

const AdminComplete = () => {
  return (
    <>
        <AdminNavbar/>
        <div className="container mx-auto mt-10 flex gap-8">
        <div className="w-1/3">
          <AdminProfile />
        </div>
        <div className="w-2/3">
          <AdminCom/>
        </div>
        </div>
    </>
  )
}

export default AdminComplete