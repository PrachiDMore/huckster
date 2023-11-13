import Layout from '@/components/Layout'
import React from 'react'
import { Inter, Syne } from 'next/font/google'
import TeamCard from '@/components/TeamCard'
import HeroSection from '@/components/HeroSection'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })

const aboutus = () => {
  return (
    <Layout>
      {/* <div className='pt-32'>
        <h1 className={'mx-auto p-10   text-8xl font-semibold w-full text-center gradientText ' + syne.className}>For You</h1>
        <p className='text-5xl text-white/80 font-medium text-center pt-7'>Positioned as a guiding force,<br /> it navigates through challenge*</p>
      </div> */}
      <HeroSection heading={'For You'} para={'Positioned as a guiding force, it navigates through challenge*'} />

      <div className='px-28  py-20 w-screen lg:flex items-center  gap-10 hidden'>
        <img className=' w-1/2 h-1/2  rounded-xl' src="/assets/about.png" alt="" />
        <div className='w-1/2'>
          <h1 className={' delay-75 relative top-0 left-0 transition-all ease-in-expo duration-700 text-3xl font-semibold text-white pb-5 ' + syne.className}>At the forefront of innovation to shape a future where extraordinary becomes the norm.</h1>
          <p className={'text-lg pb-3 ' + inter.className}>At the house of Huckster, we stand at the crossroads of artistic vision and sustainability, captivating stories that resonate with audiences across all cultures. How we do that is through narrative driven approach, combined with a keen-eye for detail. </p>
          <p className={'text-lg pb-3 ' + inter.className}>What further blends time-honored cinematic traditions with cutting-edge technology is our commitment to carbon-negative initiatives. </p>
          <p className={'text-lg pb-3 ' + inter.className}>Anchored by a team of seasoned professionals, we are dedicated to shaping the future of media, one exceptional story at a time.</p>
        </div>
      </div>
      <div className='px-5 py-10 w-screen flex flex-col items-center justify-center gap-5 lg:hidden'>
        <h1 className={' delay-75 relative top-0 left-0 transition-all ease-in-expo duration-700 text-2xl font-semibold text-white pb-5 ' + syne.className}>At the forefront of innovation to shape a future where extraordinary becomes the norm.</h1>
        <img className=' w-full rounded-xl' src="/assets/about.png" alt="" />
        <div className=''>
          <p className={'text-lg pb-3 ' + inter.className}>At the house of Huckster, we stand at the crossroads of artistic vision and sustainability, captivating stories that resonate with audiences across all cultures. How we do that is through narrative driven approach, combined with a keen-eye for detail. </p>
          <p className={'text-lg pb-3 ' + inter.className}>What further blends time-honored cinematic traditions with cutting-edge technology is our commitment to carbon-negative initiatives. </p>
          <p className={'text-lg ' + inter.className}>Anchored by a team of seasoned professionals, we are dedicated to shaping the future of media, one exceptional story at a time.</p>
        </div>
      </div>

      <div className='lg:px-28 px-5 '>
        <h1 className={'mx-auto lg:p-12 py-7 lg:text-6xl text-3xl font-semibold w-full text-center gradientText ' + syne.className}>OUR CREATIVE CULTURE</h1>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
        <p className={'mx-auto lg:p-12 py-7 w-full lg:text-xl font-semibold text-center gradientText ' + syne.className}>Where EXTRAORDINARY becomes the norm!</p>
      </div>

      <div className='lg:px-28 px-5'>
        <h1 className={'mx-auto p-12 lg:text-6xl text-3xl font-semibold w-full text-center gradientText ' + syne.className}>WHAT'S IMPORTANT!</h1>
        <div className='flex flex-col lg:items-end lg:gap-40 gap-96 pb-20 pr-28'>
          <div className='relative w-full'>
            <p className={'lg:text-9xl text-7xl w-28 font-bold text-gray-600/80 ' + syne.className}>01</p>
            <div className='w-full absolute lg:top-16 top-8 lg:left-24 left-14'>
              <h2 className={'lg:pb-3 pb-2 lg:text-4xl text-3xl font-semibold w-full gradientText ' + syne.className}>Our Take on Sustainability</h2>
              <p className=' '>Huckster Productions stands as more than just a production house; it's a catalyst for sustainability and a commitment to achieving carbon negativity. With a focused and deliberate effort towards a greener future, we're reshaping the media landscape.</p>
              <p>Through coordinated investments and a conscientious approach, we're inviting future clients and partners to join us in this groundbreaking movement. It's a space that fosters talent and brings together like-minded individuals. From implementing eco-friendly production methods to innovative ways of giving back to nature, Huckster Productions is poised to turn these aspirations into reality.</p>
            </div>
          </div>
          <div className='relative w-4/5'>
            <p className={'lg:text-9xl text-7xl w-28 font-bold text-gray-600/80 ' + syne.className}>02</p>
            <div className='w-full absolute lg:top-16 top-8 lg:left-24 left-14'>
              <h2 className={'lg:pb-3 pb-2 lg:text-4xl text-3xl font-semibold w-full gradientText ' + syne.className}>Our Vision</h2>
              <p>A daring vision, dreamt to amplify the narratives on the canvas. The eyes conjure the artistic echoes, solitary emotions and the culture through the moving frames with the bespoke craftsmanship of contemporary motion art.</p>
              <p>The vision is to reimagine genres, weave narratives to bridge the time across cultures. Our commitment does not stop at creativity, it involves the need of the hour commitment to responsibility, a pursuit to achieve sustainability. </p>
            </div>
          </div>
        </div>
      </div>


      <div className='w-full lg:py-28 py-10 lg:px-28 px-5'>
				<div className='w-full py-10 bg-gradient-to-b lg:from-white/40 from-white/20 to-white/0  flex flex-col items-center gap-10 border border-white/50 rounded-3xl'>
					<img className='lg:w-36 w-28' src="/assets/HucksterLogo.png" alt="" />
					<div className=' '>
						<p className={'lg:text-8xl text-4xl font-semibold text-center ' + syne.className}>Let's start<br /> something.</p>
					</div>
				</div>
			</div>

    </Layout>
  )
}

export default aboutus
