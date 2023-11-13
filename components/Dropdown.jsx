import React, { useEffect, useRef, useState } from 'react'
import { BsArrowUp, BsArrowDown } from 'react-icons/bs'
import { Inter, Syne } from 'next/font/google'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })

const Dropdown = ({ number, heading, desc, }) => {
  const [isOpen, setIsOpen] = useState(false)
  const control = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div ref={ref} variants={{
      hidden: {
        opacity: 0,
        position: "relative",
        top: "-30%"
      },
      visible: {
        opacity: 1,
        position: "relative",
        top: "0"
      }
    }} animate={control} initial="hidden" className=' flex gap-5'>
      <p className={'text-7xl w-32 font-bold text-gray-600/80 ' + syne.className}>{number}</p>
      <div className=' w-full h-max bg-white/10 rounded-lg px-4 py-3 transition-all'>
        <button className='w-full flex items-center justify-between' onClick={() => setIsOpen((prev) => !prev)}>
          <div className='flex flex-col justify-start items-start'>
            <h1 className={'gradientText delay-75 relative top-0 left-0 transition-all ease-in-expo duration-700 text-2xl font-semibold text-white ' + syne.className}>{heading}</h1>
            <p className={'relative top-0 left-0 transition-all ease-in-expo duration-700 font-semibold text-white ' + syne.className}>{desc}</p>
          </div>
          {
            !isOpen ? (<BsArrowDown className='text-2xl' />) : (<BsArrowUp className='text-2xl' />)
          }
        </button>
        {isOpen && (
          <div className='p-3 mt-3 bg-white/20  rounded-lg' >
            <p>1. Creative Development</p>
            <p>2. Script Writing</p>
            <p>3. Storyboarding and Pre-Visuals</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Dropdown
