import { PortableText, PortableTextComponents } from '@portabletext/react'
import { Image, PortableTextBlock } from 'sanity'

import ImageBox from '@/components/shared/ImageBox'

export function CustomPortableText({
	value,
}: {
	paragraphClasses?: string
	value: PortableTextBlock[]
}) {
	const components: PortableTextComponents = {
		block: {
			normal: ({ children }) => {
				return <p className='font-sans text-lg font-extralight'>{children}</p>
			},
		},
		marks: {
			link: ({ children, value }) => {
				return (
					<a
						className='underline transition hover:opacity-50'
						href={value?.href}
						rel='noreferrer noopener'
					>
						{children}
					</a>
				)
			},
		},
		types: {
			image: ({
				value,
			}: {
				value: Image & { alt?: string; caption?: string }
			}) => {
				return (
					<div className='my-6 space-y-2'>
						<ImageBox
							image={value}
							alt={value.alt}
							classesWrapper='relative aspect-[16/9]'
						/>
						{value?.caption && (
							<div className='text-gray-600 font-sans text-sm'>
								{value.caption}
							</div>
						)}
					</div>
				)
			},
		},
	}

	return <PortableText components={components} value={value} />
}
