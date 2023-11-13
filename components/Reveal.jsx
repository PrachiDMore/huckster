import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion';

const Reveal = ({ children, delay = 0 }) => {
	const control = useAnimation()
	const ref = useRef(null);
	const inView = useInView(ref, { once: true })

	useEffect(() => {
		if (inView) {
			control.start("visible")
		}
	}, [inView])

	return (
		<>
			<div className='relative overflow-hidden'>
				<motion.div ref={ref} variants={{
					hidden: {
						opacity: 0,
						y: 75
					},
					visible: {
						opacity: 1,
						y: 0
					}
				}} transition={{
					duration: 0.5,
					delay: delay,
					ease: "easeInOut"
				}} initial="hidden" animate={control}>
					{children}
				</motion.div>
			</div>
		</>
	)
}

export default Reveal