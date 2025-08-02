import React,{useRef} from 'react'
import { FaArrowRight } from "react-icons/fa";

const Adminreq = () => {
  const ref1=useRef();
  const ref2=useRef();
  const ref3=useRef();
  const Aadhar=()=>{
      window.location.href = "/admin/protected/requests/aadhar";
      
  }
  const Pancard=()=>{
      window.location.href = "/admin/protected/requests/pancard";

  }
  const Voter=()=>{
      window.location.href = "/admin/protected/requests/voterid";

  }
  return (
    <>
        <div>
    <h3 className=' text-6xl mt-16 font-sans font-bold mb-9'>Requested Docs</h3>
<div className="w-[60vw] mx-20 bg-white shadow-2xl rounded-lg overflow-hidden float-right">
<div className="p-4 bg-indigo-600 text-white text-center font-semibold text-lg">My Document</div>
<div className="overflow-x-auto">
  <table className="min-w-full leading-normal">
    <thead>
      <tr>
        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Sr No.
        </th>
        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Document Name
        </th>
        {/* <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Date
        </th> */}
        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Status
        </th>
        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          
        </th>
       
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-100">
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">1</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">Aadhar Card</p>
        </td>
        {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">2024-08-27</p>
        </td> */}
        {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
            <span className="relative">Approved</span>
          </span>
        </td> */}
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm cursor-pointer" ref={ref1} onClick={Aadhar}>
        <FaArrowRight />
        </td>
      </tr>
      <tr className="hover:bg-gray-100">
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">2</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">Pancard </p>
        </td>
        {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">2024-08-26</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
            <span aria-hidden className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"></span>
            <span className="relative">Pending</span>
          </span>
        </td> */}
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm cursor-pointer" ref={ref2} onClick={Pancard}>
        <FaArrowRight />
        </td>
      </tr>
      <tr className="hover:bg-gray-100">
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">3</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">Voter Id</p>
        </td>
        {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">2024-08-25</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
            <span aria-hidden className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
            <span className="relative">Rejected</span>
          </span>
        </td> */}
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm cursor-pointer" ref={ref3} onClick={Voter}>
        <FaArrowRight />
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>
</div>
    </>
  )
}

export default Adminreq