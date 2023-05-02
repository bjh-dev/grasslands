import clsx from 'clsx'

import { urlForImage } from '@/lib/sanity.image'
import { StyleType } from '@/lib/types'

const Wrapper = ({
	children,
	style,
	pageHeader,
}: {
	children: React.ReactNode
	style: StyleType
	pageHeader?: boolean
}) => {
	const bgColour = style?.selectedStyle === 'colour'
	const bgImage = style?.selectedStyle === 'image'
	if (pageHeader) {
		return (
			<header
				style={{
					backgroundColor: bgColour ? style?.backgroundColour : null,
					backgroundImage: bgImage
						? `url(${urlForImage(style?.backgroundImage).url()})`
						: 'none',
				}}
				className={clsx({
					'bg-[#000000] bg-opacity-50 bg-cover bg-center bg-no-repeat py-12 bg-blend-multiply':
						bgImage,
					'py-24 md:py-24': style.selectedStyle === 'colour',
					'border-rope': style.backgroundColour == '#ECE5D5',
					'bg-blue': style.backgroundColour == '#C4B08F',
					'#383637': style.backgroundColour == '#383637',
					'#F7C548': style.backgroundColour == '#F7C548',
					'text-satin-linen': style.backgroundColour == '#9B5A30',
					'border-satin-linen': style.backgroundColour == '#48623E',
				})}
			>
				{children}
			</header>
		)
	}
	return (
		<section
			style={{
				backgroundColor: bgColour ? style?.backgroundColour : null,
				backgroundImage: bgImage
					? `url(${urlForImage(style?.backgroundImage).url()})`
					: 'none',
			}}
			className={clsx({
				'bg-[#000000] bg-opacity-50 bg-cover bg-center bg-no-repeat py-36 bg-blend-multiply':
					bgImage,
				'py-24': !bgImage,

				'text-satin-linen': style?.backgroundColour == '#48623E',
			})}
		>
			{children}
		</section>
	)
}

export default Wrapper
