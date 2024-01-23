import Layout from '@/components/Layout'
import React from 'react'
import { DM_Sans, Inter, Syne } from 'next/font/google'

const inter = DM_Sans({ subsets: ['latin'] })
const syne = DM_Sans({ subsets: ['latin'] })

const Careers = () => {
  return (
    <Layout>
      <div className='w-screen lg:px-28 px-5 lg:py-20 py-10 mt-20 flex justify-center items-end gap-5 '>
        <h1 className={'text-[150px] font-bold leading-none  ' + syne.className}>Lets <br/>talk?</h1>
        <p className={'mb-5 text-xl ' + inter.className }>We'd love to explore what <br/>we can do together!</p>
      </div>
      <div className='w-screen lg:px-28 px-5 lg:py-20 py-10 flex justify-between items-center gap-16 '>
        <h1 className={'w-[60%] text-6xl font-bold leading-none  ' + syne.className}>If you find yourself thinking, 'I'd like to be a part of this,'</h1>
        <p className={'w-[40%] text-xl mb-5' + inter.className}>Collaborate with us</p>
      </div>
    </Layout>
  )
}

export default Careers
