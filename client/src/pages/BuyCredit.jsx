import React from 'react'
import { plans } from '../assets/assets'

const BuyCredit = () => {
  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10">
      {/* Header */}
      <button className="border border-gray-400 px-8 py-2 rounded-full mb-6 text-sm tracking-wide hover:bg-gray-100 transition">
        Our Plans
      </button>

      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold 
        bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent 
        mb-6 sm:mb-10">
        Choose the plan that's right for you
      </h1>

      {/* Plans */}
      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 border border-gray-200 shadow-sm rounded-2xl p-6 w-[280px] 
              hover:scale-105 hover:shadow-xl transition-all duration-300 bg-white"
          >
            {/* External Image URL */}
            <img 
              width={40} 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkuL2tlWs487Ry6zgeAOt6M8bqnuIyYrcDbQ&s" 
              alt="plan logo" 
              className="mb-2" 
            />

            <h2 className="text-lg font-semibold text-gray-800">{item.id}</h2>
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>

            <p className="text-lg font-bold text-gray-800">
              <span className="text-indigo-600">${item.price}</span>
              <span className="text-sm text-gray-500"> / {item.credits} credits</span>
            </p>

            <button
              className="mt-2 bg-indigo-600 text-white py-2 rounded-lg font-medium
                hover:bg-indigo-700 transition-all"
            >
              Purchase
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit
