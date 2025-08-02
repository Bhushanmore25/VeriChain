// import React from 'react'
// import profileimage from "../assets/images/footer-bg.jpg"
// const UserProfile = () => {
//   return (
//     <>
//         <div className='container bg-slate-800 w-80 rounded-lg h-[65vh] block'>
//             <h1 className='text-center text-white font-semibold py-10 text-lg font-sans '>User Profile</h1>
//             <div className='flex justify-center items-center'>
//                 <img src={profileimage} alt='user_icon.png' className='w-40 h-40 rounded-full'/>
//             </div>
//             <div className='flex flex-col gap-2 py-6 px-4'>
//                 <p className='text-white text-sm'>Username: {}</p>
//                 <p className='text-white text-sm'>Email: {}</p>
//             </div>
//             <div className='flex justify-center items-center py-6'>
//                 <button className='w-40 py-2 bg-blue-400 text-white font-semibold rounded-md'>Edit Profile</button>
//             </div>
//         </div>
//     </>
//   )
// }

// export default UserProfile
import React from 'react';
import profileimage from "../assets/images/footer-bg.jpg";

const UserProfile = () => {
  
  return (
    // <div className="bg-slate-800 w-80 rounded-lg h-[65vh] p-6">
    <div className="bg-slate-800 w-4/5 rounded-lg h-[65vh] p-6">
      <h1 className="text-center text-white font-semibold text-lg font-sans">User Profile</h1>
      <div className="flex justify-center items-center mt-6">
        <img src={profileimage} alt="user_icon.png" className="w-40 h-40 rounded-full" />
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <p className="text-white text-sm">Username: John Doe</p>
        <p className="text-white text-sm">Email: john.doe@example.com</p>
      </div>
      <div className="flex justify-center items-center mt-6">
        <button className="w-40 py-2 bg-blue-400 text-white font-semibold rounded-md">Edit Profile</button>
      </div>
    </div>
  );
};

export default UserProfile;
