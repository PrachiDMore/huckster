import React from 'react'
import { motion } from "framer-motion";


const SlideReveal = ({ children, delay = 0 }) => {
	return (
		<>
			<motion.div
				initial={{
					opacity: 0,
					y: 25
				}}
				animate={{
					opacity: 1,
					y: 0
				}}
				transition={{
					delay: delay,
					duration: 0.75,
					ease: [0.22, 1, 0.36, 1]
				}}>{children}</motion.div>
		</>
	)
}

export default SlideReveal