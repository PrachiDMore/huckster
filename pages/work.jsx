import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import { DM_Sans, Inter, Syne } from 'next/font/google'
import Button from '@/components/Button'
import HeroSection from '@/components/HeroSection'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import CreationCard from '@/components/CreationCard'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })
const syne = DM_Sans({ subsets: ['latin'] })

const work = () => {

	const [creations, setCreations] = useState([])
	useEffect(() => {
		axios("https://huckster-backend.vercel.app/get-creation", {
			method: "GET"
		})
			.then((res) => {
				setCreations(res.data.response)
			})
	}, [])

	return (
		<Layout>
			{/* <div className='pt-32'>
        <h1 className={'mx-auto p-10   text-8xl font-semibold w-full text-center gradientText ' + syne.className}>CREATIONS</h1>
      </div> */}
			<HeroSection heading={'Creations'} img="https://framerusercontent.com/images/2nmoFrxiQPkVKjCROmvKqLCU.jpg" para={"From coming up with creative concepts to delivering outstanding campaigns, we're your friendly, fun-loving crew ready to turn your project dreams into reality!"} />

			<p className='lg:text-2xl text-lg cursor-pointer font-medium text-center text-white/50 pt-10'><span className='text-white'>All</span> | Commercial Ads </p>

			<div className='w-full lg:py-20 py-10 lg:px-28 px-5 lg:grid hidden lg:gap-16 gap-5'>
				{/* <Reveal><h1 className={'lg:text-8xl text-3xl font-semibold w-full gradientText ' + syne.className}>CREATIONS</h1></Reveal> */}
				<div className='w-full flex flex-col items-center lg:gap-10 gap-7'>
					<div className='w-full grid lg:grid-cols-12 grid-cols-1'>
						{
							creations?.map((value, index) => {
								return value?.display && <CreationCard data={value} className={index === 0 || index%3 === 0 ? "lg:col-span-12" : "lg:col-span-6"} />
							})
						}
						{/* <Link href={'/creation'} className='group/creation lg:col-span-8 cols-span-1 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
							<img className='object-center h-full w-full object-cover' src='https://d135u4jtzauizi.cloudfront.net/DS_NEWSBLAST_GIF03_larger.gif' />
							<div className='p-6 h-full w-full bg-gradient-to-b flex flex-col justify-end from-black/80 via-black/10 to-black/30 group-hover/creation:bg-black/50 absolute top-0 left-0'>
								<h2 className={'gradientText delay-75  relative bottom-0 left-0 lg:group-hover/creation:left-4 group-hover/creation:left-2 lg:group-hover/creation:bottom-3 group-hover/creation:bottom-2 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold text-white ' + syne.className}>WAHL MEA</h2>
							</div>
						</Link>
						<div className='group/creation lg:col-span-4 cols-span-1 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
							<img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
							<div className='p-6 h-full w-full bg-gradient-to-b flex flex-col justify-end from-black/80 via-black/10 to-black/30 group-hover/creation:bg-black/50 absolute top-0 left-0'>
							<h2 className={'gradientText delay-75  relative bottom-0 left-0 lg:group-hover/creation:left-4 group-hover/creation:left-2 lg:group-hover/creation:bottom-3 group-hover/creation:bottom-2 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold text-white ' + syne.className}>WAHL MEA</h2>
							</div>
						</div>
						<div className='group/creation lg:col-span-4 cols-span-1 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
							<img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
							<div className='p-6 h-full w-full bg-gradient-to-b flex flex-col justify-end from-black/80 via-black/10 to-black/30 group-hover/creation:bg-black/50 absolute top-0 left-0'>
							<h2 className={'gradientText delay-75  relative bottom-0 left-0 lg:group-hover/creation:left-4 group-hover/creation:left-2 lg:group-hover/creation:bottom-3 group-hover/creation:bottom-2 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold text-white ' + syne.className}>WAHL MEA</h2>
							</div>
						</div>
						<div className='group/creation lg:col-span-8 cols-span-1 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
							<img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
							<div className='p-6 h-full w-full bg-gradient-to-b flex flex-col justify-end from-black/80 via-black/10 to-black/30 group-hover/creation:bg-black/50 absolute top-0 left-0'>
							<h2 className={'gradientText delay-75  relative bottom-0 left-0 lg:group-hover/creation:left-4 group-hover/creation:left-2 lg:group-hover/creation:bottom-3 group-hover/creation:bottom-2 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold text-white ' + syne.className}>WAHL MEA</h2>
							</div>
						</div> */}
					</div>
					<div className="w-full flex justify-end">
						<Button className={"w-48"} text={"Watch More"} />
					</div>
				</div>
			</div>


			<div className='scroll-text-container w-full lg:py-28 py-10 px-5'>
        <p className={'lg:text-[150px] text-4xl font-semibold text-center scroll-text uppercase ' + syne.className}><span className='text-accentorange'>Intrigued?</span> Let's get started!</p>
      </div>

		</Layout >
	)
}

export default work
