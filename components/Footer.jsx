import React from 'react'
import { BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs'
import { BiLogoLinkedin } from 'react-icons/bi'
import { FaFacebookF, FaTiktok } from 'react-icons/fa'
import { Inter, Syne } from 'next/font/google'
import Link from 'next/link'
import Button from './Button'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })

const Footer = () => {
  return (
    <div className={'w-full border-white/70 border-t-[1px] ' + inter.className}>
      <div className='w-screen h-1/2 px-28 py-16 flex flex-col gap-8 bg-black  text-white'>
        <div className='flex justify-between'>
          <div className='w-1/6'>
            <img className='w-36' src="/assets/HucksterLogo.png" alt="" />
            <div className='grid grid-cols-3 gap-5 pt-4'>
              <div className='bg-white/30 hover:bg-white/50 w-min duration-300 cursor-pointer rounded-full p-3'>
                <BsTwitter className='text-xl ' />
              </div>
              <div className='bg-white/30 hover:bg-white/50 w-min duration-300 cursor-pointer rounded-full p-3'>
                <BiLogoLinkedin className='text-xl ' />
              </div>
              <div className='bg-white/30 hover:bg-white/50 w-min duration-300 cursor-pointer rounded-full p-3'>
                <FaFacebookF className='text-xl ' />
              </div>
              <div className='bg-white/30 hover:bg-white/50 w-min duration-300 cursor-pointer rounded-full p-3'>
                <BsInstagram className='text-xl ' />
              </div>
              <div className='bg-white/30 hover:bg-white/50 w-min duration-300 cursor-pointer rounded-full p-3'>
                <FaTiktok className='text-xl ' />
              </div>
              <div className='bg-white/30 hover:bg-white/50 w-min duration-300 cursor-pointer rounded-full p-3'>
                <BsYoutube className='text-xl ' />
              </div>
            </div>
          </div>
          <div className='2/6 flex flex-col'>
            <h1 className={'text-xl font-semibold pb-5 ' + syne.className}>Keep Exploring</h1>
            <Link href={'/'} className='font-medium text-white/50 hover:text-white/70 duration-200'>Home</Link>
            <Link href={'/work'} className='font-medium text-white/50 hover:text-white/70 duration-200'>Our Work</Link>
            <p className='font-medium text-white/50 hover:text-white/70 duration-200'>Our Services</p>
            <p className='font-medium text-white/50 hover:text-white/70 duration-200'>Download portfolio</p>
            <p className='font-medium text-white/50 hover:text-white/70 duration-200'>Career</p>
            <p className='font-medium text-white/50 hover:text-white/70 duration-200'>Contact Us</p>
            <p className='font-medium text-white/50 hover:text-white/70 duration-200'>Terms & Conditions</p>
          </div>
          <div className='w-2/6'>
            <h1 className={'text-xl font-semibold text-white pb-5 ' + syne.className}>Subscribe to our newsletter</h1>
            <div className='grid gap-4'>
              <input className='bg-white/20 rounded-full px-7 py-3 outline-none w-full '  type="email" placeholder='Enter your email id' />
             <Button text={"Subscribe"}/>
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
