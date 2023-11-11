import React from 'react'
import { Inter, Syne } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })


const TeamCard = () => {
  return (
    <div className='border border-white/40 rounded-xl p-3 text-center'>
      <img className='rounded-lg hover:grayscale w-full h-80 object-cover scale-105 hover:scale-100 transition duration-500' src="/assets/team.webp" alt="" />
      <h1 className={'text-xl pt-3 ' + syne.className}>Praveen Prabhakaram</h1>
      <p className='text-white/80'>Director</p>
    </div>
  )
}

export default TeamCard
