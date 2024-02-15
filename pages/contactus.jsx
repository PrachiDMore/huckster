import HeroSection from '@/components/HeroSection'
import Layout from '@/components/Layout'
import React, { useCallback, useRef, useState } from 'react'
import { DM_Sans, Inter, Syne } from 'next/font/google'
import Button from '@/components/Button'
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { IoArrowForward } from 'react-icons/io5'
import axios from 'axios'
import { toast } from 'sonner'
import Link from 'next/link'
import ReCAPTCHA from "react-google-recaptcha"
import { verifyCaptcha } from "@/components/VerifyCaptcha";
import { useReCaptcha } from "next-recaptcha-v3";

const inter = Inter({ subsets: ['latin'] })
const syne = DM_Sans({ subsets: ['latin'] })

const ContactUs = () => {

  const initialState = {
    name: "",
    email: "",
    message: "",
    phoneNo: ""
  }

  const [formState, setFormState] = useState(initialState);
  const recaptchaRef = useRef(null)
  const [isVerified, setIsverified] = useState(false)
  const { executeRecaptcha } = useReCaptcha();


  async function handleCaptchaSubmission(token) {
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false))
  }

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      console.log("adasda")

      const token = await executeRecaptcha("form_submit");

      axios("https://huckster-backend.vercel.app/contact-us", {
        method: "POST",
        data: {
          "name": formState.name,
          "email": formState.email,
          "message": formState.message,
          "phoneNo": formState.phoneNo,
          "token": token
        },
      });
    },
    [executeRecaptcha, formState.name],
  );

  const handleSubmi1t = async (e) => {
    const token = await executeRecaptcha("form_submit");
    e.preventDefault()
    axios("https://huckster-backend.vercel.app/contact-us", {
      method: "POST",
      data: {
        name: formState.name,
        email: formState.email,
        message: formState.message,
        phoneNo: formState.phoneNo,
      }
    })
      .then((res) => {
        if (!res.data.error) {
          setFormState(initialState)
          toast.success("Response has been recorded")
        } else {
          toast.error("Something went wrong!")
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <Layout>

      <div className='w-screen lg:px-28 px-5 lg:py-20 py-10 mt-20 flex flex-col gap-10 justify-end items-end '>
        <p className={'lg:text-[150px] text-[70px] py-10 pb-16 ' + syne.className}>HIT US UP</p>
        <div className='w-full lg:flex-row flex-col flex justify-start lg:gap-10 gap-3'>
          <p className='text-xl'>New Business</p>
          <p className='text-xl'>Careers</p>
          <p className='text-xl'>Press</p>
        </div>
      </div>

      <div className='w-screen lg:px-28 px-5 lg:py-20 py-10'>
        <div className='border border-white/50  lg:flex grid gap-7 lg:p-8 p-4 bg-white/10'>
          <div className='lg:w-2/5 w-full'>
            <h1 className={' delay-75 relative top-0 left-0 transition-all ease-in-expo duration-700 lg:text-3xl text-2xl font-semibold text-white pb-5 ' + syne.className}>Visit Us</h1>
            <div className='flex gap-3'>
              <HiOutlineLocationMarker className='text-lg' />
              <p className={'lg:text-lg' + inter.className}>Office 2513, Churchill Executive Towers, Business Bay, Dubai, UAE</p>
            </div>
            <div className='flex gap-3 mt-3 items-center'>
              <HiOutlineMail className='text-lg' />
              <a href='mailto:hola@hucksterproduction.com' className={'lg:text-lg' + inter.className}>hola@hucksterproduction.com</a>
            </div>
            <div className='flex gap-3 mt-3 items-center'>
              <HiOutlinePhone className='text-lg' />
              <a href='tel:+97145839003' className={'lg:text-lg' + inter.className}>+971 4583 9003</a>
            </div>
            <div className='flex gap-3 mt-3 items-center'>
              <HiOutlinePhone className='text-lg' />
              <a href='tel:+971565402121' className={'lg:text-lg' + inter.className}>+971 56 540 2121</a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className=' lg:w-3/5 w-full'>
            <h1 className={' delay-75 relative top-0 left-0 transition-all ease-in-expo duration-700 lg:text-2xl text-2xl font-semibold text-white pb-5 ' + syne.className}>We appreciate the opportunity to connect with you.</h1>
            <div className='flex flex-col items-center gap-5 w-full '>
              <div className='lg:flex grid gap-5 w-full'>
                <input value={formState.name} required id='name' onChange={handleChange} className='outline-none text-lg bg-none bg-white/20 lg:px-7 px-4 py-3 w-full' type="text" placeholder='Enter your Name' />
                <input value={formState.email} required id='email' onChange={handleChange} className='outline-none text-lg bg-none bg-white/20 lg:px-7 px-4  py-3 w-full' type="email" placeholder='Enter your Email' />
              </div>
              <input value={formState.phoneNo} required id='phoneNo' onChange={handleChange} className='outline-none text-lg bg-none bg-white/20 lg:px-7 px-4  py-3 w-full' type="text" placeholder='Enter your Phone Number' />
              <textarea value={formState.message} required id='message' onChange={handleChange} className='outline-none text-lg bg-none bg-white/20  lg:px-7 px-4  py-3 w-full h-40 resize-none' type="text" placeholder="We'd love to hear from you!" />
              {/* <ReCAPTCHA
                sitekey={"6Leol3MpAAAAAFlYWw4RbCy4V5LwRbBydA6oxLgx"}
                ref={recaptchaRef}
                onChange={handleCaptchaSubmission}
              /> */}
              <div className={'border border-white/50 p-1  '}>
                <button type='submit' className='bg-white/20 backdrop-blur-sm hover:bg-white/30 lg:text-base text-sm duration-300 w-full p-3  '>Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className='w-screen lg:px-28 px-5 lg:py-20 py-10 flex flex-col gap-3 items-center '>
        <h1 className={'text-2xl font-semibold ' + syne.className}>WORK WITH US</h1>
        <p>Explore exciting opportunities to join our team!</p>
        <div className='flex items-center gap-3'>
          <p className='font-semibold'>Join us</p>
          <Link href={'/careers'} className='border border-white hover:bg-white hover:text-black duration-300 cursor-pointer p-2 rounded-full'>
            <IoArrowForward />
          </Link>
        </div>
      </div>

      {/* <HeroSection img={"https://framerusercontent.com/images/KihLgob1Ul5Qa1HTTyAzAljcyI.jpg"} heading={'Contact Us'} /> */}

    </Layout>
  )
}

export default ContactUs
