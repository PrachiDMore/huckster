import React from 'react'
import { BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs'
import { BiLogoLinkedin } from 'react-icons/bi'
import { FaFacebookF, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full border-white/70 border-t-[1px]'>
      <div className='w-screen h-1/2 px-28 py-16 flex flex-col gap-8 bg-black  text-white'>
        <div className='flex justify-between'>
          <div className=''>
            <img className='w-36' src="/assets/HucksterLogo.png" alt="" />
          </div>
          <div className=''>
            <h1 className='text-2xl font-semibold pb-5'>Keep Exploring</h1>
            <p className='text-lg font-medium '>Home</p>
            <p className='text-lg font-medium '>Our Services</p>
            <p className='text-lg font-medium '>Download portfolio</p>
            <p className='text-lg font-medium '>Career</p>
            <p className='text-lg font-medium '>Contact Us</p>
            <p className='text-lg font-medium '>Terms & Conditions</p>
          </div>
          <div className=' '>
            <h1 className='text-2xl font-semibold text-white pb-5'>Connect Us</h1>
            <div className='grid grid-cols-3 gap-5'>
              <div className='bg-white/30 hover:bg-white/50 duration-300 cursor-pointer rounded-full p-3'>
                <BsTwitter className='text-xl ' />
              </div>
              <div className='bg-white/30 hover:bg-white/50 duration-300 cursor-pointer rounded-full p-3'>
                <BiLogoLinkedin className='text-xl ' />
              </div>
              <div className='bg-white/30 hover:bg-white/50 duration-300 cursor-pointer rounded-full p-3'>
                <FaFacebookF className='text-xl ' />
              </div>
              <div className='bg-white/30 hover:bg-white/50 duration-300 cursor-pointer rounded-full p-3'>
                <BsInstagram className='text-xl ' />
              </div>
              <div className='bg-white/30 hover:bg-white/50 duration-300 cursor-pointer rounded-full p-3'>
                <FaTiktok className='text-xl ' />
              </div>
              <div className='bg-white/30 hover:bg-white/50 duration-300 cursor-pointer rounded-full p-3'>
                <BsYoutube className='text-xl ' />
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white/70 w-full h-[1px]'></div>
        <div className='text-center'>
          © 2023 Huckster Productions
        </div>
      </div>
    </div>
  )
}

export default Footer
