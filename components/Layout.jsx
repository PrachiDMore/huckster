import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Inter, Syne } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })

const Layout = ({children}) => {
  return (
    <div className={'w-screen h-auto min-h-screen bg-black text-white ' + inter.className}>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
