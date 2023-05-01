import clsx from 'clsx'
import Image from 'next/image'

import { urlForImage } from '@/lib/sanity.image'
import { pageHeaderType } from '@/lib/types'

import CtaLink from './CtaLink'
import { CustomPortableText } from './CustomPortableText'
import Divider from './Divider'
import { PageTitle } from './Typography'
import Wrapper from './Wrapper'

const PageHeader = (props: pageHeaderType) => {
	const { title, description, cta, pageHeaderStyle, image } = props
	// console.log('pageHeaderProps: ', props)
	console.log(pageHeaderStyle)
	return (
		<Wrapper style={pageHeaderStyle} pageHeader>
			{!image && (
				<div className='container'>
					<div className='mx-auto flex max-w-3xl flex-col text-center'>
						<PageTitle title={title} />
						<Divider style={pageHeaderStyle} />
						<CustomPortableText value={description} />
						{cta && <CtaLink {...cta} />}
					</div>
				</div>
			)}

			<div className='container'>
				<div
					className={clsx(
						'flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-12',
						{
							'rounded-md bg-satin-linen px-6 py-12 md:px-12 md:py-20': image,
						}
					)}
				>
					<div className='md:max-h-[660px] lg:max-h-52'>
						{image && (
							<>
								<Image
									src={urlForImage(image.image)
										.width(450)
										.height(550)
										.fit('fill')
										.url()}
									alt={image.alt}
									width={450}
									height={550}
									className='mx-auto mt-12 h-96 w-64 translate-y-0 object-cover object-center xl:-translate-y-[40%]'
								/>
								<div className='hidden h-96 w-64 -translate-y-[20rem] translate-x-5 border-4 border-axolotl md:block' />
							</>
						)}
					</div>
					<div className='mx-auto flex max-w-3xl flex-col space-y-6 text-left sm:space-y-12 xl:text-center'>
						<div>
							<PageTitle title={title} />
						</div>
						<Divider style={pageHeaderStyle} />
						<CustomPortableText value={description} />
						{cta && (
							<div>
								<CtaLink {...cta} />
							</div>
						)}
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default PageHeader
