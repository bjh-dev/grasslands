import { PortableTextBlock } from 'sanity'

import CtaLink from '@/components/shared/CtaLink'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { SectionHeading, SectionTitle } from '@/components/shared/Typography'
import { CtaType } from '@/lib/types'

const SectionHeader = ({
	title,
	heading,
	text,
	cta,
}: {
	title: string
	heading?: string
	text?: PortableTextBlock[]
	cta?: CtaType
}) => {
	return (
		<div className='flex flex-col space-y-6'>
			<div>
				{heading && <SectionTitle title={title} />}
				<SectionHeading heading={heading ? heading : title} />
			</div>
			<CustomPortableText value={text} />
			{cta && (
				<div>
					<CtaLink {...cta} />
				</div>
			)}
		</div>
	)
}

export default SectionHeader
