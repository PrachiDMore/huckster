import React from 'react'
import { DM_Sans, Inter, Syne } from 'next/font/google'
import Link from 'next/link'

const inter = DM_Sans({ subsets: ['latin'] })
const syne = DM_Sans({ subsets: ['latin'] })

const MediaCard = ({className, data}) => {
  return (
    <Link href={`/media/${data?._id}`} className={'group/workcard w-full bg-main transition-all duration-700 border hover:bg-hover border-white/20 p-3 ' + className}>
      <div className=' overflow-hidden '>
        <p className='relative z-10 top-8 left-3'>News</p>
        <img className='hover:grayscale group-hover/workcard:scale-110 relative top-0 left-0 h-64 w-full transition-all duration-500 cursor-pointer object-cover' src={data?.image} alt="" />
      </div>
      <div className='w-full p-4'>
        <p className={'gradientText pb-2 text-xl font-semibold max-w-full ' + syne.className}>{data?.title}</p>
        {/* <p className={'text-sm  ' + inter.className} dangerouslySetInnerHTML={{__html: data?.description}}></p> */}
      </div>
    </Link>
  )
}

export default MediaCard
