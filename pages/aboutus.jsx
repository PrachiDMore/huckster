import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import { Inter, Syne, Nunito, Quicksand } from 'next/font/google'
import TeamCard from '@/components/TeamCard'
import HeroSection from '@/components/HeroSection'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import axios from 'axios'

const syne = Syne({ subsets: ['latin'] })
const quicksand = Quicksand({ subsets: ['latin'] })

const Aboutus = () => {
  const breakpoints = {
		1024: {
			slidesPerView: 3,
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

  const [teams, setTeams] = useState([])
  useEffect(() => {
axios("https://huckster-backend.vercel.app/get-team", {
  method: "GET"

})
.then((res) => {
  setTeams(res.data.response)
})
  }, [])

  return (
    <Layout>
      <HeroSection img={"https://framerusercontent.com/images/6mTE8bYupQVqoB9pUM5luuGjSBs.jpg"} heading={'For You'} para={'Positioned as a guiding force, it navigates through challenge*'} />

      {/* desktop view */}
        <div className='px-28  py-20 w-screen lg:flex items-center  gap-10 hidden'>
          <div className='w-[70%]'>
            <h1 className={' delay-75 relative top-0 left-0 transition-all ease-in-expo duration-700 text-3xl font-semibold text-white pb-5 ' + syne.className}>*at the forefront of innovation to shape a future where extraordinary becomes the norm.</h1>
            <div className='w-full '>
              <p className={'pb-3 ' + quicksand.className}>At the house of Huckster, we stand at the crossroads of artistic vision and sustainability, captivating stories that resonate with audiences across all cultures. How we do that is through narrative driven approach, combined with a keen-eye for detail. What further blends time-honored cinematic traditions with cutting-edge technology is our commitment to carbon-negative initiatives. Anchored by a team of seasoned professionals, we are dedicated to shaping the future of media, one exceptional story at a time.</p>
            </div>
          </div>
          <img className=' w-[30%] h-1/2 ' src="/assets/about.png" alt="" />
        </div>

      {/* mobile view */}
      <div className='px-5 py-10 w-screen flex flex-col items-center justify-center gap-5 lg:hidden'>
        <h1 className={' delay-75 relative top-0 left-0 transition-all ease-in-expo duration-700 text-2xl font-semibold text-white pb-5 ' + syne.className}>At the forefront of innovation to shape a future where extraordinary becomes the norm.</h1>
        <img className=' w-full rounded-xl' src="/assets/about.png" alt="" />
        <div className=''>
          <p className={'text-lg pb-3 ' + quicksand.className}>At the house of Huckster, we stand at the crossroads of artistic vision and sustainability, captivating stories that resonate with audiences across all cultures. How we do that is through narrative driven approach, combined with a keen-eye for detail. What further blends time-honored cinematic traditions with cutting-edge technology is our commitment to carbon-negative initiatives. Anchored by a team of seasoned professionals, we are dedicated to shaping the future of media, one exceptional story at a time.</p>
        </div>
      </div>

      <div className='lg:px-28 px-5 w-screen'>
        <h1 className={'mx-auto lg:p-12 py-7 lg:text-6xl text-2xl font-semibold w-full text-center gradientText ' + syne.className}>OUR CREATIVE CULTURE</h1>
        <Swiper className='m-auto w-full h-full'
						grabCursor={true}
						loop={true}
						breakpoints={breakpoints}
						spaceBetween={20}
						slidesPerView={3}
						modules={[Autoplay]}
						autoplay={{
							delay: 10000
						}}
					>
           { teams.map((value , index) => {
             return <SwiperSlide className=''><TeamCard value={value}/></SwiperSlide>
           } ) }
					</Swiper>


        {/* <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
          
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div> */}
        <p className={'lg:hidden mx-auto lg:p-12 py-7 w-full lg:text-xl font-semibold text-center gradientText ' + syne.className}>Where EXTRAORDINARY<br /> becomes the norm!</p>
        <p className={'hidden lg:py-12 lg:pl-20 py-7 w-full lg:block lg:text-4xl font-semibold text-left gradientText ' + syne.className}>wHeRe eXtRaOrDiNaRy<br/> bEcOmEs tHe nOrM!</p>
      </div>

      {/* desktop view */}
      <div className='lg:px-28 px-5 lg:block hidden'>
        <h1 className={'mx-auto p-12 lg:text-6xl text-3xl font-semibold w-full text-center gradientText ' + syne.className}>WHAT'S IMPORTANT!</h1>
        <div className='flex flex-col lg:items-end lg:gap-40 gap-96'>
          <div className={'flex flex-col items-center lg:gap-32 gap-16 ' + syne.className}>
            <div className='relative lg:w-8/12 w-[85%] h-max mt-20'>
              <h1 className={'lg:-left-32 -left-10 -top-4 leading-3 lg:opacity-20 opacity-25 absolute text-[100px] lg:text-[200px] font-bold ' + syne.className}>01</h1>
              <h2 className='gradientText text-white/90 font-bold lg:text-4xl text-3xl'>Our Take on Sustainability</h2>
              <p className={'mt-1 lg:text-lg lg:w-[90%] w-full'}>Huckster Productions stands as more than just a production house; it's a catalyst for sustainability and a commitment to achieving carbon negativity. With a focused and deliberate effort towards a greener future, we're reshaping the media landscape.</p>
              <p className={'mt-1 lg:text-lg lg:w-[90%] w-full '}>Through coordinated investments and a conscientious approach, we're inviting future clients and partners to join us in this groundbreaking movement. It's a space that fosters talent and brings together like-minded individuals. From implementing eco-friendly production methods to innovative ways of giving back to nature, Huckster Productions is poised to turn these aspirations into reality.</p>
            </div>
            <div className='lg:left-32 left-0 relative lg:w-8/12 w-[85%] h-max'>
              <h1 className={'lg:-left-32 -left-10 -top-4 leading-3 lg:opacity-20 opacity-25 absolute text-[100px] lg:text-[200px] font-bold ' + syne.className}>02</h1>
              <h2 className='gradientText text-white/90 font-bold lg:text-4xl text-3xl'>Visionary's Vision</h2>
              <p className='mt-1 lg:text-lg lg:w-[90%] w-full'>A daring vision, dreamt to amplify the narratives on the canvas. The eyes conjure the artistic echoes, solitary emotions and the culture through the moving frames with the bespoke craftsmanship of contemporary motion art.</p>
              <p className='mt-1 lg:text-lg lg:w-[90%] w-full '>The vision is to reimagine genres, weave narratives to bridge the time across cultures. Our commitment does not stop at creativity, it involves the need of the hour commitment to responsibility, a pursuit to achieve sustainability.</p>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className='lg:px-28 px-5 hidden'>
        <h1 className={'mx-auto py-12 lg:text-6xl text-2xl font-semibold w-full text-center gradientText ' + syne.className}>WHAT'S IMPORTANT!</h1>

        <div className={'flex flex-col items-center gap-16 ' + syne.className}>
          <div className='relative w-full h-max mt-14'>
            <h1 className={'lg:-left-32 -left-10 -top-4 leading-3 lg:opacity-20 opacity-25 absolute text-[80px] lg:text-[200px] font-bold ' + syne.className}>01</h1>
            <h2 className='gradientText w-full text-white/90 font-bold lg:text-4xl text-xl'>Our Take on Sustainability</h2>
            <p className={'mt-1 lg:text-lg lg:w-[90%] w-full'}>Huckster Productions stands as more than just a production house; it's a catalyst for sustainability and a commitment to achieving carbon negativity. With a focused and deliberate effort towards a greener future, we're reshaping the media landscape.</p>
            <p className={'mt-1 lg:text-lg lg:w-[90%] w-full '}>Through coordinated investments and a conscientious approach, we're inviting future clients and partners to join us in this groundbreaking movement. It's a space that fosters talent and brings together like-minded individuals. From implementing eco-friendly production methods to innovative ways of giving back to nature, Huckster Productions is poised to turn these aspirations into reality.</p>
          </div>
          <div className='lg:left-32 left-0 relative lg:w-8/12 w-[85%] h-max'>
            <h1 className={'lg:-left-32 -left-10 -top-4 leading-3 lg:opacity-20 opacity-25 absolute text-[100px] lg:text-[200px] font-bold ' + syne.className}>02</h1>
            <h2 className='gradientText text-white/90 font-bold lg:text-4xl text-3xl'>Our Vision</h2>
            <p className='mt-1 lg:text-lg lg:w-[90%] w-full'>A daring vision, dreamt to amplify the narratives on the canvas. The eyes conjure the artistic echoes, solitary emotions and the culture through the moving frames with the bespoke craftsmanship of contemporary motion art.</p>
            <p className='mt-1 lg:text-lg lg:w-[90%] w-full '>The vision is to reimagine genres, weave narratives to bridge the time across cultures. Our commitment does not stop at creativity, it involves the need of the hour commitment to responsibility, a pursuit to achieve sustainability.</p>
          </div>
        </div>

      </div>


      <div className='w-full lg:py-28 py-10 lg:px-28 px-5'>
        <p className={'lg:text-8xl text-4xl font-semibold text-center ' + syne.className}>Let's start<br /> something.</p>
        {/* <div className='w-full py-10 bg-gradient-to-b lg:from-white/40 from-white/20 to-white/0  flex flex-col items-center gap-10 border border-white/50 rounded-3xl'></div> */}
      </div>

    </Layout>
  )
}

export default Aboutus
