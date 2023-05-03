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

const Video = (props) => {
	const [hasWindow, setHasWindow] = useState(false)
	useEffect(() => {
		if (typeof window !== 'undefined') {
			setHasWindow(true)
		}
	}, [])
	const { video, thumbnail } = props

	return (
		<div className='aspect-h-9 aspect-w-16'>
			{hasWindow && (
				<ReactPlayer
					className='react-player rounded-lg'
					url={video}
					width='100%'
					height='100%'
					light={
						<Image src={thumbnail} alt='Thumbnail' width={1920} height={1080} />
					}
					config={playerConfig}
				/>
			)}
		</div>
	)
}

export default Video
