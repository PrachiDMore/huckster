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
      <HeroSection heading={'Contact Us'} para={"We love hearing from you! Whether you're ready to discuss your next project, have a question, or just want to say hello, we're all ears. Our team is here to make your experience exceptional. Drop us a message, and let's start a conversation."} />

      <div className='w-screen px-28 py-20'>
        <div className='border border-white/50 rounded-2xl flex  p-8 bg-white/10'>
          <div className='w-2/5'>
            <h1 className={' delay-75 relative top-0 left-0 transition-all ease-in-expo duration-700 text-3xl font-semibold text-white pb-5 ' + syne.className}>Vist Us</h1>
            <div className='flex gap-3'>
              <HiOutlineLocationMarker className='text-xl'/>
              <p className={'text-lg pb-3 ' + inter.className}>123 Artistic Lane, Mumbai.</p>
            </div>
            <div className='flex gap-3'>
              <HiOutlineMail className='text-xl'/>
              <p className={'text-lg pb-3 ' + inter.className}>info@hucksterproductions.com</p>
            </div>
            <div className='flex gap-3'>
              <HiOutlinePhone className='text-xl'/>
              <p className={'text-lg pb-3 ' + inter.className}>1234567890</p>
            </div>
          </div>
          <div className='w-3/5'>
            <h1 className={' delay-75 relative top-0 left-0 transition-all ease-in-expo duration-700 text-3xl font-semibold text-white pb-5 ' + syne.className}>Question? Send us a message. Don't be shy</h1>
            <div className='flex flex-col items-center gap-5 w-full '>
              <div className='flex gap-5 w-full'>
                <input className='outline-none text-lg bg-none bg-white/20 rounded-xl px-7 py-3 w-full' type="text" placeholder='Enter your name' />
                <input className='outline-none text-lg bg-none bg-white/20 rounded-xl px-7 py-3 w-full' type="text" placeholder='Enter your name' />
              </div>
              <textarea className='outline-none text-lg bg-none bg-white/20 rounded-xl px-7 py-3 w-full h-40 resize-none' type="text" placeholder='Enter your name' />
              <Button text={'Send Message'} className={'w-full'} />
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default contactus
