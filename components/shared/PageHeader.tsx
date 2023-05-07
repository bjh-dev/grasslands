import clsx from 'clsx'
import Image from 'next/image'
import { PortableTextBlock } from 'sanity'

import CtaLink from '@/components/shared/CtaLink'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import Divider from '@/components/shared/Divider'
import { PageHeading, PageTitle } from '@/components/shared/Typography'
import Wrapper from '@/components/shared/Wrapper'
import { urlForImage } from '@/lib/sanity.image'
import { LinkType, SimpleImageType, StyleType } from '@/lib/types'

type PageHeaderProps = {
	_type: 'pageHeader'
	title: string
	heading?: string
	description?: PortableTextBlock[]
	image?: SimpleImageType
	cta?: LinkType
	pageHeaderStyle: StyleType
}

const PageHeader = (props: PageHeaderProps) => {
	const { title, heading, description, cta, pageHeaderStyle, image } = props
	// console.log('pageHeaderProps: ', props)
	return (
		<Wrapper style={pageHeaderStyle} pageHeader>
			{!image && (
				<div className='container'>
					<div className='mx-auto flex max-w-3xl flex-col text-center'>
						<PageTitle title={title} />
						<PageHeading heading={heading} />
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
							'items-center rounded-md bg-satin-linen px-6 py-12 md:px-12 md:py-20':
								image,
						}
					)}
				>
					<div>
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
									className='mx-auto translate-y-0 object-cover object-center'
									priority
								/>
								{/* <div className='hidden h-96 w-64 -translate-y-[20rem] translate-x-[15rem] border-4 border-axolotl md:block md:translate-x-[5rem] xl:-translate-y-[22rem] xl:translate-x-[10rem] 2xl:translate-x-[15rem]' /> */}
							</>
						)}
					</div>
					<div className='mx-auto flex max-w-3xl flex-col space-y-6 pb-12 sm:space-y-12'>
						<div>
							<div
								className={clsx('mb-4', {
									'text-rope': pageHeaderStyle.selectedStyle == 'image',
									'text-axolotl-700': pageHeaderStyle.selectedStyle == 'normal',
									'satin-linen text-axolotl':
										pageHeaderStyle.backgroundColour == '#ECE5D5',
									'indian-khaki text-axolotl-800':
										pageHeaderStyle.backgroundColour == '#C4B08F',
									'tautara text-indian-khaki':
										pageHeaderStyle.backgroundColour == '#383637',
									'ronchi text-tuatara-800':
										pageHeaderStyle.backgroundColour == '#F7C548',
									'rope text-indian-khaki-50':
										pageHeaderStyle.backgroundColour == '#9B5A30',
									'axolotl text-indian-khaki-50':
										pageHeaderStyle.backgroundColour == '#48623E',
								})}
							>
								<PageTitle title={title} />
							</div>
							<div
								className={clsx({
									'text-tuatara-700': pageHeaderStyle.selectedStyle == 'image',
									'text-tuatara-800': pageHeaderStyle.selectedStyle == 'normal',
									'satin-linen text-rope-700':
										pageHeaderStyle.backgroundColour == '#ECE5D5',
									'indian-khaki text-axolotl-800':
										pageHeaderStyle.backgroundColour == '#C4B08F',
									'tautara text-indian-khaki':
										pageHeaderStyle.backgroundColour == '#383637',
									'ronchi text-tuatara-800':
										pageHeaderStyle.backgroundColour == '#F7C548',
									'rope text-indian-khaki-50':
										pageHeaderStyle.backgroundColour == '#9B5A30',
									'axolotl text-indian-khaki':
										pageHeaderStyle.backgroundColour == '#48623E',
								})}
							>
								<PageHeading heading={heading} />
							</div>
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
