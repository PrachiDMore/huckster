import { Syne } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'

const syne = Syne({ subsets: ['latin'] })

const Navbar = () => {
  const router = useRouter()
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
        <div className='flex gap-3'>
          <Link className={router.pathname === "/" ? 'hover:-top-1 top-0 relative text-blue-500 duration-200 hover:bg-white/20 px-3 py-2 rounded-full' : 'hover:-top-1 top-0 relative text-white/70 hover:text-white duration-200 hover:bg-white/20 px-3 py-2 rounded-full'} href={'/'}>Home</Link>
          <Link className={router.pathname === "/aboutus" ? 'hover:-top-1 top-0 relative text-blue-500 duration-200 hover:bg-white/20 px-3 py-2 rounded-full' : 'hover:-top-1 top-0 relative text-white/70 hover:text-white duration-200 hover:bg-white/20 px-3 py-2 rounded-full'} href={'/aboutus'}>About Us</Link>
          <Link className={router.pathname === "/work" ? 'hover:-top-1 top-0 relative text-blue-500 duration-200 hover:bg-white/20 px-3 py-2 rounded-full' : 'hover:-top-1 top-0 relative text-white/70 hover:text-white duration-200 hover:bg-white/20 px-3 py-2 rounded-full'} href={'/work'}>Our Work</Link>
          <Link className={router.pathname === "/" ? 'hover:-top-1 top-0 relative text-blue-500 duration-200 hover:bg-white/20 px-3 py-2 rounded-full' : 'hover:-top-1 top-0 relative text-white/70 hover:text-white duration-200 hover:bg-white/20 px-3 py-2 rounded-full'} href={'/'}>Our Services</Link>
          <Link className={router.pathname === "/" ? 'hover:-top-1 top-0 relative text-blue-500 duration-200 hover:bg-white/20 px-3 py-2 rounded-full' : 'hover:-top-1 top-0 relative text-white/70 hover:text-white duration-200 hover:bg-white/20 px-3 py-2 rounded-full'} href={'/'}>Media Blogs</Link>
          <Link className={router.pathname === "/" ? 'hover:-top-1 top-0 relative text-blue-500 duration-200 hover:bg-white/20 px-3 py-2 rounded-full' : 'hover:-top-1 top-0 relative text-white/70 hover:text-white duration-200 hover:bg-white/20 px-3 py-2 rounded-full'} href={'/'}>Contact Us</Link>
        </div>
        {/* <div>
          <FiSearch className='text-xl '/>
        </div> */}
      </div>
    </div>
  )
}

export default Navbar
