import React from 'react'
import { BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs'
import { BiLogoLinkedin } from 'react-icons/bi'
import { FaFacebookF, FaTiktok } from 'react-icons/fa'
import { DM_Sans, Inter, Syne } from 'next/font/google'
import Link from 'next/link'
import { IoArrowForward } from "react-icons/io5"
import { MdOutlineFileDownload } from "react-icons/md";
import Button from './Button'

const inter = DM_Sans({ subsets: ['latin'] })
const syne = DM_Sans({ subsets: ['latin'] })

const Footer = () => {
  return (
    <div className={'w-full border-white/70 border-t-[1px] ' + inter.className}>
      <div className='w-screen h-1/2 lg:px-28 px-5 lg:pt-11 lg:pb-7 py-5 flex flex-col lg:gap-7 gap-5 bg-black  text-white'>
        <div className='flex lg:justify-between justify-center lg:flex-row flex-col lg:gap-0 gap-6'>
          <div className='lg:w-[30%] w-full '>
            <img className='w-36 lg:pt-0 pt-2' src="/assets/HucksterLogo.png" alt="" />
            <div className='lg:grid lg:grid-cols-6 lg:gap-5 flex gap-3 pt-4'>
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
            <div className='flex justify-between mt-5'>
              <p className='font-medium text-sm text-white/50 hover:text-white/70 duration-200'>Terms & Conditions</p>
              <p className='font-medium text-sm text-white/50 hover:text-white/70 duration-200'>Privacy Policy</p>
              <p className='font-medium text-sm text-white/50 hover:text-white/70 duration-200'>Cookies Policy</p>
            </div>

            {/* <div className='lg:grid lg:grid-cols-3 lg:gap-5 flex gap-3 pt-4'>
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
            </div> */}
          </div>

          <div className='w-[25%] flex flex-col gap-3'>
            <div className='w-full flex items-center justify-between border cursor-pointer hover:bg-white/10 duration-300 border-white/50 px-3 py-2'>
              <p className='font-medium  text-white/50 hover:text-white/70 duration-200'>Join our mail list...</p>
              <div className='text-accentolive'><IoArrowForward /></div>
            </div>
            <div className='w-full flex items-center justify-between border cursor-pointer hover:bg-white/10 duration-300 border-white/50 px-3 py-2'>
              <p className='font-medium  text-white/50 hover:text-white/70 duration-200'>Want to work with us?</p>
              <div className='text-accenttan'><IoArrowForward /></div>
            </div>
            <div className='w-full flex items-center justify-between border cursor-pointer hover:bg-white/10 duration-300 border-white/50 px-3 py-2'>
              <p className='font-medium  text-white/50 hover:text-white/70 duration-200'>Reach out to us...</p>
              <div className='text-accentteal'><IoArrowForward /></div>
            </div>
          </div>

          {/* <div className='w-3/6 flex flex-col'>
            <h1 className={'text-xl font-semibold pb-5 ' + syne.className}>Keep Exploring</h1>
            <Link href={'/'} className='font-medium text-white/50 hover:text-white/70 duration-200'>Home</Link>
            <Link href={'/work'} className='font-medium text-white/50 hover:text-white/70 duration-200'>Our Work</Link>
            <Link href={'/media'} className='font-medium text-white/50 hover:text-white/70 duration-200'>Media</Link>
            <p className='font-medium text-white/50 hover:text-white/70 duration-200'>Download portfolio</p> 
            <Link href={'/careers'} className='font-medium text-white/50 hover:text-white/70 duration-200'>Career</Link>
            <Link href={'/contactus'} className='font-medium text-white/50 hover:text-white/70 duration-200'>Contact Us</Link>
            <p className='font-medium text-white/50 hover:text-white/70 duration-200'>Terms & Conditions</p>
          </div> */}
          {/* <div className='lg:w-2/6 pb-3 w-full'>
            <h1 className={'text-xl font-semibold text-white pb-5 ' + syne.className}>Subscribe to our newsletter</h1>
            <div className='grid gap-4'>
              <input className='bg-white/20  lg:px-7 px-4  py-3 outline-none w-full '  type="email" placeholder='Enter your email id' />
             <Button text={"Subscribe"}/>
            </div>
          </div> */}
        </div>
        <div className='bg-white/50 w-full h-[1px]'></div>
        <div className='text-center flex justify-between items-center'>
          <p className='opacity-0 pointer-events-none bg-white/10 hover:bg-white/20 duration-300 cursor-pointer h-8 w-8 flex justify-center items-center rounded-full'><MdOutlineFileDownload /></p>
          <p>© {new Date().getFullYear()} Huckster Productions. All Rights Reserved.</p>
          <a href='https://mag.wcoomd.org/uploads/2018/05/blank.pdf' target='_blank' className='bg-white/10 hover:bg-white/20 duration-300 cursor-pointer h-8 w-8 flex justify-center items-center rounded-full'><MdOutlineFileDownload /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
