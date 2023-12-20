import React from 'react'

const Button = ({ text, className, type="button" }) => {
  return (
    <div className={'border border-white/50 p-1  ' + className}>
      <button type={type} className='bg-white/20 backdrop-blur-sm hover:bg-white/30 lg:text-base text-sm duration-300 w-full p-3  '>{text}</button>
    </div>
  )
}

export default Button
