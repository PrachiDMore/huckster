import HeroSection from '@/components/HeroSection'
import Layout from '@/components/Layout'
import React from 'react'
import { Inter, Syne } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })

const mediadetails = () => {
  return (
    <Layout>
      <section className='w-screen h-screen'>
        <img className='w-screen h-[90%] object-cover' src="/assets/work.webp" alt="" />

      </section>

      <section className='w-screen lg:py-10 py-5 lg:px-36 px-5 '>
        <div className='flex pb-3 gap-5'>
          <p className={'text-white/60 ' + inter.className}>JULY 13, 2023</p>
          <p className={'text-white/60 ' + inter.className}>Posted by Savanah</p>
        </div>
        <h1 className={'lg:text-5xl pb-5 max-w-full text-xl font-semibold w-full gradientText ' + syne.className}>Born From My Memories: A Note From Savanah Leaf</h1>
        <p className={'text-xl pb-2 ' + inter.className}>I was always known as an athlete. That's what I was and that's how people thought of me. As a kid, I was tall and lanky and could jump out of the gym. Sports, whether I liked it or not, became a natural identity for me.</p>
        <p className={'text-xl pb-2 ' + inter.className}>Being a good athlete created opportunities that I otherwise wouldn't have had. As a sophomore in high school, I verbally committed to university, and received a full athletic scholarship. By the age of 18, I was competing in the London 2012 Olympics. When I graduated, it made sense to continue playing professionally, as I got a salary straight out of college.</p>
        <div className='w-full h-[70%] flex justify-center '>
          <img className='h-full w-[70%]' src="https://d135u4jtzauizi.cloudfront.net/_normal/107770/733E9BF8-B9EF-413D-9FEE-A6FFE4F787DA_1_105_c.webp" alt="" />
        </div>
        <p className={'text-xl pb-2 ' + inter.className}>I’ve been thinking a lot about how Earth Mama began. In the beginning, I wondered if an audience could ever empathize with a mother who makes a critical mistake with her pregnancy. People are so quick to pull out their moral compass when it comes to motherhood. And even more so when it comes to judging Black mothers.</p>
      </section>

    </Layout>
  )
}

export default mediadetails
