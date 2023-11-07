import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({children}) => {
  return (
    <div className='w-screen h-auto min-h-screen bg-black text-white'>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
