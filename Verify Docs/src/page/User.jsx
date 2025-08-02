// import React from 'react'
// import UserNavbar from '../Components/UserNavbar'
// import UserProfile from '../Components/UserProfile'
// import DetailsTable from '../Components/DetailsTable'
// import { useParams } from 'react-router-dom'
// import MyDocs from '../Components/MyDocs'
// import { useLocation } from 'react-router-dom';


// const User = () => {
//   const param=useParams();
//   const location = useLocation();
//   return (
//     <>
//         <UserNavbar/>
//         <div className='container flex gap-32'>
//           <UserProfile/>
//           {location.pathname === '/mydocs' ? <MyDocs /> : <DetailsTable />}
          
//         </div>
//     </>
//   )
// }

// export default User
import React, { useEffect } from 'react';
import UserNavbar from '../Components/UserNavbar';
import UserProfile from '../Components/UserProfile';
import DetailsTable from '../Components/DetailsTable';

const User = () => {
  
  return (
    <>
      <UserNavbar />
      <div className="container mx-auto mt-10 flex gap-8">
        <div className="w-1/3">
          <UserProfile />
        </div>
        <div className="w-2/3">
          <DetailsTable/>
        </div>
      </div>
    </>
  );
};

export default User;
