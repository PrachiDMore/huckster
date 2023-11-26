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

      {/* MOBILE */}
      <motion.div transition={{
        ease: "easeInOut",
      }} variants={{
        hidden: {
          height: "75px",
          borderRadius: "40px",
        },
        visible: {
          height: "260px",
          borderRadius: "20px",
          flexDirection: "column",
          backdropFilter: "blur(40px)",
        }
      }} initial="hidden" animate={control} className='w-8/12 px-8 py-4 flex flex-col fixed top-5 z-50 bg-gradient-to-b from-transparent to-black/50 backdrop-blur-md'>
        <div className='w-full flex justify-between items-center'>
          <Link href={'/'}>
            <img className='lg:w-36 w-20' src="/assets/HucksterLogo.png" alt="" />
          </Link>
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
          }} className='block text-white'><HiOutlineMenuAlt3/></div>
        </div>
        <div className='mt-5 items-center flex flex-col gap-4'>
          <motion.span variants={linkvariant} initial="hidden" animate={linkcontrol}><Link className={router.pathname === "/" ? 'text-blue-500 duration-200 px-3 py-2 rounded-full' : 'text-white/70 hover:text-white duration-200 px-3 py-2 rounded-full'} href={'/'}>Home</Link></motion.span>
          <motion.span variants={linkvariant} initial="hidden" animate={linkcontrol}><Link className={router.pathname === "/aboutus" ? 'text-blue-500 duration-200 px-3 py-2 rounded-full' : 'text-white/70 hover:text-white duration-200 px-3 py-2 rounded-full'} href={'/aboutus'}>WE (About Us)</Link></motion.span>
          <motion.span variants={linkvariant} initial="hidden" animate={linkcontrol}><Link className={router.pathname === "/work" ? 'text-blue-500 duration-200 px-3 py-2 rounded-full' : 'text-white/70 hover:text-white duration-200 px-3 py-2 rounded-full'} href={'/work'}>CREATE (Our Work)</Link></motion.span>
          {/* <motion.span variants={linkvariant} initial="hidden" animate={linkcontrol}><Link className={router.pathname === "/" ? 'text-blue-500 duration-200 px-3 py-2 rounded-full' : 'text-white/70 hover:text-white duration-200 px-3 py-2 rounded-full'} href={'/'}>Our Services</Link></motion.span> */}
          {/* <motion.span variants={linkvariant} initial="hidden" animate={linkcontrol}><Link className={router.pathname === "/" ? 'text-blue-500 duration-200 px-3 py-2 rounded-full' : 'text-white/70 hover:text-white duration-200 px-3 py-2 rounded-full'} href={'/'}>Media Blogs</Link></motion.span> */}
          <motion.span variants={linkvariant} initial="hidden" animate={linkcontrol}><Link className={router.pathname === "/contactus" ? 'text-blue-500 duration-200 px-3 py-2 rounded-full' : 'text-white/70 hover:text-white duration-200 px-3 py-2 rounded-full'} href={'/contactus'}>FOR (Contact Us)</Link></motion.span>
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
