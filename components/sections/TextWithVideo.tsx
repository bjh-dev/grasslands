import { PortableTextBlock } from 'sanity'

import SectionHeader from '@/components/shared/SectionHeader'
import Video from '@/components/shared/Video'
import Wrapper from '@/components/shared/Wrapper'
import { urlForImage } from '@/lib/sanity.image'
import { LinkType, SimpleImageType, StyleType } from '@/lib/types'

type TextWithVideoProps = {
	title: string
	heading?: string
	text?: PortableTextBlock[]
	sectionStyle: StyleType
	cta?: LinkType
	video: {
		videoUrl: string
		videoThumbnail: SimpleImageType
	}
}

const TextWithVideo = (props: TextWithVideoProps) => {
	const { title, heading, text, cta, video, sectionStyle } = props
	// console.log('TextWithVideo: ', props)
	return (
		<Wrapper style={sectionStyle} title={title}>
			<div className='container'>
				<div className='mx-auto flex flex-col space-y-12 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-6 lg:space-y-0 xl:gap-x-24'>
					<div>
						<SectionHeader
							title={title}
							heading={heading}
							text={text}
							cta={cta}
							style={sectionStyle}
						/>
					</div>
					<div>
						<Video
							video={video.videoUrl}
							thumbnail={urlForImage(video.videoThumbnail.image).url()}
							altText={video.videoThumbnail.alt}
						/>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default TextWithVideo
