import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white py-1.5'>
      <div className='border-t border-gray-600 pt-4 flex justify-center md:flex-row items-center'>
        <p className='text-gray-400'>
            &copy; {new Date().getFullYear()} Arka, All right reserved
        </p>
      </div>
      <div className='flex justify-center items-center space-x-4'>
        <a href="#" className='text-gray-400 hover:text-white'>Privacy</a>
        <a href="#" className='text-gray-400 hover:text-white'>Terms of Services</a>
      </div>
    </div>
  )
}

export default Footer
