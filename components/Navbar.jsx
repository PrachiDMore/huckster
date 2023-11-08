import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className='w-screen flex justify-center'>
      <div className='w-11/12 h-20 px-16 rounded-full  flex justify-between items-center fixed top-5 z-50 bg-black/20 backdrop-blur-sm'>
        {/* <div className='flex gap-2 items-center'>
          <AiOutlineMenu  className='text-xl'/>
          <p>Menu</p>
        </div> */}
        <div>
          <img className='w-36' src="/assets/HucksterLogo.png" alt="" />
        </div>
        <div className='flex gap-10 text-lg'>
          <p>Home</p>
          <p>About Us</p>
          <p>Our Work</p>
          <p>Our Services</p>
          <p>Media Blogs</p>
          <p>Contact Us</p>
        </div>
        <div>
          <FiSearch className='text-xl '/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
