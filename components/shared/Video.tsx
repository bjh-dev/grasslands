'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'

const playerConfig = {
	youtube: {},
	vimeo: {
		playerOptions: {
			controls: true,
			byline: false,
			portrait: false,
			title: false,
			color: '#28a0aa',
		},
	},
}

type VideoProps = {
	video: string
	thumbnail: string
	altText: string
}

const Video = (props: VideoProps) => {
	const [hasWindow, setHasWindow] = useState(false)
	useEffect(() => {
		if (typeof window !== 'undefined') {
			setHasWindow(true)
		}
	}, [])
	const { video, thumbnail, altText } = props

	return (
		<div className='bg-axolotl'>
			<div className='aspect-h-9 aspect-w-16 -translate-y-6 translate-x-2 border-4 border-rope'>
				{hasWindow && (
					<ReactPlayer
						className='react-player'
						url={video}
						width='100%'
						height='100%'
						light={
							<Image src={thumbnail} alt={altText} width={1920} height={1080} />
						}
						config={playerConfig}
					/>
				)}
			</div>
		</div>
	)
}

export default Video
