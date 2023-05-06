import clsx from 'clsx'
import Image from 'next/image'

import { slugify } from '@/lib/helpers'
import { urlForImage } from '@/lib/sanity.image'
import { StyleType } from '@/lib/types'

const Wrapper = ({
	children,
	style,
	pageHeader,
	title,
	center,
}: {
	children: React.ReactNode
	style: StyleType
	pageHeader?: boolean
	title?: string
	center?: boolean
}) => {
	const bgImage = style?.selectedStyle === 'image'
	if (pageHeader) {
		return (
			<header
				id={title ? title : null}
				style={{
					backgroundImage: bgImage
						? `url(${urlForImage(style?.backgroundImage).url()})`
						: 'none',
				}}
				className={clsx('relative z-0', {
					'bg-[#000000] bg-opacity-50 bg-cover bg-center bg-no-repeat py-12 bg-blend-multiply':
						bgImage,
					'py-24': style.selectedStyle === 'normal',
					'py-28': style.selectedStyle === 'colour',
					'bg-satin-linen': style.backgroundColour == '#ECE5D5',
					'bg-indian-khaki': style.backgroundColour == '#C4B08F',
					'bg-tuatara': style.backgroundColour == '#383637',
					'bg-ronchi': style.backgroundColour == '#F7C548',
					'bg-rope text-satin-linen': style.backgroundColour == '#9B5A30',
					'bg-axolotl text-satin-linen': style?.backgroundColour == '#48623E',
				})}
			>
				{children}
			</header>
		)
	}
	return (
		<section
			id={title ? slugify(title) : null}
			style={{
				backgroundImage: bgImage
					? `url(${urlForImage(style?.backgroundImage).url()})`
					: 'none',
			}}
			className={clsx('relative z-0', {
				'text-center': center,
				'bg-[#000000] bg-opacity-50 bg-cover bg-center bg-no-repeat py-36 bg-blend-multiply':
					bgImage,
				'py-24': style.selectedStyle === 'normal',
				'py-28': style.selectedStyle === 'colour',
				'bg-satin-linen': style.backgroundColour == '#ECE5D5',
				'bg-indian-khaki': style.backgroundColour == '#C4B08F',
				'bg-tuatara': style.backgroundColour == '#383637',
				'bg-ronchi': style.backgroundColour == '#F7C548',
				'bg-rope text-satin-linen': style.backgroundColour == '#9B5A30',
				'bg-axolotl text-indian-khaki': style?.backgroundColour == '#48623E',
			})}
		>
			{children}
			{title == 'The Planting Project' && (
				<>
					<Image
						className='absolute bottom-0 w-full'
						src='/images/soil.png'
						alt='Soil'
						width={2500}
						height={177}
					/>
					<Image
						className='absolute bottom-0 left-[10%] -z-20 h-auto w-[15%]'
						src='/images/plant-1.png'
						alt='Plant'
						width={300}
						height={300}
					/>
					<Image
						className='absolute bottom-0 right-[10%] -z-20 h-auto w-[22%]'
						src='/images/plant-2.png'
						alt='Plant'
						width={300}
						height={300}
					/>
				</>
			)}
		</section>
	)
}

export default Wrapper
