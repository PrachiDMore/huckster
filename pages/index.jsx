import { DM_Sans, Syne } from 'next/font/google'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { useEffect, useState } from 'react'
import Button from '@/components/Button'
import Dropdown from '@/components/Dropdown'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import "swiper/css/navigation";
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import SlideReveal from '@/components/SlideReveal'
import CreationCard from '@/components/CreationCard'
import { twMerge } from 'tailwind-merge'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import axios from 'axios'

const syne = DM_Sans({ subsets: ['latin'] })

export default function Home() {
	const [index, setIndex] = useState(0);
	const [logos, setLogos] = useState([])
	const [creations, setCreations] = useState([])
	const [services, setServices] = useState([])
	const [banner, setBanner] = useState("")

	useEffect(() => {
		axios("https://huckster-backend.vercel.app/get-creation")
			.then((res) => {
				setCreations(res.data.response == undefined ? [] : res.data.response)
			}).catch((err) => {

			})
		axios("https://huckster-backend.vercel.app/get-client-logo")
			.then((res) => {
				setLogos(res.data.response == undefined ? [] : res.data.response)
			})
			.catch((err) => {

			})
		axios("https://huckster-backend.vercel.app/get-services")
			.then((res) => {
				setServices(res.data.response == undefined ? [] : res.data.response)
			})
			.catch((err) => {

			})
		axios("https://huckster-backend.vercel.app/get-banner")
			.then((res) => {
				setBanner(res.data.response[0]?.bannerURL)
			})
			.catch((err) => {

			})
	}, [])

	useEffect(() => {
		var videoElement = document.getElementById('video-main');

		function isElementInViewport(el) {
			var rect = el.getBoundingClientRect();
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			);
		}

		// Function to mute the video
		function muteVideoIfNotInView() {
			if (isElementInViewport(videoElement)) {
				videoElement.muted = false; // Unmute the video
			} else {
				videoElement.muted = true; // Mute the video
			}
		}

		muteVideoIfNotInView();

		window.addEventListener('scroll', function () {
			muteVideoIfNotInView();
		});
	}, [])


	const handleHoverColors = () => {
		const random = Math.random() * 100;
		if (random < 10) {
			return 'hover:text-accentolive';
		} else if (random > 10 && random < 20) {
			return 'hover:text-accentblue';
		} else if (random > 20 && random < 30) {
			return 'hover:text-accenttan';
		} else if (random > 30 && random < 40) {
			return 'hover:text-accentteal';
		} else if (random > 40 && random < 50) {
			return 'hover:text-accentorange';
		} else if (random > 50 && random < 60) {
			return 'hover:text-accentblue';
		} else if (random > 60 && random < 70) {
			return 'hover:text-accenttan';
		} else if (random > 70 && random < 80) {
			return 'hover:text-accentteal';
		} else if (random > 80 && random < 90) {
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
				<video controls={false} id={`video-main`} muted={index !== creations?.slice(0, 4)?.filter((value) => {
					return value?.display
				}).length} autoPlay loop className={creations?.slice(0, 4)?.filter((value) => {
					return value?.display
				}).length === index ? 'object-cover h-screen w-screen absolute top-0 left-0 z-[0] opacity-100 duration-500' : 'object-cover h-screen w-screen absolute top-0 left-0 z-[0] opacity-0 duration-500'} width={100} height={100} src={banner} alt="" />
				{
					creations?.slice(0, 4)?.filter((value) => {
						return value?.display
					})?.sort((a, b) => {
						return a.index - b.index
					})?.map((value, int) => {
						return <video id={`video-${int}`} muted={index !== int} controls={false} autoPlay loop className={index === int ? 'object-cover h-screen w-screen absolute top-0 left-0 z-[0] opacity-100 duration-500' : 'object-cover h-screen w-screen absolute top-0 left-0 z-[0] opacity-0 duration-500'} width={100} height={100} src={value?.videoURL} alt="" />
					})
				}
				<div className='h-screen w-screen absolute top-0 left-0 z-[5] bg-gradient-to-b from-transparent via-black/5 to-black'></div>
				<div className={'gap-3 flex flex-col justify-end lg:py-14 py-20 lg:px-28 px-5 absolute top-0 left-0 z-10 h-screen w-screen bg-gradient-radial from-transparent to-black ' + syne.className}>
					{
						creations?.slice(0, 4)?.filter((value) => {
							return value?.display
						})?.sort((a, b) => {
							return a.index - b.index
						})?.map((value, int) => {
							return <SlideReveal delay={0.2}><h1 onMouseEnter={() => { setIndex(int) }} onMouseLeave={() => setIndex(creations?.slice(0, 4)?.filter((value) => {
								return value?.display
							}).length)} className={twMerge(index === int ? `w-max cursor-pointer text-white/60 duration-150 font-bold lg:text-7xl text-3xl capitalize ` : 'w-max cursor-pointer hover:text-white/60 duration-150 text-white font-bold lg:text-7xl text-3xl capitalize ', handleHoverColors())}>{value?.title}</h1></SlideReveal>
						})
					}
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
						{
							creations?.slice(0, 4)?.filter((value) => {
								return value?.display
							})?.map((value, index) => {
								return <CreationCard data={value} className={index === 0 || index % 3 === 0 ? "lg:col-span-12" : "lg:col-span-6"} />
							})
						}
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
							}} className='lg:text-9xl text-4xl font-medium'>VISUAL.</p>
						</Reveal>
						<Reveal delay={0.1}>
							<p style={{
								WebkitTextStroke: "1px white"
							}} className='lg:text-9xl text-4xl font-medium'>NARRATIVE.</p>
						</Reveal>
						<Reveal delay={0.2}>
							<p style={{
								WebkitTextStroke: "1px white"
							}} className='lg:text-9xl text-4xl font-medium'>CAPTIVATING.</p>
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

				<div className={'lg:w-9/12 w-full flex flex-col items-end justify-end lg:gap-10 gap-10 mt-4 ' + syne.className}>
					{
						services?.sort((a, b) => {
							return a.index - b.index
						})?.map((service, index) => {
							return <Dropdown number={(index + 1) < 9 ? `0${index + 1}` : `${index + 1}`} title={service?.service} list={service?.subServices?.sort((a, b) => {
								return a.index - b.index
							})?.map((subservice) => {
								return subservice.subService
							})} subtitle={service?.description} />
						})
					}
					{/* <Dropdown number={'04'} title={'Post-Production'} list={["VFX & VR ", "Music & Sound Design", "Color Grading", "Multi-Platform Masterting & Delivery"]} subtitle={'The climax'} /> */}
				</div>

			</div>

			{/* production partener */}
			<div className='w-full lg:py-20 py-10 lg:px-28 px-5 flex flex-col justify-center items-center'>
				<p className={'lg:text-7xl text-2xl font-semibold text-left gradientText ' + syne.className}>A PRODUCTION HOUSE THAT ENVISIONS BRIDGING TIME ACROSS CULTURES</p>

				<div className='relative lg:mt-20 mt-10 w-full lg:mx-28 mx-5'>
					<button className="lg:flex hidden absolute top-1/2 -translate-y-1/2 -translate-x-full arrow-left z-50 bg-white lg:-ml-4 justify-center items-center w-10 h-10 rounded-full shadow focus:outline-none">
						<FaArrowLeft className='text-black' />
					</button>
					<Swiper className='m-auto w-full h-full'
						grabCursor={true}
						loop={true}
						breakpoints={breakpoints}
						freeMode={true}
						modules={[Autoplay, Navigation]}
						autoplay={{
							delay: 2000
						}}
						navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
					>
						{
							logos.map((logo, index) => {
								return <SwiperSlide key={index} className='rounded-3xl p-5 overflow-hidden h-full w-full flex justify-center items-center'><img className='h-full w-full object-contain aspect-square' src={logo?.logoURL} alt="" /></SwiperSlide>
							})
						}
					</Swiper>

					<button className="lg:flex hidden absolute top-1/2 -translate-y-1/2 right-0 translate-x-full z-50 arrow-right bg-white lg:-mr-4 justify-center items-center w-10 h-10 rounded-full shadow focus:outline-none">
						<FaArrowRight className='text-black' />
					</button>
				</div>
				<div className='flex gap-6 lg:hidden'>
					<button className="lg:hidden flex arrow-left z-50 bg-white lg:-ml-4 justify-center items-center w-10 h-10 rounded-full shadow focus:outline-none">
						<FaArrowLeft className='text-black' />
					</button>
					<button className="lg:hidden flex z-50 arrow-right bg-white lg:-mr-4 justify-center items-center w-10 h-10 rounded-full shadow focus:outline-none">
						<FaArrowRight className='text-black' />
					</button>
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
				<p className={'lg:text-[150px] text-4xl font-semibold text-center scroll-text uppercase ' + syne.className}>Let's <span className='text-accentorange'>create</span> Together!</p>
			</div>

		</Layout>
	)
}
