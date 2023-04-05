'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Animation = ({
	fade,
	duration,
	slideInLeft,
	slideInTop,
	slideInBottom,
	slideInRight,
	children,
	delay,
}: {
	children: React.ReactNode
	fade?: boolean
	duration?: number
	slideInLeft?: boolean
	slideInTop?: boolean
	slideInBottom?: boolean
	slideInRight?: boolean
	delay?: number
}) => {
	const ref = useRef(null)
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const isInView = useInView(ref)
	// console.log(isInView)
	return (
		<>
			<motion.div
				transition={{
					delay: delay ? delay : 0,
					duration: duration ? duration : 0.5,
				}}
				initial={{
					opacity: fade ? 0 : 1,
					x: slideInLeft ? -100 : slideInRight ? 100 : 0,
					y: slideInBottom ? 100 : slideInTop ? -100 : 0,
				}}
				whileInView={{
					opacity: fade ? 1 : 1,
					x: slideInLeft ? 0 : slideInRight ? 0 : 0,
					y: slideInBottom ? 0 : slideInTop ? 0 : 0,
				}}
				ref={ref}
			>
				{children}
			</motion.div>
		</>
	)
}

export default Animation
