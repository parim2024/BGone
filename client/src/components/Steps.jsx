import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
        Steps to remove background <br/> from an image in seconds
      </h1>
    
      {/* wrapper div for all steps */}
      <div className="mt-16 xl:mt-24 flex flex-col lg:flex-row items-center justify-center gap-10">
        
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center bg-white border drop-shadow-md p-7 rounded-xl w-full sm:w-[300px] hover:scale-105 transition-all duration-500">
          <img className="w-12 mb-4" src={assets.upload_icon} alt="Upload Icon" />
          <p className="text-xl font-medium">Upload Image</p>
          <p className="text-sm text-neutral-500 mt-2">Choose an image from your device that you want to edit.</p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center bg-white border drop-shadow-md p-7 rounded-xl w-full sm:w-[300px] hover:scale-105 transition-all duration-500">
          <img className="w-12 mb-4" src={assets.remove_bg_icon} alt="Remove BG Icon" />
          <p className="text-xl font-medium">Remove Background</p>
          <p className="text-sm text-neutral-500 mt-2">Our AI instantly removes the background with just one click.</p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center bg-white border drop-shadow-md p-7 rounded-xl w-full sm:w-[300px] hover:scale-105 transition-all duration-500">
          <img className="w-12 mb-4" src={assets.download_icon} alt="Download Icon" />
          <p className="text-xl font-medium">Download Result</p>
          <p className="text-sm text-neutral-500 mt-2">Save your new image without the background in high quality.</p>
        </div>
      </div>
    </div>
  )
}

export default Steps
