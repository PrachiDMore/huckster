import '@/styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const dotref = useRef()
  const outlineref = useRef()

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const posX = e.clientX
      const posY = e.clientY

      // dotref.current.style.left = `${posX}px`
      // dotref.current.style.top = `${posY}px`

      dotref.current.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 100, fill: "forwards" })

      outlineref.current.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 1000, fill: "forwards" })
    })
  }, [])

  return <AnimatePresence mode='wait'>
    <motion.div key={router.pathname} className='cursor-none'>
      <Component {...pageProps} />
      <motion.div className='slide-in' initial={{ scaleY: 0 }} animate={{ scaleY: 0 }} exit={{ scaleY: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}></motion.div>
      <motion.div className='slide-out' initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} exit={{ scaleY: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}></motion.div>
      <div ref={dotref} className='z-[8] cursor-dot'></div>
      <div ref={outlineref} className='z-[8] cursor-outline'></div>
    </motion.div>
  </AnimatePresence>
}
