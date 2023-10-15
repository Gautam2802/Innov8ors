import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 lg:px-8">
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <p className="text-lg">Innov8ors</p>
        </div>
        <div className="text-center lg:text-right">
          <a href="#" className="text-sm hover:text-blue-400 transition">
            Privacy Policy
          </a>
          <span className="mx-4 hidden lg:inline">|</span>
          <a href="#" className="text-sm hover:text-blue-400 transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer