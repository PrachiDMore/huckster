import React from 'react'
import { Syne } from 'next/font/google'
import { motion, useAnimation } from 'framer-motion';
import Reveal from './Reveal';

const syne = Syne({ subsets: ['latin'] })


const TeamCard = () => {
  const control = useAnimation();
  return (
    <div onMouseEnter={() => control.set("visible")} onMouseLeave={() => control.set("hidden")} className='border border-white/40 rounded-xl p-3 text-center relative overflow-hidden'>
      <motion.div
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.2
        }}
        variants={{
          hidden: {
            top: "-332px",
            position: "absolute",
          },
          visible: {
            top: "0px",
            position: "absolute",
            animationDelay: "900ms"
          }
        }} initial={"hidden"} animate={control} className='transition-all absolute left-0 top-[-332px] h-[332px] w-full bg-white text-black z-[100]'>
        <Reveal>asdasdjgashd gadk adasdna dhajsdhaskjdhkj</Reveal>
      </motion.div>
      <img className='rounded-lg hover:grayscale w-full h-80 object-cover transition duration-500' src="/assets/team.webp" alt="" />
      <h1 className={'text-xl pt-3 ' + syne.className}>Praveen Prabhakaram</h1>
      <p className='text-white/80'>Director</p>
    </div>
  )
}

export default TeamCard
