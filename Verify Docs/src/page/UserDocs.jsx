import React from 'react'
import UserNavbar from "../Components/UserNavbar.jsx"
import MyDocs from "../Components/MyDocs.jsx"
import UserProfile from '../Components/UserProfile.jsx'
const UserDocs = () => {
  return (
    <>
        <UserNavbar />
        <div className="container mx-auto mt-10 flex gap-8 justify-center">
        <div className="w-1/3">
          <UserProfile />
        </div>
        <div className="w-2/3 mx-16">
         <MyDocs/>
        </div>
      </div>
    </>
  )
}

export default UserDocs