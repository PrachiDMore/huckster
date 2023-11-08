import { Inter, Syne } from 'next/font/google'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })

export default function Home() {
	return (
		<div className='overflow-auto'>
			<Layout>
				{/* hero section */}
				{/* <div className='w-full h-screen relative top-0'>
          <img className='h-full w-full' src='assets/herosection.jpg' />
        </div> */}

				<section className='relative h-screen w-screen bg-black' >
					<img className='absolute top-0 left-0 z-0 h-screen w-screen object-cover' src="https://framerusercontent.com/images/wihlKTqe05H57msmNhuMMZIAmM.png" alt="" />
					<div className='absolute top-0 left-0 z-10 h-screen w-screen bg-gradient-radial from-transparent to-black'  ></div>
				</section>

				<div className='w-full p-14 px-28'>
					<p className='text-5xl font-medium w-full text-center'>
						At the house of Huckster, <br />we create magic that captivates <br />and transcends the solitary emotions.
					</p>
				</div>

				<div className='w-full py-20 px-28 grid gap-16'>
					<h1 className={'text-8xl font-semibold w-full text-center ' + syne.className}>CREATIONS</h1>
					<div className='w-full flex flex-col items-center gap-10'>
						<div className='w-full grid grid-cols-12 gap-3'>
							<div className='group/creation col-span-8 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
								<img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
								<div className='p-6 h-full w-full bg-gradient-to-b flex flex-col justify-between from-black/80 via-black/10 to-black/30 group-hover/creation:bg-black/50 absolute top-0 left-0'>
									<h2 className={'relative top-0 left-0 group-hover/creation:left-4 group-hover/creation:top-4 transition-all ease-in-expo duration-300 text-3xl font-semibold text-white ' + syne.className}>Corporate Videos</h2>
									<p className={'relative bottom-0 left-0 group-hover/creation:left-4 group-hover/creation:bottom-4 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-300 text-lg font-medium text-white ' + syne.className}>While we all continue the celebration of the successful #fifaworldcup2022qatar  campaign, we had the opportunity to work with WAHL MiddleEast to develop and visualize this aspirational content.</p>
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
						<button className='bg-white/20 backdrop-blur-sm hover:bg-white/30 duration-300 w-48 p-3 rounded-full'>View more</button>
					</div>
				</div>

				<div className='relative'>
					<div className='w-screen h-screen '>
						<img className='h-full w-full bg-cover z-0' src="/assets/test.webp" alt="" />
						{/* <div className='w-screen h-screen bg-black/30 z-40'></div> */}
						<div className='w-screen h-screen bg-gradient-to-r from-black/80  to-black/40  absolute top-0'></div>
					</div>
					<div className='absolute top-10'>
						<div className='w-full px-28 py-14 grid gap-40'>
							<p className='text-7xl font-medium'>Let's redefine what's possible.</p>
						</div>
						<div className='w-full px-28 grid '>
							<p className='text-9xl font-medium'>VISUAL.</p>
							<p className='text-9xl font-medium'>NARRATIVE.</p>
							<p className='text-9xl font-medium'>CAPTIVATING.</p>
						</div>
					</div>
				</div>


				{/* services */}
				<div className='w-full py-20 px-28 grid gap-6'>
					<h1 className={'text-8xl font-semibold ' + syne.className}>SERVICES</h1>
					<p className='text-4xl font-medium'>Cause we like to get straight to the point</p>
				</div>

				{/* production partener */}
				<div className='w-full p-28 px-28 '>
					<p className='text-7xl font-semibold text-center'>A PRODUCTION HOUSE THAT ENVISIONS BRIDGING TIME ACROSS CULTURES</p>
				</div>


				{/* for you */}
				<div className='w-screen h-screen relative'>
					<img className='w-screen h-screen ' src='/assets/foryou.jpg' />
					<div className='w-screen h-screen bg-black/60 absolute top-0'></div>
					<div className='w-screen h-screen flex justify-center items-center absolute top-0'>
						<p className='text-6xl font-semibold text-white'>FOR YOU</p>
					</div>
				</div>


				<div className='w-full p-28 px-28 '>
					<p className='text-8xl font-semibold text-center'>Let's Create<br /> Something!</p>
				</div>


			</Layout>
		</div>
	)
}
