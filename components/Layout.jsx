import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div className='w-screen h-auto min-h-screen'>
      <Navbar/>
      {children}
    </div>
  )
}

export default Layout
