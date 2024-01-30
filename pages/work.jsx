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
			.catch((err) => {

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
							creations?.sort((a, b) => {
								return a.index - b.index
							})?.filter((data) => {
								return data.display
							})?.map((value, index) => {
								return <CreationCard data={value} className={index === 0 || index%3 === 0 ? "lg:col-span-12" : "lg:col-span-6"} />
							})
						}
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
