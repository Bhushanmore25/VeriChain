import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import AdminProfile from '../Components/AdminProfile'
import Adminreq from '../Components/Adminreq'
const AdminRequests = () => {
  return (
    <>
        <AdminNavbar/>
        <div className="container mx-auto mt-10 flex gap-8">
        <div className="w-1/3">
          <AdminProfile />
        </div>
        <div className="w-2/3">
          <Adminreq/>
        </div>
      </div>
    </>
  )
}

export default AdminRequests