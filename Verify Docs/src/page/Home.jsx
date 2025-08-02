import React from 'react'
import Spline from '@splinetool/react-spline';
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import HeroSection from '../Components/HeroSection'
import AboutUs from '../Components/AboutUs'
const Home = () => {
  return (
    <>
        <div className='fixed -z-50 h-screen w-screen opacity-75'><Spline scene="https://prod.spline.design/Q5UPtVt9ujV6iYgg/scene.splinecode" />
        </div>
        <Navbar/>
        <HeroSection/>
        <AboutUs/>
        <Footer/>

    </>
  )
}

export default Home