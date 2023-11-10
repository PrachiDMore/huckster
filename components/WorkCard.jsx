import React from 'react'
import { Inter, Syne } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })

const WorkCard = ({ className }) => {
  return (
    <div className={'bg-main duration-200 transition-all group/workcard border hover:bg-hover border-white/50 rounded-3xl p-3 ' + className}>
      <div className='relative overflow-hidden rounded-2xl'>
        <img className='group-hover/workcard:scale-110 h-80 rounded-2xl w-full transition duration-500 cursor-pointer object-cover' src="/assets/work.webp" alt="" />
      </div>
      <div className='p-4'>
        <p className={'delay-75 relative top-0 left-0 transition-all ease-in-expo duration-700 text-lg font-semibold text-white ' + syne.className}>Sarah</p>
        <p className={'gradientText delay-75 relative top-0 left-0 transition-all ease-in-expo duration-700 text-xl font-semibold text-white ' + syne.className}>A Travel Vlog Adventure</p>
      </div>
    </div>
  )
}

export default WorkCard
