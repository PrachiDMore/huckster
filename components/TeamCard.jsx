import React from 'react'
import { Inter, Syne } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })


const TeamCard = () => {
  return (
    <div className='border border-white/40 rounded-xl p-3 text-center'>
      <img className='rounded-lg w-full h-80 object-cover' src="/assets/team.webp" alt="" />
      <p className='text-sm text-white/60 py-2'>Meet our Versatile visionary, a Filmmaker and Latex Harvest technician. He spearheads @citizen.hippie productions.</p>
      <h1 className={'text-xl ' + syne.className}>Praveen Prabhakaram</h1>
      <p className='text-white/80'>Director</p>
    </div>
  )
}

export default TeamCard
