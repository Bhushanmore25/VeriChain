import React from 'react'
import video1 from "../assets/hero1.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      {/* <h1 className="text-xl sm:text-6xl lg:text-7xl text-center tracking-wide"> */}
      <h1 className="text-6xl text-center tracking-wide">
      VeriChain: Your AI-Powered Gateway 
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          to Secure Document Verification
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Experience the future of secure and seamless document verification. Our AI-driven system, backed by blockchain, ensures unmatched accuracy and privacy for all your digital documents.
      </p>
      {/* <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          About Us
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Contact
        </a>
      </div> */}
      {/* <div className="flex mt-10 justify-center gap-1 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-[45vw] border h-auto border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-[45vw] border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </div>
  )
}

export default HeroSection