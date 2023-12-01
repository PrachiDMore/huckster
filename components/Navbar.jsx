import { Syne } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { motion, useAnimation } from 'framer-motion';
import { RxCross2 } from "react-icons/rx";

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
      {/* MOBILE */}
      <motion.div transition={{
        ease: "easeInOut",
      }} variants={{
        hidden: {
          height: "85px",
          borderRadius: "40px",
        },
        visible: {
          height: "700px",
          borderRadius: "20px",
          flexDirection: "column",
          backdropFilter: "blur(40px)",
        }
      }} initial="hidden" animate={control} className='w-screen lg:px-28 px-5 lg:py-6 py-6 flex flex-col  fixed z-50 '>
        <div className='w-full flex justify-between items-center'>
          <Link href={'/'}>
            <img className='lg:w-44 w-24' src="/assets/HucksterLogo.png" alt="" />
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
          }} className='text-white flex gap-10 items-center'> <p className='text-xl'>We're just a call away! </p> {!show ? <HiOutlineMenuAlt3 className='text-2xl hover:cursor-pointer' /> : <RxCross2  className='text-2xl hover:cursor-pointer'/>}</div>
        </div>
        <div className='mt-16 items-start flex flex-col gap-4'>
          <motion.span variants={linkvariant} initial="hidden" animate={linkcontrol}><Link className={router.pathname === "/contactus" ? 'text-blue-500 lg:text-9xl text-xl  duration-200 px-3 py-2 rounded-full' : 'text-white/70 lg:text-9xl text-xl  hover:text-white duration-200 px-3 py-2 rounded-full'} href={'/contactus'}>WE</Link></motion.span>
          <motion.span variants={linkvariant} initial="hidden" animate={linkcontrol}><Link className={router.pathname === "/work" ? 'text-blue-500 lg:text-9xl text-xl  duration-200 px-3 py-2 rounded-full' : 'text-white/70 lg:text-9xl text-xl  hover:text-white duration-200 px-3 py-2 rounded-full'} href={'/work'}>CREATE</Link></motion.span>
          <motion.span variants={linkvariant} initial="hidden" animate={linkcontrol}><Link className={router.pathname === "/aboutus" ? 'text-blue-500 lg:text-9xl text-xl  duration-200 px-3 py-2 rounded-full' : 'text-white/70 lg:text-9xl text-xl  hover:text-white duration-200 px-3 py-2 rounded-full' } href={'/aboutus'} >FOR YOU</Link></motion.span>
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
