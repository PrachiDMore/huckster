import Layout from '@/components/Layout'
import React from 'react'
import { Inter, Syne } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })

const aboutus = () => {
  return (
    <Layout>
      <div className='pt-32'>
        <h1 className={'mx-auto p-10   text-8xl font-semibold w-full text-center gradientText ' + syne.className}>For You</h1>
        <p className='text-5xl font-medium text-center pt-7'>Positioned as a guiding force,<br/> it navigates through challenge*</p>
      </div>

    </Layout>
  )
}

export default aboutus
