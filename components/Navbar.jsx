import { Syne } from 'next/font/google'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'

const syne = Syne({ subsets: ['latin'] })

const Navbar = () => {
  return (
    <div className={'w-screen flex justify-center ' + syne.className}>
      <div className='w-9/12 h-20 px-16 rounded-full  flex justify-between items-center fixed top-5 z-50 bg-gradient-to-b from-transparent to-black/50 backdrop-blur-md'>
        {/* <div className='flex gap-2 items-center'>
          <AiOutlineMenu  className='text-xl'/>
          <p>Menu</p>
        </div> */}
        <div>
          <img className='w-32' src="/assets/HucksterLogo.png" alt="" />
        </div>
        <div className='flex gap-10'>
          <p>Home</p>
          <p>About Us</p>
          <p>Our Work</p>
          <p>Our Services</p>
          <p>Media Blogs</p>
          <p>Contact Us</p>
        </div>
        {/* <div>
          <FiSearch className='text-xl '/>
        </div> */}
      </div>
    </div>
  )
}

export default Navbar
