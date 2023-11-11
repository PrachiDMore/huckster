import React from 'react'
import { Inter, Syne } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })

const HeroSection = ({heading, para}) => {
  return (
    <section className='relative h-screen w-screen bg-black' >
      <img className='h-screen w-screen absolute top-0 left-0 z-[0] opacity-100'  src="/assets/hero.jpg" alt="" />
      {/* <img className={index === 0 ? 'h-screen w-screen absolute top-0 left-0 z-[0] opacity-100 duration-500' : 'h-screen w-screen absolute top-0 left-0 z-[0] opacity-0 duration-500'} src="https://d135u4jtzauizi.cloudfront.net/A24_PRISCILLA_A24_GIF03.gif" alt="" /> */}
      <div className={'gap-3 flex flex-col justify-center py-14 px-28 absolute top-0 left-0 z-10 h-screen w-screen bg-gradient-radial from-transparent to-black ' + syne.className}>
        <h1 className= 'w-max duration-150 text-white font-bold text-7xl capitalize'>{heading}</h1>
        <p className={'text-lg w-2/4 ' + inter.className}>{para}</p>
      </div>
    </section>
  )
}

export default HeroSection
