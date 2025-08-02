import './App.css'
import Login from './page/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './page/SignUp'
import User from './page/User'
import Admin from './page/ADmin'
import AdminLogin from './page/AdminLogin'
import AdminSignup from './page/AdminSignup'
import UserDocs from './page/UserDocs'
import AdminRequests from './page/AdminRequests'
import AdminComplete from './page/AdminComplete'
import CompletedAadhar from './page/CompletedAadhar'
import CompletedPancard from './page/CompletedPancard'
import CompletedVoter from './page/CompletedVoter'
import RequestedAadhar from './page/RequestedAadhar'
import RequestedPancard from './page/RequestedPancard'
import RequestedVoter from './page/RequestedVoter'
import CreateAndVerify from './page/CreateAndVerify'
import Home from './page/Home'
import Navbar from './Components/Navbar'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Home/></>
    },
    {
      path:'/login',
      element:<><Navbar/><Login/></>
    },
    {
      path:'/user',
      element:<><User/></>
    },
    {
      path:'/createandverify',
      element:<><CreateAndVerify/></>
    },
    {
      path:'/signUp',
      element:<><Navbar/><SignUp/></>
    },
    {
      path:'/mydocs',
      element:<><UserDocs/></>
    },
    {
      path:'/admin/protected',
      element:<><Admin/></>
    },
    {
      path:'/admin/protected/login',
      element:<><AdminLogin/></>
    },
    {
      path:'/admin/protected/signup',
      element:<><AdminSignup/></>
    },
    {
      path:'/admin/protected/requests',
      element:<><AdminRequests/></>
    },
    {
      path:'/admin/protected/requests/aadhar',
      element:<><RequestedAadhar/></>
    },
    {
      path:'/admin/protected/requests/pancard',
      element:<><RequestedPancard/></>
    },
    {
      path:'/admin/protected/requests/voterid',
      element:<><RequestedVoter/></>
    },
    {
      path:'/admin/protected/complete',
      element:<><AdminComplete/></>
    },
    {
      path:'/admin/protected/completed/addhar',
      element:<><CompletedAadhar/></>
    },
    {
      path:'/admin/protected/completed/pancard',
      element:<><CompletedPancard/></>
    },
    {
      path:'/admin/protected/completed/voterid',
      element:<><CompletedVoter/></>
    },
  ])

  return (
    <>
    <RouterProvider router={router}>
      {router.element}
    </RouterProvider>
    </>
  )
}

export default App
