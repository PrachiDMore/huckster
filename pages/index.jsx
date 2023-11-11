import { Inter, Syne } from 'next/font/google'
import Layout from '@/components/Layout'
import { useState } from 'react'
import Button from '@/components/Button'
import Dropdown from '@/components/Dropdown'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })

export default function Home() {
	const [index, setIndex] = useState(0)


	return (
		<div className='overflow-auto'>
			<Layout>
				{/* hero section */}
				{/* <div className='w-full h-screen relative top-0'>
          <img className='h-full w-full' src='assets/herosection.jpg' />
        </div> */}

				<section className='relative h-screen w-screen bg-black' >
					<img className={index === 0 ? 'h-screen w-screen absolute top-0 left-0 z-[0] opacity-100 duration-500' : 'h-screen w-screen absolute top-0 left-0 z-[0] opacity-0 duration-500'} src="https://d135u4jtzauizi.cloudfront.net/A24_PRISCILLA_A24_GIF03.gif" alt="" />
					<img className={index === 1 ? 'h-screen w-screen absolute top-0 left-0 z-[1] opacity-100 duration-500' : 'h-screen w-screen absolute top-0 left-0 z-[1] opacity-0 duration-500'} src="https://d135u4jtzauizi.cloudfront.net/The-Curse-Trailer-Full-16x9-No-Captions_SITE-GIF.gif" alt="" />
					<img className={index === 2 ? 'h-screen w-screen absolute top-0 left-0 z-[2] opacity-100 duration-500' : 'h-screen w-screen absolute top-0 left-0 z-[2] opacity-0 duration-500'} src="https://d135u4jtzauizi.cloudfront.net/DS_NEWSBLAST_GIF03_larger.gif" alt="" />
					<img className={index === 3 ? 'h-screen w-screen absolute top-0 left-0 z-[3] opacity-100 duration-500' : 'h-screen w-screen absolute top-0 left-0 z-[3] opacity-0 duration-500'} src="https://d135u4jtzauizi.cloudfront.net/TIC_GIF_02_A24.gif" alt="" />
					<div className={'gap-3 flex flex-col justify-end py-14 px-28 absolute top-0 left-0 z-10 h-screen w-screen bg-gradient-radial from-transparent to-black ' + syne.className}>
						<h1 onMouseEnter={() => { setIndex(0) }} className={index === 0 ? 'w-max cursor-pointer text-white/60 duration-150 font-bold text-7xl capitalize' : 'w-max cursor-pointer hover:text-white/60 duration-150 text-white font-bold text-7xl capitalize'}>Priscilla</h1>
						<h1 onMouseEnter={() => { setIndex(1) }} className={index === 1 ? 'w-max cursor-pointer text-white/60 duration-150 font-bold text-7xl capitalize' : 'w-max cursor-pointer hover:text-white/60 duration-150 text-white font-bold text-7xl capitalize'}>The Curse</h1>
						<h1 onMouseEnter={() => { setIndex(2) }} className={index === 2 ? 'w-max cursor-pointer text-white/60 duration-150 font-bold text-7xl capitalize' : 'w-max cursor-pointer hover:text-white/60 duration-150 text-white font-bold text-7xl capitalize'}>Dream Scenario</h1>
						<h1 onMouseEnter={() => { setIndex(3) }} className={index === 3 ? 'w-max cursor-pointer text-white/60 duration-150 font-bold text-7xl capitalize' : 'w-max cursor-pointer hover:text-white/60 duration-150 text-white font-bold text-7xl capitalize'}>The Iron Claw</h1>
					</div>
				</section>

				<div className='w-full p-14 px-28'>
					<p className='text-5xl font-medium w-full text-center'>
						At the house of Huckster, <br />we create magic that captivates <br />and transcends the solitary emotions.
					</p>
				</div>

				<div className='w-full py-20 px-28 grid gap-16'>
					<h1 className={'mx-auto text-8xl font-semibold w-full text-center gradientText ' + syne.className}>CREATIONS</h1>
					<div className='w-full flex flex-col items-center gap-10'>
						<div className='w-full grid grid-cols-12 gap-3'>
							<div className='group/creation col-span-8 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
								<img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
								<div className='p-6 h-full w-full bg-gradient-to-b flex flex-col justify-between from-black/80 via-black/10 to-black/30 group-hover/creation:bg-black/50 absolute top-0 left-0'>
									<h2 className={'gradientText delay-75 relative top-0 left-0 group-hover/creation:left-4 group-hover/creation:top-4 transition-all ease-in-expo duration-700 text-3xl font-semibold text-white ' + syne.className}>Corporate Videos</h2>
									<p className={'delay-75 relative bottom-0 left-0 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 font-normal text-white ' + syne.className}>While we all continue the celebration of the successful #fifaworldcup2022qatar  campaign, we had the opportunity to work with WAHL MiddleEast to develop and visualize this aspirational content.</p>
								</div>
							</div>
							<div className='group/creation col-span-4 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
								<img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
								<div className='p-6 h-full w-full bg-gradient-to-b from-black/80 via-black/10 to-black/30 absolute top-0 left-0'>
									<h2 className={'relative top-0 left-0 group-hover/creation:left-4 group-hover/creation:top-4 transition-all ease-in-expo duration-300 text-3xl font-semibold text-white ' + syne.className}>Corporate Videos</h2>
									<p className={'relative bottom-0 left-0 group-hover/creation:left-4 group-hover/creation:bottom-4 transition-all ease-in-expo duration-300 text-lg font-medium text-white opacity-0 group-hover/creation:opacity-100' + syne.className}>While we all continue the celebration of the successful #fifaworldcup2022qatar  campaign, we had the opportunity to work with WAHL MiddleEast to develop and visualize this aspirational content.</p>
								</div>
							</div>
							<div className='group/creation col-span-4 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
								<img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
								<div className='p-6 h-full w-full bg-gradient-to-b from-black/80 via-black/10 to-black/30 absolute top-0 left-0'>
									<h2 className={'relative top-0 left-0 group-hover/creation:left-4 group-hover/creation:top-4 transition-all ease-in-expo duration-300 text-3xl font-semibold text-white ' + syne.className}>Corporate Videos</h2>
									<p className={'relative bottom-0 left-0 group-hover/creation:left-4 group-hover/creation:bottom-4 transition-all ease-in-expo duration-300 text-lg font-medium text-white opacity-0 group-hover/creation:opacity-100' + syne.className}>While we all continue the celebration of the successful #fifaworldcup2022qatar  campaign, we had the opportunity to work with WAHL MiddleEast to develop and visualize this aspirational content.</p>
								</div>
							</div>
							<div className='group/creation col-span-8 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
								<img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
								<div className='p-6 h-full w-full bg-gradient-to-b from-black/80 via-black/10 to-black/30 absolute top-0 left-0'>
									<h2 className={'relative top-0 left-0 group-hover/creation:left-4 group-hover/creation:top-4 transition-all ease-in-expo duration-300 text-3xl font-semibold text-white ' + syne.className}>Corporate Videos</h2>
									<p className={'relative bottom-0 left-0 group-hover/creation:left-4 group-hover/creation:bottom-4 transition-all ease-in-expo duration-300 text-lg font-medium text-white opacity-0 group-hover/creation:opacity-100' + syne.className}>While we all continue the celebration of the successful #fifaworldcup2022qatar  campaign, we had the opportunity to work with WAHL MiddleEast to develop and visualize this aspirational content.</p>
								</div>
							</div>
							<div className='group/creation col-span-6 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
								<img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
								<div className='p-6 h-full w-full bg-gradient-to-b from-black/80 via-black/10 to-black/30 absolute top-0 left-0'>
									<h2 className={'relative top-0 left-0 group-hover/creation:left-4 group-hover/creation:top-4 transition-all ease-in-expo duration-300 text-3xl font-semibold text-white ' + syne.className}>Corporate Videos</h2>
									<p className={'relative bottom-0 left-0 group-hover/creation:left-4 group-hover/creation:bottom-4 transition-all ease-in-expo duration-300 text-lg font-medium text-white opacity-0 group-hover/creation:opacity-100' + syne.className}>While we all continue the celebration of the successful #fifaworldcup2022qatar  campaign, we had the opportunity to work with WAHL MiddleEast to develop and visualize this aspirational content.</p>
								</div>
							</div>
							<div className='group/creation col-span-6 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
								<img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
								<div className='p-6 h-full w-full bg-gradient-to-b from-black/80 via-black/10 to-black/30 absolute top-0 left-0'>
									<h2 className={'relative top-0 left-0 group-hover/creation:left-4 group-hover/creation:top-4 transition-all ease-in-expo duration-300 text-3xl font-semibold text-white ' + syne.className}>Corporate Videos</h2>
									<p className={'relative bottom-0 left-0 group-hover/creation:left-4 group-hover/creation:bottom-4 transition-all ease-in-expo duration-300 text-lg font-medium text-white opacity-0 group-hover/creation:opacity-100' + syne.className}>While we all continue the celebration of the successful #fifaworldcup2022qatar  campaign, we had the opportunity to work with WAHL MiddleEast to develop and visualize this aspirational content.</p>
								</div>
							</div>

							{/* <div className='w-full h-96 flex  gap-10'>
                <img className='rounded-xl w-1/3' src='assets/herosection.jpg' />
                <img className='rounded-xl w-2/3' src='assets/herosection.jpg' />
              </div>
              <div className='w-full h-96 grid grid-cols-2  gap-10'>
                <img className='rounded-xl' src='assets/herosection.jpg' />
                <img className='rounded-xl' src='assets/herosection.jpg' />
              </div> */}
						</div>
						<Button className={"w-48"} text={"Watch More"} />
					</div>
				</div>

				<div className='relative'>
					<div className='w-screen h-screen '>
						<img className='h-full w-full bg-cover z-0' src="/assets/test.webp" alt="" />
						{/* <div className='w-screen h-screen bg-black/30 z-40'></div> */}
						<div className='w-screen h-screen bg-gradient-to-r from-black/90  to-black/40  absolute top-0'></div>
					</div>
					<div className='absolute top-10'>
						<div className='w-full px-28 py-14 grid gap-40'>
							<p className='text-7xl font-medium'>Let's redefine what's possible.</p>
						</div>
						<div className={'w-full px-28 grid ' + syne.className}>
							<p style={{
								WebkitTextStroke: "1px white"
							}} className='text-transparent text-9xl font-medium'>VISUAL.</p>
							<p style={{
								WebkitTextStroke: "1px white"
							}} className='text-transparent text-9xl font-medium'>NARRATIVE.</p>
							<p style={{
								WebkitTextStroke: "1px white"
							}} className='text-transparent text-9xl font-medium'>CAPTIVATING.</p>
						</div>
					</div>
				</div>


				{/* services */}
				<div className='w-full py-20 px-28 grid gap-6'>
					<h1 className={'text-8xl font-semibold ' + syne.className}>SERVICES</h1>
					<p className='text-4xl font-medium'>Cause we like to get straight to the point</p>

					<Dropdown number={'01'} heading={'Design'} desc={'The story begins'}/>
					<Dropdown number={'02'} heading={'PRE-PRODUCTION'} desc={'The characters are introduced'}/>
					<Dropdown number={'03'} heading={'PRODUCTION'} desc={'The main story hook'}/>
					<Dropdown number={'04'} heading={'POST-PRODUCTION'} desc={'The climax'}/>

				</div>

				{/* production partener */}
				<div className='w-full p-28 px-28 '>
					<p className={'text-7xl font-semibold text-center ' + syne.className}>A PRODUCTION HOUSE THAT ENVISIONS BRIDGING TIME ACROSS CULTURES</p>
				</div>


				{/* for you */}
				<div className='w-screen h-screen relative'>
					<img className='w-screen h-screen ' src='/assets/foryou.jpg' />
					<div className='w-screen h-screen bg-black/60 absolute top-0'></div>
					<div className='w-screen h-screen flex justify-center items-center absolute top-0'>
						<p className='text-6xl font-semibold text-white'>FOR YOU</p>
					</div>
				</div>

				{/* 
				<div className='w-full p-28 px-28 '>
					<p className='text-8xl font-semibold text-center'>Let's Create<br /> Something!</p>
				</div> */}

				<div className='w-full p-28 px-28 '>
					<div className='w-full py-10 bg-gradient-to-b from-white/40  to-white/0  flex flex-col items-center gap-10 border border-white/50 rounded-3xl'>
						<img className='w-36' src="/assets/HucksterLogo.png" alt="" />
						<div className=' '>
							<p className={'text-8xl font-semibold text-center ' + syne.className}>Let's Create<br />Something!</p>
						</div>
					</div>
				</div>

			</Layout>
		</div>
	)
}
