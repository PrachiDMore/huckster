import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import { DM_Sans, Inter, Syne } from 'next/font/google'
import axios from 'axios'

const inter = DM_Sans({ subsets: ['latin'] })
const syne = DM_Sans({ subsets: ['latin'] })

const Careers = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    axios("https://huckster-backend.vercel.app/get-career")
      .then((res) => {
        setJobs(res.data.response)
      })
  }, [])

  return (
    <Layout>
      <div className='w-screen lg:px-28 px-5 lg:py-20 py-10 mt-20 flex lg:flex-row flex-col justify-center items-end gap-5 '>
        <h1 className={'lg:text-[150px] text-4xl font-bold leading-none  ' + syne.className}>Lets <br />talk?</h1>
        <p className={'mb-5 text-xl ' + inter.className}>We'd love to explore what <br />we can do together!</p>
      </div>
      <div className='w-screen lg:px-28 px-5 lg:py-20 py-10 flex lg:flex-row flex-col justify-between items-center gap-16 '>
        <h1 className={'w-[60%] text-6xl font-bold leading-none  ' + syne.className}>If you find yourself thinking, 'I'd like to be a part of this,'</h1>
        <p className={'w-[40%] text-xl mb-5' + inter.className}>Collaborate with us</p>
      </div>
      <div className='w-screen lg:px-28 px-5 lg:py-20 py-10 flex justify-between items-center gap-16 '>
        {
          jobs?.filter((job) => {
            return job.enable;
          })?.map((job, index) => {
            job.description = "loan ajsdh kjashd jasd akldsj lasjdlk ajdklaj slk askdj alkdsj lkaksjd alsjd alsmdj lakjd a lsjdal sjdoasjdl ajsdlkals d loan ajsdh kjashd jasd akldsj lasjdlk ajdklaj slk askdj alkdsj lkaksjd alsjd alsmdj lakjd a lsjdal sjdoasjdl ajsdlkals d loan ajsdh kjashd jasd akldsj lasjdlk ajdklaj slk askdj alkdsj lkaksjd alsjd alsmdj lakjd a lsjdal sjdoasjdl ajsdlkals d loan ajsdh kjashd jasd akldsj lasjdlk ajdklaj slk askdj alkdsj lkaksjd alsjd alsmdj lakjd a lsjdal sjdoasjdl ajsdlkals d loan ajsdh kjashd jasd akldsj lasjdlk ajdklaj slk askdj alkdsj lkaksjd alsjd alsmdj lakjd a lsjdal sjdoasjdl ajsdlkals dv v loan ajsdh kjashd jasd akldsj lasjdlk ajdklaj slk askdj alkdsj lkaksjd alsjd alsmdj lakjd a lsjdal sjdoasjdl ajsdlkals d loan ajsdh kjashd jasd akldsj lasjdlk ajdklaj slk askdj alkdsj lkaksjd alsjd alsmdj lakjd a lsjdal sjdoasjdl ajsdlkals dloan ajsdh kjashd jasd akldsj lasjdlk ajdklaj slk askdj alkdsj lkaksjd alsjd alsmdj lakjd a lsjdal sjdoasjdl ajsdlkals d loan ajsdh kjashd jasd akldsj lasjdlk ajdklaj slk askdj alkdsj lkaksjd alsjd alsmdj lakjd a lsjdal sjdoasjdl ajsdlkals d"
            return <div key={index} className='flex lg:flex-row flex-col lg:gap-7 gap-3'>
              <video key={index} autoPlay loop src={"https://res.cloudinary.com/dqmd9dypv/video/upload/v1706347585/rqbdbyeemgpu0g9eprol.mp4"} className='lg:h-[45vh] lg:w-[18vw] w-full object-cover' alt="" />
              <div className='flex flex-col'>
                <h3 className='text-3xl font-bold'>{job?.title}</h3>
                <h3 className='text-sm mt-3 text-gray-300'>{job?.designation}</h3>
                <p className='text-sm mt-3 text-gray-300' dangerouslySetInnerHTML={{__html: job?.description}}></p>
              </div>
            </div>
          })
        }
      </div>
    </Layout>
  )
}

export default Careers
