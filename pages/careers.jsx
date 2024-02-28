import Layout from '@/components/Layout'
import React, { useEffect, useRef, useState } from 'react'
import { DM_Sans, Inter, Syne } from 'next/font/google'
import axios from 'axios'
import { BsWhatsapp } from 'react-icons/bs'
import { MdEmail, MdOutlineMailOutline } from 'react-icons/md'
import { BiLogoGmail, BiLogoWhatsapp, BiUpload } from 'react-icons/bi'
import { toast } from 'sonner'
import { IoClose } from 'react-icons/io5'
import { FaRegFile } from "react-icons/fa";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from './config'

const inter = DM_Sans({ subsets: ['latin'] })
const syne = DM_Sans({ subsets: ['latin'] })

const Careers = () => {
  const [jobs, setJobs] = useState([])
  const [file, setFile] = useState()
  const [progress, setProgress] = useState(0)
  const inputRef = useRef()
  const [show, setShow] = useState("")

  useEffect(() => {
    axios("https://huckster-backend.vercel.app/get-career")
      .then((res) => {
        setJobs(res.data.response)
      })
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const storageRef = ref(storage, '/resume');

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress)
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          axios("https://huckster-backend.vercel.app/post-resume", {
            method: "POST",
            data: {
              "id": show,
              "resume": downloadURL
            }
          })
            .then((res) => {
              console.log(res.data)
              setProgress(0)
              setShow("")
              setFile()
              toast.success("Application submitted!")
            })
            .catch((err) => {
              toast.error(err.message);
              console.log(err)
            })
        });
      }
    );
  }


  return (
    <>
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
              return <div key={index} className='flex lg:flex-row flex-col lg:gap-7 gap-3'>
                <img key={index} src={job?.image} className='lg:h-[45vh] lg:w-[18vw] w-full object-cover' alt="" />
                <div className='flex flex-col'>
                  <h3 className='text-3xl font-bold'>{job?.title}</h3>
                  <h3 className='text-sm mt-3 text-gray-300'>{job?.designation}</h3>
                  <p className='text-sm mt-3 text-gray-300' dangerouslySetInnerHTML={{ __html: job?.description }}></p>
                  <div className='flex gap-3 mt-4'>
                    <a target='_blank' href={`https://api.whatsapp.com/send?phone=971502628766&text=${job?.title}`} className='h-10 flex justify-center items-center rounded-full w-10 border-white border cursor-pointer hover:bg-white/10 hover:border-transparent duration-150'><BiLogoWhatsapp className='text-lg' /></a>
                    <a target='_blank' href={`mailto:ali@huckstergroup.com?subject=${job?.title}`} className='h-10 flex justify-center items-center rounded-full w-10 border-white border cursor-pointer hover:bg-white/10 hover:border-transparent duration-150'><BiLogoGmail className='text-lg' /></a>
                    <span onClick={() => setShow(job._id)} className='h-10 flex justify-center items-center rounded-full w-10 border-white border cursor-pointer hover:bg-white/10 hover:border-transparent duration-150'><BiUpload className='text-lg' /></span>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </Layout>
      <div className={show != "" ? 'flex justify-center items-center opacity-100 duration-150 pointer-events-auto h-screen w-screen fixed z-[5000] bg-black/50 top-0 left-0' : 'h-screen w-screen fixed z-[5000] bg-black/50 top-0 left-0 opacity-0 duration-150 pointer-events-none flex justify-center items-center '}>
        <form onSubmit={handleSubmit} className={'w-[40vw] p-5 border bg-black border-white/30 ' + inter.className}>
          <div className='flex justify-between items-center'>
            <h2 className='text-xl font-bold text-white'>Submit application</h2>
            <IoClose onClick={() => setShow("")} className='cursor-pointer text-white text-2xl' />
          </div>
          <div className='w-full mt-3'>
            <div className='text-white flex justify-center items-center w-full h-[50px] border border-dashed cursor-pointer' onClick={() => inputRef.current.click()}>
              <input accept='.pdf' onChange={(e) => setFile(e.target.files[0])} type="file" hidden className='hidden' ref={inputRef} />
              <b>Upload </b>&nbsp; your resume here
            </div>
            {
              file &&
              <div>
                <p className='text-base mt-4 font-bold mb-1 text-white'>Choosen File: </p>
                <div className='px-4 border w-full h-[50px] flex justify-between items-center'>
                  <div className='text-white flex gap-2 items-center'>
                    <FaRegFile className='text-xl' />
                    <p>{file?.name}</p>
                  </div>
                  <IoClose className='text-white text-lg cursor-pointer' onClick={() => setFile()} />
                </div>
              </div>
            }
            <div className='border mt-2 border-gray-800 relative h-4 w-full'>
              <span className='z-0 h-full absolute top-0 left-0 bg-white  main-gradient w-full'></span>
              <span className='z-0 h-full absolute top-0 right-0 bg-black duration-100' style={{
                width: `${(100 - progress)}%`
              }}></span>
            </div>
            <button disabled={file == null || file == undefined} type='submit' className={file == null || file == undefined ? 'mt-3 text-black bg-white/60 px-4 py-3 w-full font-semibold' : 'mt-3 text-black bg-white px-4 py-3 w-full font-semibold'}>Upload</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Careers
