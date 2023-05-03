import Image from 'next/image'

import SectionHeader from '@/components/shared/SectionHeader'
import Wrapper from '@/components/shared/Wrapper'
import { urlForImage } from '@/lib/sanity.image'

const BoxedTextWithImages = (props) => {
	const { title, text, images, sectionStyle } = props
	console.log('BoxedTextWithImages: ', props)
	return (
		<Wrapper style={sectionStyle}>
			<div className='container mt-12'>
				<div className='flex flex-col space-y-6 lg:grid lg:grid-cols-2 lg:gap-x-12 2xl:gap-x-24'>
					<div className='col-span-1'>
						<div className='image-array'>
							{images.map((image, i) => {
								return (
									<div
										key={i}
										className='mb-12 h-2/3 w-2/3 border-4 border-indian-khaki shadow-lg odd:-z-40 odd:border-axolotl even:-z-10 even:-translate-y-[20%] even:translate-x-[35%]'
									>
										<div className='translate-x-6 translate-y-6'>
											<Image
												className='shadow-lg odd:-z-30 even:-z-30'
												src={urlForImage(image.image).url()}
												alt={image.alt}
												width={1200}
												height={1200}
											/>
										</div>
									</div>
								)
							})}
						</div>
					</div>
					<div className='col-span-1 bg-indian-khaki-600 shadow-lg'>
						<div className='m-6 -mb-4 -ml-2 flex items-center bg-axolotl p-24 text-satin-linen shadow-lg sm:-ml-4 md:p-16 xl:h-full'>
							<SectionHeader title={title} text={text} />
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default BoxedTextWithImages