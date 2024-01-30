import Layout from '@/components/Layout'
import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { DM_Sans, Inter, Syne } from 'next/font/google'

const inter = DM_Sans({ subsets: ['latin'] })
const syne = DM_Sans({ subsets: ['latin'] })

const Mediadetails = () => {
  return (
    <Layout>
      <section className='w-screen h-screen relative'>
        <video autoPlay className='w-screen h-screen object-cover' src={"https://res.cloudinary.com/dqmd9dypv/video/upload/v1706347585/rqbdbyeemgpu0g9eprol.mp4"} alt="" />
        <div className='h-screen w-screen absolute top-0 left-0 z-[5] bg-gradient-to-b from-transparent via-black/5 to-black'></div>
        <div className='gap-3 flex flex-col justify-center py-14 lg:px-28 px-5 absolute top-0 left-0 z-10 h-screen w-screen bg-gradient-to-b to-transparent from-black ' ></div>
      </section>

      <section className='w-screen lg:py-10 py-5 lg:px-48 px-5 '>
        <div className='flex justify-between'>
          <div className='lg:flex pb-3 lg:gap-5 gap-8'>
            <p className={'text-white/60 ' + inter.className}>Posted by Savanah</p>
            <p className={'text-white/60 ' + inter.className}>13 July, 2023</p>
          </div>
          <div className='flex items-center pb-3 lg:gap-5 gap-3'>
            <p className={'text-white/60 ' + inter.className}>Share</p>
            <FaFacebookF className='text-white/60 hover:text-white cursor-pointer duration-200 ' />
            <BsInstagram className='text-white/60 hover:text-white cursor-pointer duration-200 ' />
            <BsTwitter className='text-white/60 hover:text-white cursor-pointer duration-200 ' />
          </div>
        </div>
        <h1 className={'lg:text-5xl pb-5 max-w-full text-2xl font-semibold w-full gradientText ' + syne.className}>Born From My Memories: A Note From Savanah Leaf</h1>
        <p className={'lg:text-xl  pb-3 ' + inter.className}>I was always known as an athlete. That's what I was and that's how people thought of me. As a kid, I was tall and lanky and could jump out of the gym. Sports, whether I liked it or not, became a natural identity for me.</p>
        <p className={'lg:text-xl  pb-3 ' + inter.className}>Being a good athlete created opportunities that I otherwise wouldn't have had. As a sophomore in high school, I verbally committed to university, and received a full athletic scholarship. By the age of 18, I was competing in the London 2012 Olympics. When I graduated, it made sense to continue playing professionally, as I got a salary straight out of college.</p>
        <div className='w-full h-96 pb-3 flex justify-center '>
          <img className='h-full lg:w-[70%] w-full object-cover' src="/assets/work.webp" alt="" />
        </div>
        <p className={'lg:text-xl  pb-3 ' + inter.className}>I've been thinking a lot about how Earth Mama began. In the beginning, I wondered if an audience could ever empathize with a mother who makes a critical mistake with her pregnancy. People are so quick to pull out their moral compass when it comes to motherhood. And even more so when it comes to judging Black mothers.</p>
      </section>

    </Layout>
  )
}

export default Mediadetails
