import { Inter, Syne } from 'next/font/google'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { useState } from 'react'
import Button from '@/components/Button'
import Dropdown from '@/components/Dropdown'
import 'swiper/css';
import TeamCard from '@/components/TeamCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Link from 'next/link'
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal'
import SlideReveal from '@/components/SlideReveal'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })

export default function Home() {
	const [index, setIndex] = useState(0)
	const breakpoints = {
		1024: {
			slidesPerView: 4,
		},
		768: {
			slidesPerView: 3,
		},
		648: {
			slidesPerView: 2,
		},
		320: {
			slidesPerView: 1,
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
				<div className={'gap-3 flex flex-col justify-end py-14 lg:px-28 px-5 absolute top-0 left-0 z-10 h-screen w-screen bg-gradient-radial from-transparent to-black ' + syne.className}>
					<SlideReveal delay={0.2}><h1 onMouseEnter={() => { setIndex(0) }} className={index === 0 ? 'w-max cursor-pointer text-white/60 duration-150 font-bold lg:text-7xl text-3xl capitalize' : 'w-max cursor-pointer hover:text-white/60 duration-150 text-white font-bold lg:text-7xl text-3xl capitalize'}>BFL</h1></SlideReveal>
					<SlideReveal delay={0.5}><h1 onMouseEnter={() => { setIndex(1) }} className={index === 1 ? 'w-max cursor-pointer text-white/60 duration-150 font-bold lg:text-7xl text-3xl capitalize' : 'w-max cursor-pointer hover:text-white/60 duration-150 text-white font-bold lg:text-7xl text-3xl capitalize'}>FUH</h1></SlideReveal>
					<SlideReveal delay={0.8}><h1 onMouseEnter={() => { setIndex(2) }} className={index === 2 ? 'w-max cursor-pointer text-white/60 duration-150 font-bold lg:text-7xl text-3xl capitalize' : 'w-max cursor-pointer hover:text-white/60 duration-150 text-white font-bold lg:text-7xl text-3xl capitalize'}>WAHL</h1></SlideReveal>
					<SlideReveal delay={1.1}><h1 onMouseEnter={() => { setIndex(3) }} className={index === 3 ? 'w-max cursor-pointer text-white/60 duration-150 font-bold lg:text-7xl text-3xl capitalize' : 'w-max cursor-pointer hover:text-white/60 duration-150 text-white font-bold lg:text-7xl text-3xl capitalize'}>Outlet Price</h1></SlideReveal>
				</div>
			</section>

			<Reveal>
				<div className='w-full lg:py-14 py-10 lg:px-28 px-5'>
					<p className='lg:text-5xl text-2xl font-medium w-full text-center'>
						At the house of Huckster, <br />we create magic that captivates <br />and transcends the solitary emotions.
					</p>
				</div>
			</Reveal>

{/* desktop view creation */}
			<div className='w-full lg:py-20 py-10 lg:px-28 px-5 lg:grid hidden lg:gap-16 gap-5'>
				<Reveal><h1 className={'lg:text-8xl text-3xl font-semibold w-full gradientText ' + syne.className}>CREATIONS</h1></Reveal>
				<div className='w-full flex flex-col items-center lg:gap-10 gap-7'>
					<div className='w-full grid lg:grid-cols-12 grid-cols-1 gap-3'>
						<div className='group/creation lg:col-span-8 cols-span-1 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
							<img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
							<div className='p-6 h-full w-full bg-gradient-to-b flex flex-col justify-between from-black/80 via-black/10 to-black/30 group-hover/creation:bg-black/50 absolute top-0 left-0'>
								<h2 className={'gradientText delay-75  relative top-0 left-0 lg:group-hover/creation:left-4 group-hover/creation:left-2 lg:group-hover/creation:top-4 group-hover/creation:top-2 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold text-white ' + syne.className}>Corporate Videos</h2>
								{/* <p className={'delay-75 relative bottom-0 left-0 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 font-normal text-white ' + syne.className}>While we all continue the celebration of the successful #fifaworldcup2022qatar  campaign, we had the opportunity to work with WAHL MiddleEast to develop and visualize this aspirational content.</p> */}
							</div>
						</div>
						<div className='group/creation lg:col-span-4 cols-span-1 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
							<img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
							<div className='p-6 h-full w-full bg-gradient-to-b flex flex-col justify-between from-black/80 via-black/10 to-black/30 group-hover/creation:bg-black/50 absolute top-0 left-0'>
							<h2 className={'gradientText delay-75  relative top-0 left-0 lg:group-hover/creation:left-4 group-hover/creation:left-2 lg:group-hover/creation:top-4 group-hover/creation:top-2 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold text-white ' + syne.className}>Corporate Videos</h2>
								{/* <p className={'delay-75 relative bottom-0 left-0 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 font-normal text-white ' + syne.className}>While we all continue the celebration of the successful #fifaworldcup2022qatar  campaign, we had the opportunity to work with WAHL MiddleEast to develop and visualize this aspirational content.</p> */}
							</div>
						</div>
						<div className='group/creation lg:col-span-4 cols-span-1 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
							<img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
							<div className='p-6 h-full w-full bg-gradient-to-b flex flex-col justify-between from-black/80 via-black/10 to-black/30 group-hover/creation:bg-black/50 absolute top-0 left-0'>
							<h2 className={'gradientText delay-75  relative top-0 left-0 lg:group-hover/creation:left-4 group-hover/creation:left-2 lg:group-hover/creation:top-4 group-hover/creation:top-2 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold text-white ' + syne.className}>Corporate Videos</h2>
								{/* <p className={'delay-75 relative bottom-0 left-0 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 font-normal text-white ' + syne.className}>While we all continue the celebration of the successful #fifaworldcup2022qatar  campaign, we had the opportunity to work with WAHL MiddleEast to develop and visualize this aspirational content.</p> */}
							</div>
						</div>
						<div className='group/creation lg:col-span-8 cols-span-1 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
							<img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
							<div className='p-6 h-full w-full bg-gradient-to-b flex flex-col justify-between from-black/80 via-black/10 to-black/30 group-hover/creation:bg-black/50 absolute top-0 left-0'>
							<h2 className={'gradientText delay-75  relative top-0 left-0 lg:group-hover/creation:left-4 group-hover/creation:left-2 lg:group-hover/creation:top-4 group-hover/creation:top-2 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold text-white ' + syne.className}>Corporate Videos</h2>
								{/* <p className={'delay-75 relative bottom-0 left-0 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 font-normal text-white ' + syne.className}>While we all continue the celebration of the successful #fifaworldcup2022qatar  campaign, we had the opportunity to work with WAHL MiddleEast to develop and visualize this aspirational content.</p> */}
							</div>
						</div>
					</div>
					<Button className={"w-48"} text={"Watch More"} />
				</div>
			</div>

			{/* mobile view creation */}
			<div className='w-full lg:py-20 py-10 lg:px-28 px-5 grid lg:hidden lg:gap-16 gap-5'>
				<Reveal><h1 className={'lg:text-8xl text-3xl font-semibold w-full gradientText ' + syne.className}>CREATIONS</h1></Reveal>
				<div className='w-full flex flex-col items-center lg:gap-10 gap-7'>
					<div className='w-full grid lg:grid-cols-12 grid-cols-1 gap-3'>
						<div className='cols-span-1 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
							<img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
							<div className='p-6 h-full w-full bg-gradient-to-t flex flex-col justify-between from-black/80 via-black/10 to-black/30  absolute top-0 left-0'>
								<h2 className={'gradientText delay-75 relative top-0 left-0 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold text-white ' + syne.className}>Corporate Videos</h2>
								{/* <p className={'delay-75 relative bottom-0 left-0 opacity-1 transition-all ease-in-expo duration-700 font-normal text-white ' + syne.className}>While we all continue the celebration of the successful #fifaworldcup2022qatar  campaign, we had the opportunity to work with WAHL MiddleEast to develop and visualize this aspirational content.</p> */}
							</div>
						</div>
						<div className='cols-span-1 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
							<img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
							<div className='p-6 h-full w-full bg-gradient-to-t flex flex-col justify-between from-black/80 via-black/10 to-black/30  absolute top-0 left-0'>
								<h2 className={'gradientText delay-75 relative top-0 left-0 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold text-white ' + syne.className}>Corporate Videos</h2>
								{/* <p className={'delay-75 relative bottom-0 left-0 opacity-1 transition-all ease-in-expo duration-700 font-normal text-white ' + syne.className}>While we all continue the celebration of the successful #fifaworldcup2022qatar  campaign, we had the opportunity to work with WAHL MiddleEast to develop and visualize this aspirational content.</p> */}
							</div>
						</div>
						<div className='cols-span-1 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
							<img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
							<div className='p-6 h-full w-full bg-gradient-to-t flex flex-col justify-between from-black/80 via-black/10 to-black/30  absolute top-0 left-0'>
								<h2 className={'gradientText delay-75 relative top-0 left-0 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold text-white ' + syne.className}>Corporate Videos</h2>
								{/* <p className={'delay-75 relative bottom-0 left-0 opacity-1 transition-all ease-in-expo duration-700 font-normal text-white ' + syne.className}>While we all continue the celebration of the successful #fifaworldcup2022qatar  campaign, we had the opportunity to work with WAHL MiddleEast to develop and visualize this aspirational content.</p> */}
							</div>
						</div>
						<div className='cols-span-1 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
							<img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
							<div className='p-6 h-full w-full bg-gradient-to-t flex flex-col justify-between from-black/80 via-black/10 to-black/30  absolute top-0 left-0'>
								<h2 className={'gradientText delay-75 relative top-0 left-0 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold text-white ' + syne.className}>Corporate Videos</h2>
								{/* <p className={'delay-75 relative bottom-0 left-0 opacity-1 transition-all ease-in-expo duration-700 font-normal text-white ' + syne.className}>While we all continue the celebration of the successful #fifaworldcup2022qatar  campaign, we had the opportunity to work with WAHL MiddleEast to develop and visualize this aspirational content.</p> */}
							</div>
						</div>
					</div>
					<Button className={"w-48"} text={"Watch More"} />
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
						<p className='lg:text-7xl text-3xl font-medium'>Let's redefine what's possible.</p>
					</div>
					<div className={'w-full lg:px-28 px-5  grid ' + syne.className}>
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
			<div className='w-full lg:py-20 py-10 lg:px-28 px-5 grid gap-7 relative min-h-screen'>
				<img src="/assets/bg-lines.svg" className='w-full h-full absolute top-0 left-0 object-cover object-center' alt="" />
				<div className='flex justify-center gap-1 w-full'>
					<h1 className={'text-center lg:text-4xl text-3xl font-semibold mb-3 ' + syne.className}>Services: Cause we like to get straight to the point</h1>
					{/* <p className='lg:text-4xl text-lg font-medium'>Cause we like to get straight to the point</p> */}
				</div>

				<div className={'w-full flex flex-col items-center lg:gap-10 gap-16 ' + syne.className}>
					{/* <div className='relative lg:w-8/12 w-[85%] h-max mt-20'>
						<h1 className={'lg:-left-32 -left-10 -top-4 leading-3 lg:opacity-10 opacity-25 absolute text-[100px] lg:text-[200px] font-bold ' + syne.className}>01</h1>
						<h2 className='gradientText text-white/90 font-bold lg:text-4xl text-3xl'>Design</h2>
						<p className='mt-1 lg:text-lg lg:w-[90%] w-full'>Unleash the power of storytelling with our design service, where creative development, expert script writing, and dynamic storyboard and pre-visuals converge to bring your vision to cinematic life.</p>
					</div>
					<div className='lg:left-32 left-0 relative lg:w-8/12 w-[85%] h-max'>
						<h1 className={'lg:-left-32 -left-10 -top-4 leading-3 lg:opacity-10 opacity-25 absolute text-[100px] lg:text-[200px] font-bold ' + syne.className}>02</h1>
						<h2 className='gradientText text-white/90 font-bold lg:text-4xl text-3xl'>Pre-Production</h2>
						<p className='mt-1 lg:text-lg lg:w-[90%] w-full'>Streamline your narrative journey with our pre-production expertise, seamlessly managing administration, logistics, location scouting, talent casting, and crew sourcing for a flawless project launch.</p>
					</div>
					<div className='relative lg:w-8/12 w-[85%] h-max'>
						<h1 className={'lg:-left-32 -left-10 -top-4 leading-3 lg:opacity-10 opacity-25 absolute text-[100px] lg:text-[200px] font-bold ' + syne.className}>03</h1>
						<h2 className='gradientText text-white/90 font-bold lg:text-4xl text-3xl'>Production</h2>
						<p className='mt-1 lg:text-lg lg:w-[90%] w-full'>Embark on a production journey with us, offering scalable services, award-winning directors and producers, in-house cinema gear, a collaborative on-set culture, and top-notch studio space and rentals.</p>
					</div>
					<div className='lg:left-32 left-0 relative lg:w-8/12 w-[85%] h-max'>
						<h1 className={'lg:-left-32 -left-10 -top-4 leading-3 lg:opacity-10 opacity-25 absolute text-[100px] lg:text-[200px] font-bold ' + syne.className}>04</h1>
						<h2 className='gradientText text-white/90 font-bold lg:text-4xl text-3xl'>Post-Production</h2>
						<p className='mt-1 lg:text-lg lg:w-[90%] w-full'>Crafting cinematic excellence in post-production with precision editing, dynamic motion graphics, immersive animation, impactful sound design, seamless color grading, and multi-platform mastering for unparalleled delivery.</p>
					</div> */}
					<Dropdown number={'01'} title={'Design'} list={["Creative Development", "Script Writing", "Storyboarding and Pre-Visuals"]} subtitle={'The story begins'} />
					<Dropdown number={'02'} title={'Pre-Production'} list={["Project Management", "Administrator & Logistics", "Location Scouting", "Talent Casting", "Crew Sourcing"]} subtitle={'The characters are introduced'} />
					<Dropdown number={'03'} title={'Production'} list={["Scalable Service Production", "Award Winning Directors & Producers", "In-house cinema Gear", "On-set Culture of Collaboration", "Studio Space & Rentals"]} subtitle={'The main story hook'} />
					<Dropdown number={'04'} title={'Post-Production'} list={["Editing", "Motions Graphics & Animation", "Sound Design", "Color Grading", "Multi-Platform Masterting & Delivery"]} subtitle={'The climax'} />
				</div>

			</div>

			{/* production partener */}
			<div className='w-full lg:py-28 py-10 lg:px-28 px-5'>
				<p className={'lg:text-7xl text-2xl font-semibold text-center ' + syne.className}>A PRODUCTION HOUSE THAT ENVISIONS BRIDGING TIME ACROSS CULTURES</p>

				<div className='lg:mt-20 mt-10 w-full'>
					<Swiper
						className='m-auto'
						grabCursor={true}
						loop={true}
						breakpoints={breakpoints}
						spaceBetween={0}
						slidesPerView={4}
						modules={[Autoplay]}
						autoplay={{
							delay: 2000
						}}
					>
						<SwiperSlide className='p-6 h-20 w-48 border border-white flex justify-center items-center'><img className='h-full w-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="" /></SwiperSlide>
						<SwiperSlide className='p-6 h-20 w-48 border border-white flex justify-center items-center'><img className='h-full w-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" alt="" /></SwiperSlide>
						<SwiperSlide className='p-6 h-20 w-48 border border-white flex justify-center items-center'><img className='h-full w-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="" /></SwiperSlide>
						<SwiperSlide className='p-6 h-20 w-48 border border-white flex justify-center items-center'><img className='h-full w-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" alt="" /></SwiperSlide>
						<SwiperSlide className='p-6 h-20 w-48 border border-white flex justify-center items-center'><img className='h-full w-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="" /></SwiperSlide>
					</Swiper>
				</div>
			</div>


			{/* for you */}
			<div className='w-screen lg:h-screen relative'>
				<img className='w-screen lg:h-screen ' src='/assets/foryou.jpg' />
				<div className='w-screen lg:h-screen h-full bg-black/60 absolute top-0'></div>
				<div className='w-screen lg:h-screen h-full flex justify-center items-center absolute top-0'>
					<Link href={'/aboutus'} className={'lg:text-6xl text-3xl font-semibold text-white/70 hover:text-white duration-200 ' + syne.className}>For You</Link>
				</div>
			</div>

				<div className='w-full lg:py-28 py-10 lg:px-28 px-5'>
        <div className='w-full py-10 bg-gradient-to-b lg:from-white/40 from-white/20 to-white/0  flex flex-col items-center gap-10 border border-white/50 rounded-3xl'>
          <img className='lg:w-36 w-28' src="/assets/HucksterLogo.png" alt="" />
          <div className=' '>
            <p className={'lg:text-8xl text-4xl font-semibold text-center ' + syne.className}>Let's Create<br /> Something!</p>
          </div>
        </div>
      </div>

			<div className='w-full lg:py-28 py-10 lg:px-28 px-5 hidden'>
				<div className='w-full py-10 bg-gradient-to-b lg:from-white/40 from-white/20 to-white/0  flex flex-col items-center gap-10 border border-white/50 rounded-3xl'>
					<img className='lg:w-36 w-28' src="/assets/HucksterLogo.png" alt="" />
					<div className=' '>
						<p className={'lg:text-8xl text-4xl font-semibold text-center ' + syne.className}>Let's Create<br />Something!</p>
					</div>
				</div>
			</div>

		</Layout>
	)
}
