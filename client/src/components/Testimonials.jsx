import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className="py-10">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-10">
        What Our Users Say
      </h1>

      <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonialsData.map((item, index) => (
          <div 
            key={index} 
            className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-4 transition-transform transform hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-300 duration-300"
          >
            {/* Quote */}
            <p className="text-gray-800 italic text-lg leading-relaxed">
              "{item.text}"
            </p>

            {/* Author section */}
            <div className="flex items-center gap-4 mt-auto">
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.author} 
                className="w-14 h-14 rounded-full object-cover border-2 border-gray-200 hover:border-gray-400 transition-colors duration-300" 
              />

              {/* Author Info */}
              <div>
                <p className="text-gray-900 font-semibold">{item.author}</p>
                <p className="text-gray-500 text-sm">{item.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
