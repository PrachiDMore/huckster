import React from 'react'
import { Inter, Syne } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })

const MediaCard = ({className}) => {
  return (
    <Link href={"/mediadetails"} className={'group/workcard w-full bg-main transition-all duration-700 border hover:bg-hover border-white/20 p-3 ' + className}>
      <div className=' overflow-hidden '>
        <p className='relative z-10 top-8 left-3'>News</p>
        <img className='hover:grayscale group-hover/workcard:scale-110 relative top-0 left-0 h-64 w-full transition-all duration-500 cursor-pointer object-cover' src="/assets/work.webp" alt="" />
      </div>
      <div className='w-full p-4'>
        <p className={'gradientText pb-2 text-xl font-semibold max-w-full ' + syne.className}>Born From My Memories: A Note From Savanah Leaf</p>
        <p className={'text-sm  ' + inter.className}>I was always known as an athlete. That's what I was and that's how people thought of me. As a kid, I was tall and...</p>
      </div>
    </Link>
  )
}

export default MediaCard
