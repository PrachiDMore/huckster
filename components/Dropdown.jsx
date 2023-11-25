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
    }} animate={control} initial="hidden" className='flex w-full lg:gap-5 gap-3 '>
      <p className={'lg:text-7xl text-5xl lg:w-32 w-[60px] font-bold  opacity-20 ' + syne.className}>{number}</p>
      <div className=' w-full h-max bg-white/10 rounded-lg px-4 py-3 transition-all'>
        <button className='w-full flex items-center justify-between' onClick={() => setIsOpen((prev) => !prev)}>
          <div className='flex flex-col justify-start items-start'>
            <h1 className={'gradientText delay-75 relative top-0 left-0 transition-all ease-in-expo duration-700 lg:text-2xl text-xl font-semibold text-white ' + syne.className}>{heading}</h1>
            <p className={'text-left relative top-0 left-0 lg:text-base text-sm transition-all ease-in-expo duration-700 font-semibold text-white ' + syne.className}>{desc}</p>
          </div>
          {
            !isOpen ? (<BsArrowDown className='lg:text-2xl text-xl' />) : (<BsArrowUp className='lg:text-2xl text-xl' />)
          }
        </button>
        {isOpen && (
          <div className='p-3 mt-3 bg-white/20  rounded-lg' >
            <p>Creative Development</p>
            <p>Script Writing</p>
            <p>Storyboarding and Pre-Visuals</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Dropdown
