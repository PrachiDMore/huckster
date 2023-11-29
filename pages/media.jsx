import HeroSection from '@/components/HeroSection'
import Layout from '@/components/Layout'
import MediaCard from '@/components/MediaCard'
import React from 'react'

const media = () => {
  return (
    <Layout>
      <HeroSection heading={"Media"} para={'News & articles and Bolgs'} img={'https://img.freepik.com/free-photo/top-view-old-french-newspaper-pieces_23-2149318857.jpg?size=626&ext=jpg&uid=R109361558&ga=GA1.1.858714798.1697101173&semt=sph'} />

      <p className='lg:text-2xl text-lg cursor-pointer font-medium text-center text-white/50 py-10'><span className='text-white'>All</span> | News & Articles | Blogs </p>

      <div className='w-full  lg:px-28 px-5 '>
        <input className='bg-white/20 rounded-full  lg:px-7 px-4  py-3 outline-none w-full ' type="text" placeholder='Search...' />
      </div>

      <div className='w-screen lg:py-10 py-5 lg:px-28 px-5 grid lg:grid-cols-12 grid-cols-1 gap-5'>
        <MediaCard className={'col-span-4'} />
        <MediaCard className={'col-span-4'} />
        <MediaCard className={'col-span-4'} />
        <MediaCard className={'col-span-4'} />

      </div>

    </Layout>
  )
}

export default media
