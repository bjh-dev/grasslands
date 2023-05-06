import clsx from 'clsx'
import { PortableTextBlock } from 'sanity'

import CtaLink from '@/components/shared/CtaLink'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { SectionHeading, SectionTitle } from '@/components/shared/Typography'
import { CtaType, StyleType } from '@/lib/types'

interface SectionHeaderProps {
	title: string
	heading?: string
	text?: PortableTextBlock[]
	style: StyleType
	cta?: CtaType
	center?: boolean
}

const SectionHeader = (props: SectionHeaderProps) => {
	const { title, heading, text, cta, style, center } = props
	// console.log('SectionHeaderProps: ', props)
	return (
		<div className='flex flex-col space-y-6'>
			<div>
				{heading && <SectionTitle title={title} />}
				<span
					className={clsx({
						'items-center text-center': center,
						'text-rope-900': style.backgroundColour == '#ECE5D5',
						'text-axolotl-800': style.backgroundColour == '#C4B08F',
						'text-indian-khaki': style.backgroundColour == '#383637',
						'text-tuatara-800': style.backgroundColour == '#F7C548',
						'text-indian-khaki-50': style.backgroundColour == '#9B5A30',
						'text-indian-khaki-400': style?.backgroundColour == '#48623E',
					})}
				>
					<SectionHeading heading={heading ? heading : title} />
				</span>
			</div>
			<div
				className={clsx({
					'items-center text-center': center,
					'text-rope-900': style.backgroundColour == '#ECE5D5',
					'text-axolotl-800': style.backgroundColour == '#C4B08F',
					'text-indian-khaki': style.backgroundColour == '#383637',
					'text-tuatara-800': style.backgroundColour == '#F7C548',
					'text-indian-khaki-50': style.backgroundColour == '#9B5A30',
					'text-indian-khaki-400': style?.backgroundColour == '#48623E',
				})}
			>
				<CustomPortableText value={text} />
			</div>
			{cta && (cta.reference || cta.url) && (
				<div>
					<CtaLink {...cta} />
				</div>
			)}
		</div>
	)
}

export default SectionHeader
