"use client"

import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { IoArrowForward } from 'react-icons/io5'
import { DM_Sans, Inter, Syne } from 'next/font/google'

const inter = DM_Sans({ subsets: ['latin'] })
const syne = DM_Sans({ subsets: ['latin'] })

const Layout = ({ children, className }) => {

  const [cookie, setCookie] = useState(true)

  useEffect(() => {
    setCookie(localStorage.getItem("consent") === null ? true : Boolean(localStorage.getItem("consent")))
    console.log(localStorage.getItem("consent") === null ? true : Boolean(localStorage.getItem("consent")) )
  }, [])

  return (
    <div className={'w-screen h-auto min-h-screen bg-black text-white ' + inter.className + " " + className}>
      <Navbar />
      {children}
      <Footer />
      <div className={ cookie ? 'px-7 py-5 flex gap-5 z-[5000] items-center bg-white text-black fixed bottom-0 right-0 ' : 'hidden'}>
        <p className='w-60'>By continuing to use our site, you're saying you're okay with our Cookies Policy.</p>
        <div className='flex items-center gap-3'>
          <p className='font-semibold'>Fine by me</p>
          <div onClick={() => {
            localStorage.setItem("consent", false);
            setCookie(false)
          }} className='border border-black hover:bg-black hover:text-white duration-300 cursor-pointer p-2 rounded-full'>
            <IoArrowForward />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
