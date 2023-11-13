import { Syne } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { motion, useAnimation } from 'framer-motion';

const syne = Syne({ subsets: ['latin'] })

const Navbar = () => {
  const router = useRouter()
  const control = useAnimation();
  const linkcontrol = useAnimation();
  const [show, setShow] = useState(false)
  const linkvariant = {
    hidden: {
      position: "relative",
      top: "-30px",
      opacity: 0,
      pointerEvents: "none"
    },
    visible: {
      position: "relative",
      top: "0",
      opacity: 1,
      pointerEvents: "all"
    }
  }
  return (
    <div className={'w-screen flex justify-center ' + syne.className}>
      {/* DESKTOP */}
      <div className='hidden rounded-full h-20 w-9/12 px-16 lg:flex justify-between fixed items-center top-5 z-50 bg-gradient-to-b from-transparent to-black/50 backdrop-blur-md'>
        {/* <div className='flex gap-2 items-center'>
          <AiOutlineMenu  className='text-xl'/>
          <p>Menu</p>
        </div> */}
        <div>
          <img className='w-32' src="/assets/HucksterLogo.png" alt="" />
        </div>
        <div className='flex gap-3'>
          <Link className={router.pathname === "/" ? 'hover:-top-1 top-0 relative text-blue-500 duration-200 hover:bg-white/20 px-3 py-2 rounded-full' : 'hover:-top-1 top-0 relative text-white/70 hover:text-white duration-200 hover:bg-white/20 px-3 py-2 rounded-full'} href={'/'}>Home</Link>
          <Link className={router.pathname === "/aboutus" ? 'hover:-top-1 top-0 relative text-blue-500 duration-200 hover:bg-white/20 px-3 py-2 rounded-full' : 'hover:-top-1 top-0 relative text-white/70 hover:text-white duration-200 hover:bg-white/20 px-3 py-2 rounded-full'} href={'/aboutus'}>About Us</Link>
          <Link className={router.pathname === "/work" ? 'hover:-top-1 top-0 relative text-blue-500 duration-200 hover:bg-white/20 px-3 py-2 rounded-full' : 'hover:-top-1 top-0 relative text-white/70 hover:text-white duration-200 hover:bg-white/20 px-3 py-2 rounded-full'} href={'/work'}>Our Work</Link>
          <Link className={router.pathname === "/" ? 'hover:-top-1 top-0 relative text-blue-500 duration-200 hover:bg-white/20 px-3 py-2 rounded-full' : 'hover:-top-1 top-0 relative text-white/70 hover:text-white duration-200 hover:bg-white/20 px-3 py-2 rounded-full'} href={'/'}>Our Services</Link>
          <Link className={router.pathname === "/" ? 'hover:-top-1 top-0 relative text-blue-500 duration-200 hover:bg-white/20 px-3 py-2 rounded-full' : 'hover:-top-1 top-0 relative text-white/70 hover:text-white duration-200 hover:bg-white/20 px-3 py-2 rounded-full'} href={'/'}>Media Blogs</Link>
          <Link className={router.pathname === "/contactus" ? 'hover:-top-1 top-0 relative text-blue-500 duration-200 hover:bg-white/20 px-3 py-2 rounded-full' : 'hover:-top-1 top-0 relative text-white/70 hover:text-white duration-200 hover:bg-white/20 px-3 py-2 rounded-full'} href={'/contactus'}>Contact Us</Link>
        </div>
        {/* <div>
          <FiSearch className='text-xl '/>
        </div> */}
      </div>

      {/* MOBILE */}
      <motion.div transition={{
        ease: "easeInOut",
      }} variants={{
        hidden: {
          height: "75px",
          borderRadius: "40px",
        },
        visible: {
          height: "320px",
          borderRadius: "20px",
          flexDirection: "column",
          backdropFilter: "blur(40px)",
        }
      }} initial="hidden" animate={control} className='lg:hidden w-11/12 px-8 py-6 flex flex-col fixed top-5 z-50 bg-gradient-to-b from-transparent to-black/50 backdrop-blur-md'>
        <div className='w-full flex justify-between items-center'>
          <div>
            <img className='lg:w-32 w-20' src="/assets/HucksterLogo.png" alt="" />
          </div>
          <div onClick={() => {
            if (show) {
              control.start("hidden")
              linkcontrol.start("hidden")
              setShow(false)
            } else {
              control.start("visible")
              linkcontrol.start("visible")
              setShow(true)
            }
          }} className='lg:hidden block text-white'><HiOutlineMenuAlt3/></div>
        </div>
        <div className='mt-5 items-center flex flex-col gap-4'>
          <motion.span variants={linkvariant} initial="hidden" animate={linkcontrol}><Link className={router.pathname === "/" ? 'text-blue-500 duration-200 px-3 py-2 rounded-full' : 'text-white/70 hover:text-white duration-200 px-3 py-2 rounded-full'} href={'/'}>Home</Link></motion.span>
          <motion.span variants={linkvariant} initial="hidden" animate={linkcontrol}><Link className={router.pathname === "/aboutus" ? 'text-blue-500 duration-200 px-3 py-2 rounded-full' : 'text-white/70 hover:text-white duration-200 px-3 py-2 rounded-full'} href={'/aboutus'}>About Us</Link></motion.span>
          <motion.span variants={linkvariant} initial="hidden" animate={linkcontrol}><Link className={router.pathname === "/work" ? 'text-blue-500 duration-200 px-3 py-2 rounded-full' : 'text-white/70 hover:text-white duration-200 px-3 py-2 rounded-full'} href={'/work'}>Our Work</Link></motion.span>
          <motion.span variants={linkvariant} initial="hidden" animate={linkcontrol}><Link className={router.pathname === "/" ? 'text-blue-500 duration-200 px-3 py-2 rounded-full' : 'text-white/70 hover:text-white duration-200 px-3 py-2 rounded-full'} href={'/'}>Our Services</Link></motion.span>
          <motion.span variants={linkvariant} initial="hidden" animate={linkcontrol}><Link className={router.pathname === "/" ? 'text-blue-500 duration-200 px-3 py-2 rounded-full' : 'text-white/70 hover:text-white duration-200 px-3 py-2 rounded-full'} href={'/'}>Media Blogs</Link></motion.span>
          <motion.span variants={linkvariant} initial="hidden" animate={linkcontrol}><Link className={router.pathname === "/contactus" ? 'text-blue-500 duration-200 px-3 py-2 rounded-full' : 'text-white/70 hover:text-white duration-200 px-3 py-2 rounded-full'} href={'/contactus'}>Contact Us</Link></motion.span>
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
