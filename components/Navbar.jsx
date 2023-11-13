import { Syne } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { motion, useAnimation } from 'framer-motion';

const syne = Syne({ subsets: ['latin'] })

const Navbar = () => {
  const router = useRouter()
  const control = useAnimation()
  // useEffect(() => {
  //   if (inView) {
  //     control.start("visible");
  //   } else {
  //     control.start("hidden");
  //   }
  // }, [control, inView]);
  return (
    <div className={'w-screen flex justify-center ' + syne.className}>
      <motion.div transition={{
        bounce: true,
        ease: "easeInOut",
      }} variants={{
        hidden: {
          height: "80px",
          borderRadius: "40px"
        },
        visible: {
          height: "300px",
          borderRadius: "20px",
          flexDirection: "row",
          justifyContent: "center"
        }
      }} initial="hidden" animate={control} className='lg:w-9/12 w-11/12 lg:px-16 px-8  flex justify-between items-center fixed top-5 z-50 bg-gradient-to-b from-transparent to-black/50 backdrop-blur-md'>
        {/* <div className='flex gap-2 items-center'>
          <AiOutlineMenu  className='text-xl'/>
          <p>Menu</p>
        </div> */}
        <div>
          <img className='lg:w-32 w-20' src="/assets/HucksterLogo.png" alt="" />
        </div>
        <div className='lg:flex gap-3 hidden'>
          <Link className={router.pathname === "/" ? 'hover:-top-1 top-0 relative text-blue-500 duration-200 hover:bg-white/20 px-3 py-2 rounded-full' : 'hover:-top-1 top-0 relative text-white/70 hover:text-white duration-200 hover:bg-white/20 px-3 py-2 rounded-full'} href={'/'}>Home</Link>
          <Link className={router.pathname === "/aboutus" ? 'hover:-top-1 top-0 relative text-blue-500 duration-200 hover:bg-white/20 px-3 py-2 rounded-full' : 'hover:-top-1 top-0 relative text-white/70 hover:text-white duration-200 hover:bg-white/20 px-3 py-2 rounded-full'} href={'/aboutus'}>About Us</Link>
          <Link className={router.pathname === "/work" ? 'hover:-top-1 top-0 relative text-blue-500 duration-200 hover:bg-white/20 px-3 py-2 rounded-full' : 'hover:-top-1 top-0 relative text-white/70 hover:text-white duration-200 hover:bg-white/20 px-3 py-2 rounded-full'} href={'/work'}>Our Work</Link>
          <Link className={router.pathname === "/" ? 'hover:-top-1 top-0 relative text-blue-500 duration-200 hover:bg-white/20 px-3 py-2 rounded-full' : 'hover:-top-1 top-0 relative text-white/70 hover:text-white duration-200 hover:bg-white/20 px-3 py-2 rounded-full'} href={'/'}>Our Services</Link>
          <Link className={router.pathname === "/" ? 'hover:-top-1 top-0 relative text-blue-500 duration-200 hover:bg-white/20 px-3 py-2 rounded-full' : 'hover:-top-1 top-0 relative text-white/70 hover:text-white duration-200 hover:bg-white/20 px-3 py-2 rounded-full'} href={'/'}>Media Blogs</Link>
          <Link className={router.pathname === "/contactus" ? 'hover:-top-1 top-0 relative text-blue-500 duration-200 hover:bg-white/20 px-3 py-2 rounded-full' : 'hover:-top-1 top-0 relative text-white/70 hover:text-white duration-200 hover:bg-white/20 px-3 py-2 rounded-full'} href={'/contactus'}>Contact Us</Link>
        </div>
        <div onClick={() => { control.start("visible") }} className='lg:hidden block text-white'>menu</div>
        {/* <div>
          <FiSearch className='text-xl '/>
        </div> */}
      </motion.div>
    </div>
  )
}

export default Navbar
