import SectionHeader from '@/components/shared/SectionHeader'
import Video from '@/components/shared/Video'
import Wrapper from '@/components/shared/Wrapper'

const alpha = {
	title: 'Alpha',
	heading: 'Explore Faith, Life & Meaning.',
	text: `Your opportunity to explore life, faith and meaning in a judgement free way. Whether you have been going to church for a long time or not at all, you’ll explore the deep questions of life through the Alpha Course.`,
	video: 'hhttps://www.youtube.com/watch?v=hBMMD5C0k-s',
	videoThumbnail: '/images/alpha-thumbnail.png',
}

const TextWithVideo = () => {
	return (
		<Wrapper style={{ selectedStyle: 'normal', _type: 'sectionStyle' }}>
			<div className='container'>
				<div className='mx-auto flex flex-col space-y-12 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-6 lg:space-y-0 xl:gap-x-24'>
					<div>
						<SectionHeader title={alpha.title} heading={alpha.heading} />
						<p className='mt-6'>{alpha.text}</p>
					</div>
					<div>
						<Video video={alpha.video} thumbnail={alpha.videoThumbnail} />
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default TextWithVideo
