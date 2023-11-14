import React from 'react'
import { Inter, Syne } from 'next/font/google'
import { motion } from "framer-motion";
import SlideReveal from './SlideReveal';

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })

const HeroSection = ({ heading, para, img }) => {
  return (
    <section className='relative h-screen w-screen bg-black' >
      <img className='object-cover h-screen w-screen absolute top-0 left-0 z-[0] opacity-100' src={img} alt="" />
      <div className='h-screen w-screen absolute top-0 left-0 z-[5] bg-gradient-to-b from-transparent via-black/5 to-black'></div>
      <div className={'gap-3 flex flex-col justify-center py-14 lg:px-28 px-5 absolute top-0 left-0 z-10 h-screen w-screen bg-gradient-to-r to-transparent from-black ' + syne.className}></div>
      <div className={'gap-3 flex flex-col justify-center py-14 lg:px-28 px-5 absolute top-0 left-0 z-20 h-screen w-screen bg-gradient-radial from-transparent to-black ' + syne.className}>
        <SlideReveal delay={0.4}><h1 className='gradientText w-max duration-150 text-white font-bold lg:text-7xl text-4xl capitalize'>{heading}</h1></SlideReveal>
        <SlideReveal delay={0.8}><p  className={'text-lg lg:w-2/4 ' + syne.className}>{para}</p></SlideReveal>
        {/* <motion.p initial={{
          opacity: 0,
          y: 25
        }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.8,
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1]
          }} className={'text-lg lg:w-2/4 ' + syne.className}>{para}</motion.p> */}
      </div>
    </section>
  )
}

export default HeroSection
