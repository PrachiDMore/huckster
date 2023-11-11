import Layout from '@/components/Layout'
import React from 'react'
import { Inter, Syne } from 'next/font/google'
import WorkCard from '@/components/WorkCard'
import Button from '@/components/Button'
import HeroSection from '@/components/HeroSection'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })

const work = () => {
  return (
    <Layout>
      {/* <div className='pt-32'>
        <h1 className={'mx-auto p-10   text-8xl font-semibold w-full text-center gradientText ' + syne.className}>CREATIONS</h1>
      </div> */}
      <HeroSection heading={'Creations'} />

      <p className='text-2xl cursor-pointer font-medium text-center text-white/50 pt-10'><span className='text-white'>All</span> | Commercial Ads </p>

      <div className='w-full flex flex-col items-center gap-10 py-10 px-28'>
        <div className='w-full grid grid-cols-12 gap-5'>
          <WorkCard className={'col-span-6'} />
          <WorkCard className={'col-span-6'} />
          <WorkCard className={'col-span-6'} />
          <WorkCard className={'col-span-6'} />
        </div>
        <Button className={'w-48'} text={"Watch More"} />
      </div>

      <div className='w-full p-28 px-28 '>
        <div className='w-full py-10 bg-gradient-to-b from-white/40  to-white/0  flex flex-col items-center gap-10 border border-white/50 rounded-3xl'>
          <img className='w-36' src="/assets/HucksterLogo.png" alt="" />
          <div className=' '>
            <p className={'text-8xl font-semibold text-center ' + syne.className}>Intrigued?<br /> Let's get started.</p>
          </div>
        </div>
      </div>

    </Layout >
  )
}

export default work
