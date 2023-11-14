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
        <SlideReveal delay={0.8}><p className={'text-lg lg:w-2/4 ' + syne.className}>{para}</p></SlideReveal>

        <div className='mt-5 ml-2 w-32 rotate-90 origin-left font-light gradientText flex gap-5 items-center'>
          <p>Scroll</p>
          <motion.span initial={{
            height: "2px",
            width: "150px",
            scaleX: 0,
            transformOrigin: "left"
          }} animate={{
            height: "2px",
            scaleX: 1,
            width: "150px",
            transformOrigin: "left"
          }} exit={{
            height: "2px",
            width: "150px",
            scaleX: 0,
            transformOrigin: "left"
          }}
            transition={{ duration: 2, repeat: "infinity" }}
            className='bg-gradient-to-r from-transparent to-white rounded-xl flex' ></motion.span>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
