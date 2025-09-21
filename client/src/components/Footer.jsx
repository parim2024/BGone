import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo + Brand */}
        <div>
          <Link to='/' className="flex items-center gap-2 mb-4">
            <img  
              className='w-12 sm:w-16 h-auto object-contain' 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkuL2tlWs487Ry6zgeAOt6M8bqnuIyYrcDbQ&s" 
              alt="logo" 
            />
            <span className="font-bold text-xl text-white">BGone</span>
          </Link>
          <p className="text-sm text-gray-400">
            Remove backgrounds instantly with high accuracy and quality.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-white mb-2">Quick Links</h3>
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/features" className="hover:text-white">Features</Link>
          <Link to="/pricing" className="hover:text-white">Pricing</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} BGone. All rights reserved.</p>
        <p className="mt-1">Made with ❤️ by <span className="font-semibold text-white">Paridhi Mittal</span></p>
      </div>
    </footer>
  )
}

export default Footer
