import React from 'react'

const Test = () => {
	return (
		<>
			<section className='relative h-screen w-screen bg-black' >
				<img className='absolute top-0 left-0 z-0 h-screen w-screen object-cover' src="https://framerusercontent.com/images/wihlKTqe05H57msmNhuMMZIAmM.png" alt="" />
				<div className='absolute top-0 left-0 z-10 h-screen w-screen bg-gradient-radial from-transparent to-black'  ></div>
			</section>
		</>
	)
}

export default Test