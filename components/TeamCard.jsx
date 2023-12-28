import React from 'react'
import { Inter, Syne } from 'next/font/google'
import { motion, useAnimation } from 'framer-motion';
import Reveal from './Reveal';

const syne = Syne({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

const TeamCard = ({value}) => {
  const control = useAnimation();
  return (
    <div onMouseEnter={() => control.set("visible")} onMouseLeave={() => control.set("hidden")} className='border border-white/40 p-3 text-center relative overflow-hidden'>
      <motion.div
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.2
        }}
        variants={{
          hidden: {
            top: "-483px",
            position: "absolute",
          },
          visible: {
            top: "0px",
            position: "absolute",
            animationDelay: "900ms"
          }
        }} initial={"hidden"} animate={control} className='transition-all absolute left-0 top-[-483px] h-[483px] w-full bg-black/30 backdrop-blur-lg z-[100]'>
        {/* }} initial={"hidden"} animate={control} className='transition-all absolute left-0 top-[-483px] h-[483px] w-full bg-black/30 backdrop-blur-lg z-[100] team-gradient-radial mix-blend-color'> */}
        <Reveal>
          <div className='flex flex-col items-start p-4'>
            <p className={'custom text-start pb-2 ' + inter.className} dangerouslySetInnerHTML={{__html: value?.description}}></p>
          </div>
        </Reveal>
      </motion.div>
      <img className=' hover:grayscale w-full h-[470px] object-cover transition duration-500' src={value?.photo} alt="" />
      <h1 className={'text-xl pt-3 ' + syne.className}>{value?.name}</h1>
      <p className='text-white/80'>{value?.designation}</p>
    </div>
  )
}

export default TeamCard
