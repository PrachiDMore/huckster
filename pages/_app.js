import '@/styles/globals.css'
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head';
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { Toaster } from 'sonner';
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'
import { ReCaptchaProvider } from "next-recaptcha-v3";



export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [ads, setAds] = useState()

  useEffect(() => {
    axios("https://huckster-backend.vercel.app/get-ads")
      .then((res) => {
        setAds(res.data.response[0])
        console.log(res.data.response[0])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return <>
    <ReCaptchaProvider reCaptchaKey="6Leol3MpAAAAAFlYWw4RbCy4V5LwRbBydA6oxLgx" useEnterprise scriptProps={{
      async: false, // optional, default to false,
      defer: true, // optional, default to false
      appendTo: "body", // optional, default to "head", can be "head" or "body",
      nonce: undefined,
    }}>
      <GoogleTagManager gtmId={ads?.googleTags} />
      <GoogleAnalytics gaId={ads?.googlePixel} />
      <AnimatePresence mode='wait'>
        <motion.div key={router.pathname} >
          <Toaster position='top-center' expand={true} richColors theme='dark' />
          <Component {...pageProps} />
          <motion.div className='slide-in' initial={{ scaleY: 0 }} animate={{ scaleY: 0 }} exit={{ scaleY: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}></motion.div>
          <motion.div className='slide-out' initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} exit={{ scaleY: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}></motion.div>
        </motion.div>
      </AnimatePresence>
    </ReCaptchaProvider>
  </>
}
