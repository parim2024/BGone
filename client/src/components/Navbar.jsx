import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, useUser, UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  return (
    <div className='flex justify-between items-center mx-4 py-3 lg:mx-44'>
      
      {/* Logo + Name together */}
      <Link to='/' className="flex items-center gap-2">
        <img  
          className='w-12 sm:w-16 h-auto object-contain' 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkuL2tlWs487Ry6zgeAOt6M8bqnuIyYrcDbQ&s" 
          alt="logo" 
        />
        <span className="font-bold text-lg sm:text-xl">BGone</span>
      </Link>

      {/* Right side */}
      {isSignedIn ? (
        <div className="flex items-center gap-3">
          <UserButton afterSignOutUrl="/" />
          <span className="hidden sm:block font-medium text-gray-700">
            {user?.firstName || user?.username || "User"}
          </span>
        </div>
      ) : (
        <button
          onClick={() => openSignIn({})}
          className="bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full hover:bg-zinc-700 transition"
        >
          Get Started 
          <img className="w-3 sm:w-4" src={assets.arrow_icon} alt=""/>
        </button>
      )}
    </div>
  )
}

export default Navbar
