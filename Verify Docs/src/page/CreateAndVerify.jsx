import React from 'react'
import UserNavbar from '../Components/UserNavbar'
import UserProfile from '../Components/UserProfile'
import Createandvar from '../Components/Createandvar'
const CreateAndVerify = () => {
  return (
    <>
    <UserNavbar />
      <div className="container mx-auto mt-10 flex gap-8">
        <div className="w-1/3">
          <UserProfile />
        </div>
        <div className="w-2/3">
          <Createandvar/>
        </div>
      </div>
    </>
  )
}

export default CreateAndVerify