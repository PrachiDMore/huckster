import Layout from '@/components/Layout'
import React from 'react'
import { Inter, Syne } from 'next/font/google'
import TeamCard from '@/components/TeamCard'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })

const aboutus = () => {
  return (
    <Layout>
      <div className='pt-32'>
        <h1 className={'mx-auto p-10   text-8xl font-semibold w-full text-center gradientText ' + syne.className}>For You</h1>
        <p className='text-5xl text-white/80 font-medium text-center pt-7'>Positioned as a guiding force,<br /> it navigates through challenge*</p>
      </div>

      <div className='px-28'>
        <h1>at the forefront of innovation to shape a future where extraordinary becomes the norm.</h1>
        <p>At the house of Huckster, we stand at the crossroads of artistic vision and sustainability, captivating stories that resonate with audiences across all cultures. How we do that is through narrative driven approach, combined with a keen-eye for detail. </p>
        <p>What further blends time-honored cinematic traditions with cutting-edge technology is our commitment to carbon-negative initiatives. </p>
        <p>Anchored by a team of seasoned professionals, we are dedicated to shaping the future of media, one exceptional story at a time.</p>
      </div>

      <div className='px-28'>
        <h1 className={'mx-auto p-12 text-6xl font-semibold w-full text-center gradientText ' + syne.className}>OUR CREATIVE CULTURE</h1>
        <div className='grid grid-cols-3 gap-5'>
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
        </div>
        <p className={'mx-auto p-12 text-xl font-semibold w-full text-center gradientText ' + syne.className}>Where EXTRAORDINARY becomes the norm!</p>
      </div>

      <div className='px-28'>
        <h1 className={'mx-auto p-12 text-6xl font-semibold w-full text-center gradientText ' + syne.className}>WHAT'S IMPORTANT!</h1>

        <div className='grid grid-cols-2 gap-5'>
          <div className='bg-gradient-to-b from-white/20 to-black border border-white/50 rounded-xl p-3'>
            <h2 className={'mx-auto p-3 text-4xl font-semibold w-full text-center gradientText ' + syne.className}>Our Take on Sustainability</h2>
            <p className=' '>Huckster Productions stands as more than just a production house; it's a catalyst for sustainability and a commitment to achieving carbon negativity. With a focused and deliberate effort towards a greener future, we're reshaping the media landscape.</p>
            <p>Through coordinated investments and a conscientious approach, we're inviting future clients and partners to join us in this groundbreaking movement. It's a space that fosters talent and brings together like-minded individuals. From implementing eco-friendly production methods to innovative ways of giving back to nature, Huckster Productions is poised to turn these aspirations into reality.</p>
          </div>
          <div className='bg-gradient-to-b from-white/20 to-black border border-white/50 rounded-xl p-3'>
            <h2 className={'mx-auto p-3 text-4xl font-semibold w-full text-center gradientText ' + syne.className}>Our Vision</h2>
            <p>A daring vision, dreamt to amplify the narratives on the canvas. The eyes conjure the artistic echoes, solitary emotions and the culture through the moving frames with the bespoke craftsmanship of contemporary motion art.</p>
            <p>The vision is to reimagine genres, weave narratives to bridge the time across cultures. Our commitment does not stop at creativity, it involves the need of the hour commitment to responsibility, a pursuit to achieve sustainability. </p>
          </div>
        </div>

      </div>

      <div className='w-full p-28 px-28 '>
        <div className='w-full py-10 bg-gradient-to-b from-white/40  to-white/0  flex flex-col items-center gap-10 border border-white/50 rounded-3xl'>
          <img className='w-36' src="/assets/HucksterLogo.png" alt="" />
          <div className=' '>
            <p className={'text-8xl font-semibold text-center ' + syne.className}>Let's start<br /> something.</p>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default aboutus
