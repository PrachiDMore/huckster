"use client";

import React, { useEffect, useState } from 'react'
import { BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs'
import { BiLogoLinkedin } from 'react-icons/bi'
import { FaFacebookF, FaTiktok } from 'react-icons/fa'
import { DM_Sans, Inter, Syne } from 'next/font/google'
import Link from 'next/link'
import { IoArrowForward } from "react-icons/io5"
import { MdOutlineFileDownload } from "react-icons/md";
import Button from './Button'
import axios from 'axios'
import { toast } from 'sonner';

const inter = DM_Sans({ subsets: ['latin'] })
const syne = DM_Sans({ subsets: ['latin'] })

const Footer = () => {
  const [socials, setSocials] = useState([]);
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    axios('https://huckster-backend.vercel.app/get-social-media')
      .then((res) => {
        setSocials(res.data.response == undefined ? [] : res.data.response)
      })
    axios('https://huckster-backend.vercel.app/get-legal')
      .then((res) => {
        setText(res.data.response[[0]].companyPDF)
      })
  }, [])

  const handleMail =() => {
    try {
      if(email.length < 3){
        toast.error("Length should be more than 3 characters!")
      }else{
        axios("https://huckster-backend.vercel.app/post-mail", {
          method: "POST",
          data: {
            email
          }
        })
        .then((res) => {
          toast.success(res.data.message)
          setEmail("")
        })
        .catch((err) => {
          toast.error(err.message)
        })
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className={'w-full border-white/70 border-t-[1px] ' + inter.className}>
      <div className='w-screen h-1/2 lg:px-28 px-5 lg:pt-11 lg:pb-7 py-5 flex flex-col lg:gap-7 gap-5 bg-black  text-white'>
        <div className='flex lg:justify-between justify-center lg:flex-row flex-col lg:gap-0 gap-6'>
          <div className='lg:w-[30%] w-full '>
            <img className='w-36 lg:pt-0 pt-2' src="/assets/HucksterLogo.png" alt="" />
            <div className='lg:grid lg:grid-cols-6 lg:gap-5 flex gap-3 pt-4'>
              {
                socials?.sort((a, b) => {
                  return a.index - b.index
                })
                  .map((social, index) => {
                    return <Link key={index} href={social?.accountURL} target='_blank' className='h-10 w-10 flex justify-center items-center bg-white/30 hover:bg-white/50  duration-300 cursor-pointer rounded-full'>
                      <img src={social?.logoURL} className='h-8 w-8 rounded-full object-cover' alt="" />
                    </Link>
                  })
              }
            </div>
            <div className='flex lg:flex-row flex-col justify-between mt-5'>
              <Link href={"/terms-and-conditions"} className='font-medium text-sm text-white/50 hover:text-white/70 duration-200'>Terms & Conditions</Link>
              <Link href={"/privacy-policy"} className='font-medium text-sm text-white/50 hover:text-white/70 duration-200'>Privacy Policy</Link>
              <Link href={"/cookies"} className='font-medium text-sm text-white/50 hover:text-white/70 duration-200'>Cookies Policy</Link>
            </div>

          </div>

          <div className='lg:w-[25%] w-full flex flex-col gap-3'>
            <div className='w-full flex items-center justify-between border cursor-pointer hover:bg-white/10 duration-300 border-white/50 px-3 py-2'>
              {/* <p className='font-medium  text-white/50 hover:text-white/70 duration-200'>Join our mail list...</p> */}
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className='w-full bg-transparent outline-none' placeholder='Join our mail list...'/>
              <div onClick={handleMail} className='text-accentolive cursor-pointer'><IoArrowForward /></div>
            </div>
            <Link href={"/careers"} className='w-full flex items-center justify-between border cursor-pointer hover:bg-white/10 duration-300 border-white/50 px-3 py-2'>
              <p className='font-medium  text-white/50 hover:text-white/70 duration-200'>Want to work with us?</p>
              <div className='text-accenttan'><IoArrowForward /></div>
            </Link>
            <Link href={"contactus"} className='w-full flex items-center justify-between border cursor-pointer hover:bg-white/10 duration-300 border-white/50 px-3 py-2'>
              <p className='font-medium  text-white/50 hover:text-white/70 duration-200'>Reach out to us...</p>
              <div className='text-accentteal'><IoArrowForward /></div>
            </Link>
          </div>
        </div>
        <div className='bg-white/50 w-full h-[1px]'></div>
        <div className='text-center flex lg:flex-row flex-col justify-between items-center'>
          <p className='hidden opacity-0 pointer-events-none bg-white/10 hover:bg-white/20 duration-300 cursor-pointer h-8 w-8 lg:flex justify-center items-center rounded-full'><MdOutlineFileDownload /></p>
          <p>© {new Date().getFullYear()} Huckster Productions. All Rights Reserved.</p>
          <a href={text} target='_blank' className='bg-white/10 hover:bg-white/20 duration-300 cursor-pointer h-8 w-8 flex justify-center items-center rounded-full'><MdOutlineFileDownload /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
