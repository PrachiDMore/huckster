import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className='w-screen h-28 px-10  flex justify-between items-center'>
      <div className='flex gap-2 items-center'>
        <AiOutlineMenu  className='text-xl'/>
        <p>Menu</p>
      </div>
      <div>
        <img className='w-36' src="/assets/HucksterLogo.png" alt="" />
      </div>
      <div>
        <FiSearch className='text-xl '/>
      </div>
    </div>
  )
}

export default Navbar
