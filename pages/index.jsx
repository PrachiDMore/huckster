import { Syne } from 'next/font/google'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { useState } from 'react'
import Button from '@/components/Button'
import Dropdown from '@/components/Dropdown'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import SlideReveal from '@/components/SlideReveal'
import CreationCard from '@/components/CreationCard'
import { twMerge } from 'tailwind-merge'


const syne = Syne({ subsets: ['latin'] })

export default function Home() {
	const [index, setIndex] = useState(0)

	const handleHoverColors = () => {
		const random = Math.random() * 100;
		if (random < 16.66) {
			return 'hover:text-accentolive';
		} else if (random > 16.66 && random < 33.32) {
			return 'hover:text-accentblue';
		} else if (random > 33.32 && random < 49.98) {
			return 'hover:text-accenttan';
		} else if (random > 49.98 && random < 66.64) {
			return 'hover:text-accentteal';
		} else if (random > 66.64 && random < 83.3) {
			return 'hover:text-accentorange';
		} else {
			return 'hover:text-accentgray';
		}
	}
	const breakpoints = {
		1024: {
			slidesPerView: 4,
			spaceBetween: 50
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 50
		},
		648: {
			slidesPerView: 2,
			spaceBetween: 50
		},
		320: {
			slidesPerView: 1,
			spaceBetween: 0
		},
	}

	return (
		<Layout>
			{/* hero section */}
			<section className='relative h-screen w-screen bg-black' >
				<Image className={index === 0 ? 'object-cover h-screen w-screen absolute top-0 left-0 z-[0] opacity-100 duration-500' : 'object-cover h-screen w-screen absolute top-0 left-0 z-[0] opacity-0 duration-500'} width={100} height={100} src="https://d135u4jtzauizi.cloudfront.net/A24_PRISCILLA_A24_GIF03.gif" alt="" />
				<Image className={index === 1 ? 'object-cover h-screen w-screen absolute top-0 left-0 z-[1] opacity-100 duration-500' : 'object-cover h-screen w-screen absolute top-0 left-0 z-[1] opacity-0 duration-500'} width={100} height={100} src="https://d135u4jtzauizi.cloudfront.net/The-Curse-Trailer-Full-16x9-No-Captions_SITE-GIF.gif" alt="" />
				<Image className={index === 2 ? 'object-cover h-screen w-screen absolute top-0 left-0 z-[2] opacity-100 duration-500' : 'object-cover h-screen w-screen absolute top-0 left-0 z-[2] opacity-0 duration-500'} width={100} height={100} src="https://d135u4jtzauizi.cloudfront.net/DS_NEWSBLAST_GIF03_larger.gif" alt="" />
				<Image className={index === 3 ? 'object-cover h-screen w-screen absolute top-0 left-0 z-[3] opacity-100 duration-500' : 'object-cover h-screen w-screen absolute top-0 left-0 z-[3] opacity-0 duration-500'} width={100} height={100} src="https://d135u4jtzauizi.cloudfront.net/TIC_GIF_02_A24.gif" alt="" />
				<div className='h-screen w-screen absolute top-0 left-0 z-[5] bg-gradient-to-b from-transparent via-black/5 to-black'></div>
				<div className={'gap-3 flex flex-col justify-end lg:py-14 py-20 lg:px-28 px-5 absolute top-0 left-0 z-10 h-screen w-screen bg-gradient-radial from-transparent to-black ' + syne.className}>
					<SlideReveal delay={0.2}><h1 onMouseEnter={() => { setIndex(0) }} className={twMerge(index === 0 ? `w-max cursor-pointer text-white/60 duration-150 font-bold lg:text-7xl text-3xl capitalize ` : 'w-max cursor-pointer hover:text-white/60 duration-150 text-white font-bold lg:text-7xl text-3xl capitalize ', handleHoverColors())}>Reel 2022</h1></SlideReveal>
					<SlideReveal delay={0.5}><h1 onMouseEnter={() => { setIndex(1) }} className={twMerge(index === 1 ? `w-max cursor-pointer text-white/60 duration-150 font-bold lg:text-7xl text-3xl capitalize ` : 'w-max cursor-pointer hover:text-white/60 duration-150 text-white font-bold lg:text-7xl text-3xl capitalize ', handleHoverColors())}>Treated by Experts</h1></SlideReveal>
					<SlideReveal delay={0.8}><h1 onMouseEnter={() => { setIndex(2) }} className={twMerge(index === 2 ? `w-max cursor-pointer text-white/60 duration-150 font-bold lg:text-7xl text-3xl capitalize ` : 'w-max cursor-pointer hover:text-white/60 duration-150 text-white font-bold lg:text-7xl text-3xl capitalize ', handleHoverColors())}>Grooming Aspirations</h1></SlideReveal>
					<SlideReveal delay={1.1}><h1 onMouseEnter={() => { setIndex(3) }} className={twMerge(index === 3 ? `w-max cursor-pointer text-white/60 duration-150 font-bold lg:text-7xl text-3xl capitalize ` : 'w-max cursor-pointer hover:text-white/60 duration-150 text-white font-bold lg:text-7xl text-3xl capitalize ', handleHoverColors())}>Mid-Year Sale</h1></SlideReveal>
				</div>
			</section>

			<Reveal>
				<div className='w-full lg:py-14 py-10 lg:px-28 px-5'>
					<p className={'lg:text-5xl text-2xl font-medium pl-20 w-full text-left uppercase ' + syne.className}>At the house of Huckster, </p>
					<p className={'lg:text-5xl text-2xl font-medium w-full text-left uppercase ' + syne.className}>we create magic </p>
					<p className={'lg:text-5xl text-2xl font-medium w-full text-left uppercase ' + syne.className}>that captivates and transcends</p>
					<p className={'lg:text-5xl text-2xl font-medium w-full text-left uppercase ' + syne.className}> the solitary emotions. </p>

				</div>
			</Reveal>

			{/* desktop view creation */}
			<div className='w-full lg:py-20 py-10 lg:px-28 px-5 lg:grid hidden lg:gap-16 gap-5'>
				<Reveal><h1 className={'lg:text-8xl text-3xl font-semibold w-max gradientText ' + syne.className}>CREATIONS</h1></Reveal>
				<div className='w-full flex flex-col items-center lg:gap-10 gap-7'>
					<div className='w-full grid lg:grid-cols-12 grid-cols-1 '>
						<CreationCard className={"lg:col-span-12"} />
						<CreationCard className={"lg:col-span-6"} />
						<CreationCard className={"lg:col-span-6"} />
						<CreationCard className={"lg:col-span-12"} />
					</div>
					<div className='w-full flex justify-end items-end'>
						<Link href={'/work'}><Button className={"w-48"} text={"Watch More"} /></Link>
					</div>
				</div>
			</div>

			{/* mobile view creation */}
			<div className='w-full lg:py-20 py-10 lg:px-28 px-5 grid lg:hidden lg:gap-16 gap-6'>
				<Reveal><h1 className={'lg:text-8xl text-3xl font-semibold w-max gradientText ' + syne.className}>CREATIONS</h1></Reveal>
				<div className='w-full flex flex-col items-center lg:gap-10 gap-7'>
					<div className='w-full grid lg:grid-cols-12 grid-cols-1 gap-3'>
						<div className='cols-span-1 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
							<img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
							<div className='p-6 h-full w-full bg-gradient-to-t flex flex-col justify-between from-black/80 via-black/10 to-black/30  absolute top-0 left-0'>
								<h2 className={'gradientText delay-75 relative top-0 left-0 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold text-white ' + syne.className}>WAHL MEA</h2>
							</div>
						</div>
						<div className='cols-span-1 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
							<img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
							<div className='p-6 h-full w-full bg-gradient-to-t flex flex-col justify-between from-black/80 via-black/10 to-black/30  absolute top-0 left-0'>
								<h2 className={'gradientText delay-75 relative top-0 left-0 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold text-white ' + syne.className}>WAHL MEA</h2>
							</div>
						</div>
						<div className='cols-span-1 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
							<img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
							<div className='p-6 h-full w-full bg-gradient-to-t flex flex-col justify-between from-black/80 via-black/10 to-black/30  absolute top-0 left-0'>
								<h2 className={'gradientText delay-75 relative top-0 left-0 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold text-white ' + syne.className}>WAHL MEA</h2>
							</div>
						</div>
						<div className='cols-span-1 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
							<img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
							<div className='p-6 h-full w-full bg-gradient-to-t flex flex-col justify-between from-black/80 via-black/10 to-black/30  absolute top-0 left-0'>
								<h2 className={'gradientText delay-75 relative top-0 left-0 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold text-white ' + syne.className}>WAHL MEA</h2>
							</div>
						</div>
					</div>
					<div className='w-full flex justify-end items-end'>
						<Button className={"w-48"} text={"Watch More"} />
					</div>
				</div>
			</div>

			<div className='relative'>
				<div className='w-screen lg:h-screen '>
					<img className='lg:h-full w-full bg-cover z-0 object-cover' src="/assets/test.webp" alt="" />
					{/* <div className='w-screen h-screen bg-black/30 z-40'></div> */}
					<div className='w-screen lg:h-screen h-full bg-gradient-to-r lg:from-black/90 from-black lg:to-black/40 to-black/50 absolute top-0'></div>
				</div>
				<div className='absolute lg:top-10 top-14'>
					<div className='w-full lg:px-28 px-5 lg:py-14 py-7 grid gap-40'>
						<p className={'lg:text-7xl text-2xl font-medium ' + syne.className}>Let's redefine what's possible.</p>
					</div>
					<div className={'w-full lg:px-28 px-5  grid lg:gap-0 gap-4 ' + syne.className}>
						<Reveal delay={0}>
							<p style={{
								WebkitTextStroke: "1px white"
							}} className='text-transparent lg:text-9xl text-4xl font-medium'>VISUAL.</p>
						</Reveal>
						<Reveal delay={0.1}>
							<p style={{
								WebkitTextStroke: "1px white"
							}} className='text-transparent lg:text-9xl text-4xl font-medium'>NARRATIVE.</p>
						</Reveal>
						<Reveal delay={0.2}>
							<p style={{
								WebkitTextStroke: "1px white"
							}} className='text-transparent lg:text-9xl text-4xl font-medium'>CAPTIVATING.</p>
						</Reveal>
					</div>
				</div>
			</div>


			{/* services */}
			<div className='w-full lg:py-20 py-10 lg:px-28 px-5 flex flex-col items-end lg:gap-12 gap-0 relative '>
				<div className='flex flex-col justify-center gap-1 w-full'>
					<Reveal><h1 className={'lg:text-8xl text-3xl font-semibold w-max gradientText ' + syne.className}>SERVICES</h1></Reveal>
					<p className={'lg:text-2xl text-lg font-medium ' + syne.className}>'Cause we like to get straight to the point</p>
				</div>

				<div className={'lg:w-9/12 w-full flex flex-col items-end justify-end lg:gap-10 gap-10 ' + syne.className}>
					<Dropdown number={'01'} title={'Design'} list={["Concept", "Script", "Storyboarding and Pre-Visuals"]} subtitle={'The story begins'} />
					<Dropdown number={'02'} title={'Pre-Production'} list={["Technical Recce", "Casting", "Location Scouting", "Permissions"]} subtitle={'The characters are introduced'} />
					<Dropdown number={'03'} title={'Production'} list={["Award Winning Artisans", "Advanced Equipments and Technology"]} subtitle={'The main story hook'} />
					<Dropdown number={'04'} title={'Post-Production'} list={["VFX & VR ", "Music & Sound Design", "Color Grading", "Multi-Platform Masterting & Delivery"]} subtitle={'The climax'} />
				</div>

			</div>

			{/* production partener */}
			<div className='w-full lg:py-20 py-10 lg:px-28 px-5 flex flex-col justify-center items-center'>
				<p className={'lg:text-7xl text-2xl font-semibold text-left gradientText ' + syne.className}>A PRODUCTION HOUSE THAT ENVISIONS BRIDGING TIME ACROSS CULTURES</p>

				<div className='lg:mt-20 mt-10 w-full lg:mx-28 mx-5'>
					<div class="card-container ">
						<div class="card"><img className='h-full w-full p-5 object-contain aspect-square' src="/assets/brands-logo-1.png" alt="" /></div>
						<div class="card"><img className='h-full w-full p-5 object-contain aspect-square' src="/assets/brands-logo-2.png" alt="" /></div>
						<div class="card"><img className='h-full w-full p-5 object-contain aspect-square' src="/assets/brands-logo-3.png" alt="" /></div>
						<div class="card"><img className='h-full w-full p-5 object-contain aspect-square' src="/assets/brands-logo-1.png" alt="" /></div>
						<div class="card"><img className='h-full w-full p-5 object-contain aspect-square' src="/assets/brands-logo-2.png" alt="" /></div>
						<div class="card"><img className='h-full w-full p-5 object-contain aspect-square' src="/assets/brands-logo-3.png" alt="" /></div>
					</div>

					{/* <Swiper className='m-auto w-full h-full'
						grabCursor={true}
						loop={true}
						breakpoints={breakpoints}
						freeMode={true}
						modules={[Autoplay]}
						autoplay={{
							delay: 2000
						}}
					>
						<SwiperSlide className='rounded-3xl bg-white/20 border border-white/40 p-5  overflow-hidden h-full w-full flex justify-center items-center'><img className='h-full w-full object-contain aspect-square' src="/assets/brands-logo-1.png" alt="" /></SwiperSlide>
						<SwiperSlide className='rounded-3xl bg-white/20 border border-white/40 p-5 overflow-hidden h-full w-full flex justify-center items-center'><img className='h-full w-full object-contain aspect-square' src="/assets/brands-logo-2.png" alt="" /></SwiperSlide>
						<SwiperSlide className='rounded-3xl bg-white/20 border border-white/40 p-5 overflow-hidden h-full w-full flex justify-center items-center'><img className='h-full w-full object-contain aspect-square' src="/assets/brands-logo-3.png" alt="" /></SwiperSlide>
						<SwiperSlide className='rounded-3xl bg-white/20 border border-white/40 p-5  overflow-hidden h-full w-full flex justify-center items-center'><img className='h-full w-full object-contain aspect-square' src="/assets/brands-logo-1.png" alt="" /></SwiperSlide>
						<SwiperSlide className='rounded-3xl bg-white/20 border border-white/40 p-5  overflow-hidden h-full w-full flex justify-center items-center'><img className='h-full w-full object-contain aspect-square' src="/assets/brands-logo-2.png" alt="" /></SwiperSlide>
						<SwiperSlide className='rounded-3xl bg-white/20 border border-white/40 p-5  overflow-hidden h-full w-full flex justify-center items-center'><img className='h-full w-full object-contain aspect-square' src="/assets/brands-logo-3.png" alt="" /></SwiperSlide>
						<SwiperSlide className='rounded-3xl bg-white/20 border border-white/40 p-5 overflow-hidden h-full w-full flex justify-center items-center'><img className='h-full w-full object-contain aspect-square' src="/assets/brands-logo-1.png" alt="" /></SwiperSlide>
						<SwiperSlide className='rounded-3xl bg-white/20 border border-white/40 p-5  overflow-hidden h-full w-full flex justify-center items-center'><img className='h-full w-full object-contain aspect-square' src="/assets/brands-logo-2.png" alt="" /></SwiperSlide>
						<SwiperSlide className='rounded-3xl bg-white/20 border border-white/40 p-5 overflow-hidden h-full w-full flex justify-center items-center'><img className='h-full w-full object-contain aspect-square' src="/assets/brands-logo-3.png" alt="" /></SwiperSlide>
					</Swiper> */}
				</div>
			</div>


			{/* for you */}
			<div className='w-screen lg:h-screen relative'>
				<img className='w-screen lg:h-screen ' src='/assets/foryou.jpg' />
				<div className='w-screen lg:h-screen h-full bg-black/60 absolute top-0'></div>
				<div className='w-screen lg:h-screen h-full flex justify-center items-center absolute top-0'>
					<Link href={'/aboutus'} className={' link lg:text-6xl text-3xl font-semibold text-white/70 hover:text-white duration-200 ' + syne.className}>For You</Link>
				</div>
			</div>

			<div className='scroll-text-container w-full lg:py-28 py-14 px-5'>
				<p className={'lg:text-[150px] text-4xl font-semibold text-center scroll-text uppercase ' + syne.className}>Let's create <span className='text-accentorange'>Together!</span></p>
			</div>

		</Layout>
	)
}
