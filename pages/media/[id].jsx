import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { DM_Sans, Inter, Syne } from 'next/font/google'
import { useRouter } from 'next/router'
import moment from 'moment'
import axios from 'axios'

const inter = DM_Sans({ subsets: ['latin'] })
const syne = DM_Sans({ subsets: ['latin'] })

const Mediadetails = () => {

  const router = useRouter();
  const [data, setData] = useState()
  useEffect(() => {
    axios(`https://huckster-backend.vercel.app/get-media/${router.query.id}`)
      .then((res) => {
        console.log(res.data.response)
        setData(res.data.response)
      })
      .catch((err) => {

      })
  }, [router])
  return (
    <Layout>
      <section className='w-screen h-screen relative'>
        <video key={data?.video} muted autoPlay className='w-screen h-screen object-cover' src={data?.video} loop controls={false} alt="" />
        <div className='h-screen w-screen absolute top-0 left-0 z-[5] bg-gradient-to-b from-transparent via-black/5 to-black'></div>
        <div className='gap-3 flex flex-col justify-center py-14 lg:px-28 px-5 absolute top-0 left-0 z-10 h-screen w-screen bg-gradient-to-b to-transparent from-black ' ></div>
      </section>

      <section className='w-screen lg:py-10 py-5 lg:px-48 px-5 '>
        <div className='flex justify-between'>
          <div className='lg:flex pb-3 lg:gap-5 gap-8'>
            {/* <p className={'text-white/60 ' + inter.className}>Posted by Savanah</p> */}
            <p className={'text-white/60 ' + inter.className}>Published On: {moment(data?.date).format("D MMMM, YYYY")}</p>
          </div>
          {/* <div className='flex items-center pb-3 lg:gap-5 gap-3'>
            <p className={'text-white/60 ' + inter.className}>Share</p>
            <FaFacebookF className='text-white/60 hover:text-white cursor-pointer duration-200 ' />
            <BsInstagram className='text-white/60 hover:text-white cursor-pointer duration-200 ' />
            <BsTwitter className='text-white/60 hover:text-white cursor-pointer duration-200 ' />
          </div> */}
        </div>
        <h1 className={'lg:text-5xl pb-5 max-w-full text-2xl font-semibold w-full gradientText ' + syne.className}>{data?.title}</h1>
        <p className={'lg:text-xl  pb-3 ' + inter.className} dangerouslySetInnerHTML={{__html: data?.description}}></p>
      </section>

    </Layout>
  )
}

export default Mediadetails
