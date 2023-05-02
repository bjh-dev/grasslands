import { PortableTextBlock } from 'sanity'

import CtaLink from '@/components/shared/CtaLink'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { SectionTitle } from '@/components/shared/Typography'
import { CtaType } from '@/lib/types'

const SectionHeader = ({
	title,
	text,
	cta,
}: {
	title: string
	text: PortableTextBlock[]
	cta?: CtaType
}) => {
	return (
		<div className='flex flex-col space-y-6'>
			<SectionTitle title={title} />
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
