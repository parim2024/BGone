import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      
      {/* Left side */}
      <div className="text-center sm:text-left max-w-xl">
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
          Remove the <br />  
          <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>
            background
          </span> 
          <br /> from your images instantly
        </h1>

        <p className='my-6 text-lg text-gray-600'>
          Upload your photo and let our AI-powered tool cleanly remove the background.  
          Get high-quality results in seconds — no design skills needed!
        </p>

        <div>
          <input type="file" id="upload1" hidden />
          <label 
            htmlFor="upload1" 
            className='inline-flex items-center gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-medium shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-500'
          >
            <img src={assets.upload_btn_icon} alt="Upload Icon" className="w-5 h-5" />
            <span>Upload your image</span>
          </label>
        </div>
      </div>

      {/* Right side */}
      <div className="flex justify-center sm:justify-end w-full">
        <img 
          src={assets.header_img} 
          alt="Header Visual" 
          className="w-[90%] sm:w-[450px] lg:w-[500px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-700"
        />
      </div>


      
    </div>
  )
}

export default Header
