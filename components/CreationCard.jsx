import { Syne } from 'next/font/google'
import Link from 'next/link'
import React, { useState } from 'react'

const syne = Syne({ subsets: ['latin'] })

const CreationCard = ({className, data}) => {
	const [play, setPlay] = useState(false)

	return (
		<Link onMouseEnter={() => setPlay(true)} onMouseLeave={() => setPlay(false)} href={`/creation/${data?._id}`} className={'group/creation  cols-span-1 h-96 overflow-hidden duration-150  relative border border-white/30 ' + className}>
			{!play ? <img className='object-center h-full w-full object-cover' src={data?.image[0]} /> :
				<video autoPlay controls={false} className='absolute top-0 left-0 object-center h-full w-full object-cover' src='https://framerusercontent.com/assets/t3oWwHTiHPdqvISgXglF9dJecA.mp4' />}
			<div className='p-6 h-full w-full bg-gradient-to-b flex flex-col justify-end from-black/80 via-black/10 to-black/30 group-hover/creation:bg-black/50 absolute top-0 left-0'>
				<h2 className={'gradientText delay-75 w-max relative bottom-0 left-0 lg:group-hover/creation:left-4 group-hover/creation:left-2 lg:group-hover/creation:bottom-3 group-hover/creation:bottom-2 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold uppercase ' + syne.className}>{data?.title}</h2>
			</div>
		</Link>
	)
}

export default CreationCard