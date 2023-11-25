import HeroSection from '@/components/HeroSection'
import Layout from '@/components/Layout'
import React from 'react'
import { Inter, Syne } from 'next/font/google'
import Button from '@/components/Button'
import {HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone} from 'react-icons/hi'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })

const contactus = () => {
  return (
    <Layout>
      <HeroSection img={"https://framerusercontent.com/images/KihLgob1Ul5Qa1HTTyAzAljcyI.jpg"} heading={'Contact Us'} para={"We love hearing from you! Whether you're ready to discuss your next project, have a question, or just want to say hello, we're all ears. Our team is here to make your experience exceptional. Drop us a message, and let's start a conversation."} />
      <div className='w-screen lg:px-28 px-5 lg:py-20 py-10'>
        <div className='border border-white/50 rounded-2xl lg:flex grid gap-7 lg:p-8 p-4 bg-white/10'>
          <div className='lg:w-2/5 w-full'>
            <h1 className={' delay-75 relative top-0 left-0 transition-all ease-in-expo duration-700 lg:text-3xl text-2xl font-semibold text-white pb-5 ' + syne.className}>Vist Us</h1>
            <div className='flex gap-3'>
              <HiOutlineLocationMarker className='text-lg'/>
              <p className={'lg:text-lg pb-3 ' + inter.className}>#2513, Churchill Executive Towers, Business Bay, Dubai, UAE</p>
            </div>
            <div className='flex gap-3'>
              <HiOutlineMail className='text-lg'/>
              <p className={'lg:text-lg pb-3 ' + inter.className}>hola@hucksterproduction.com</p>
            </div>
            <div className='flex gap-3'>
              <HiOutlinePhone className='text-lg'/>
              <p className={'lg:text-lg pb-3 ' + inter.className}>+971 56 398 2363</p>
            </div>
          </div>
          <div className=' lg:w-3/5 w-full'>
            <h1 className={' delay-75 relative top-0 left-0 transition-all ease-in-expo duration-700 lg:text-3xl text-2xl font-semibold text-white pb-5 ' + syne.className}>Question? Send us a message. Don't be shy</h1>
            <div className='flex flex-col items-center gap-5 w-full '>
              <div className='lg:flex grid gap-5 w-full'>
                <input className='outline-none text-lg bg-none bg-white/20 rounded-xl lg:px-7 px-4 py-3 w-full' type="text" placeholder='Enter your Name' />
                <input className='outline-none text-lg bg-none bg-white/20 rounded-xl lg:px-7 px-4  py-3 w-full' type="text" placeholder='Enter your Email' />
              </div>
              <textarea className='outline-none text-lg bg-none bg-white/20 rounded-xl  lg:px-7 px-4  py-3 w-full h-40 resize-none' type="text" placeholder='Write message...' />
              <Button text={'Send Message'} className={'w-full'} />
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default contactus
