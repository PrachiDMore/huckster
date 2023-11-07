import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='overflow-auto'>
      <Layout>
        {/* hero section */}
        <div className='w-full banner-height'>
          <img className='h-full w-full' src='assets/herosection.jpg' />
        </div>

        <div className='w-full p-14 px-28'>
          <p className='text-5xl font-medium w-full text-center'>
            At the house of Huckster, <br />we create magic that captivates <br />and transcends the solitary emotions.
          </p>
        </div>

        <div className='w-full p-10 px-28 grid gap-16'>
          <h1 className='text-8xl font-semibold w-full text-center'>CREATIONS</h1>
          <div className='w-full grid gap-10'>
            <div className='w-full grid grid-cols-2  gap-10'>
              <img className='rounded-xl' src='assets/herosection.jpg' />
              <img className='rounded-xl' src='assets/herosection.jpg' />
            </div>
            <div className='w-full grid grid-cols-1  gap-10'>
              <img className='rounded-xl' src='assets/herosection.jpg' />
            </div>
            <div className='w-full grid grid-cols-2  gap-10'>
              <img className='rounded-xl' src='assets/herosection.jpg' />
              <img className='rounded-xl' src='assets/herosection.jpg' />
            </div>
          </div>
        </div>

        <div className='w-full px-28 py-20'>
          <p className='text-9xl font-medium'>VISUAL.</p>
          <p className='text-9xl font-medium'>NARRATIVE.</p>
          <p className='text-9xl font-medium'>CAPTIVATING.</p>
        </div>


        {/* services */}
        <div className='w-full p-10 px-28 grid gap-6'>
          <h1 className='text-8xl font-semibold '>SERVICES</h1>
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
