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
      <div className='w-screen h-1/2 lg:px-28 px-5 lg:pt-11 lg:pb-7 py-5 flex flex-col lg:gap-7 gap-5 bg-black  text-white'>
        <div className='flex lg:justify-between justify-center lg:flex-row flex-col lg:gap-0 gap-6'>
          <div className='lg:w-1/6 w-full '>
            <img className='w-36 lg:pt-0 pt-2' src="/assets/HucksterLogo.png" alt="" />
            <div className='lg:grid lg:grid-cols-3 lg:gap-5 flex gap-3 pt-4'>
              <Link href={'https://twitter.com/huckstermena'} className='bg-white/30 hover:bg-white/50 w-min duration-300 cursor-pointer rounded-full lg:p-3 p-2'>
                <BsTwitter className='lg:text-xl ' />
              </Link>
              <Link href={'https://ae.linkedin.com/company/huckstermena'} className='bg-white/30 hover:bg-white/50 w-min duration-300 cursor-pointer rounded-full lg:p-3 p-2'>
                <BiLogoLinkedin className='lg:text-xl ' />
              </Link>
              <Link href={'https://www.facebook.com/huckstermena/'} className='bg-white/30 hover:bg-white/50 w-min duration-300 cursor-pointer rounded-full lg:p-3 p-2'>
                <FaFacebookF className='lg:text-xl ' />
              </Link>
              <Link href={'https://www.instagram.com/huckstermena'} className='bg-white/30 hover:bg-white/50 w-min duration-300 cursor-pointer rounded-full lg:p-3 p-2'>
                <BsInstagram className='lg:text-xl ' />
              </Link>
              <Link href={'https://www.tiktok.com/@huckstermena'} className='bg-white/30 hover:bg-white/50 w-min duration-300 cursor-pointer rounded-full lg:p-3 p-2'>
                <FaTiktok className='lg:text-xl ' />
              </Link>
              <Link href={'https://www.youtube.com/@huckstermena'} className='bg-white/30 hover:bg-white/50 w-min duration-300 cursor-pointer rounded-full lg:p-3 p-2'>
                <BsYoutube className='lg:text-xl ' />
              </Link>
            </div>
          </div>
          <div className='3/6 flex flex-col'>
            <h1 className={'text-xl font-semibold pb-5 ' + syne.className}>Keep Exploring</h1>
            <Link href={'/'} className='font-medium text-white/50 hover:text-white/70 duration-200'>Home</Link>
            <Link href={'/work'} className='font-medium text-white/50 hover:text-white/70 duration-200'>Our Work</Link>
            <Link href={'/media'} className='font-medium text-white/50 hover:text-white/70 duration-200'>Media</Link>
            <p className='font-medium text-white/50 hover:text-white/70 duration-200'>Download portfolio</p>
            <p className='font-medium text-white/50 hover:text-white/70 duration-200'>Career</p>
            <Link href={'/contactus'} className='font-medium text-white/50 hover:text-white/70 duration-200'>Contact Us</Link>
            <p className='font-medium text-white/50 hover:text-white/70 duration-200'>Terms & Conditions</p>
          </div>
          <div className='lg:w-2/6 pb-3 w-full'>
            <h1 className={'text-xl font-semibold text-white pb-5 ' + syne.className}>Subscribe to our newsletter</h1>
            <div className='grid gap-4'>
              <input className='bg-white/20  lg:px-7 px-4  py-3 outline-none w-full '  type="email" placeholder='Enter your email id' />
             <Button text={"Subscribe"}/>
            </div>
          </div>
        </div>
        <div className='bg-white/50 w-full h-[1px]'></div>
        <div className='text-center'>
          © 2023 Huckster Productions
        </div>
      </div>
    </div>
  )
}

export default Footer
