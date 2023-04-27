import classNames from 'classnames'
import Image from 'next/image'

import { urlForImage } from '@/lib/sanity.image'
import { pageHeaderType } from '@/lib/types'

import CtaLink from './CtaLink'
import { CustomPortableText } from './CustomPortableText'
import { PageTitle } from './Typography'

const PageHeader = (props: pageHeaderType) => {
	const { title, description, cta, pageHeaderStyle, image } = props
	// console.log('pageHeaderProps: ', props)
	const bgColour = pageHeaderStyle.selectedStyle === 'colour'
	const bgImage = pageHeaderStyle.selectedStyle === 'image'
	return (
		<header
			style={{
				backgroundColor: bgColour ? pageHeaderStyle.backgroundColour : null,
				backgroundImage: bgImage
					? `url(${urlForImage(pageHeaderStyle.backgroundImage).url()})`
					: 'none',
			}}
			className={classNames('py-16 md:py-24', {
				'bg-[#000000] bg-opacity-50 bg-cover bg-center bg-no-repeat bg-blend-multiply':
					bgImage,
			})}
		>
			{!image && (
				<div className='container'>
					<div className='mx-auto flex max-w-3xl flex-col space-y-12 text-center'>
						<PageTitle title={title} />
						<div className='mx-auto w-1/4 border-b-4 border-rope' />
						<CustomPortableText value={description} />
						{cta && <CtaLink {...cta} />}
					</div>
				</div>
			)}

			<div className='container'>
				<div className='flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-12'>
					<div>
						<Image
							src={urlForImage(image.image).url()}
							alt={image.alt}
							width={250}
							height={250}
							className='mx-auto mt-12 object-cover object-center'
						/>
					</div>
					<div className='mx-auto flex max-w-3xl flex-col space-y-12 text-center lg:text-left'>
						<PageTitle title={title} />
						<div className='mx-auto w-1/4 border-b-4 border-rope lg:ml-0' />
						<CustomPortableText value={description} />
						{cta && (
							<div>
								<CtaLink {...cta} />
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}

export default PageHeader
