import { PortableTextBlock } from 'sanity'

import SectionHeader from '@/components/shared/SectionHeader'
import Wrapper from '@/components/shared/Wrapper'
import { LinkType, StyleType } from '@/lib/types'

type CenteredTextProps = {
	_type: 'centeredText'
	_key: string
	title: string
	heading?: string
	text: PortableTextBlock[]
	sectionStyle: StyleType
	cta?: LinkType
}

const CenteredText = (props: CenteredTextProps) => {
	const { title, text, heading, cta, sectionStyle } = props
	// console.log('CenteredText: ', props)
	return (
		<>
			<Wrapper style={sectionStyle} title={title ? title : null} center>
				<div className='container relative max-w-3xl'>
					<SectionHeader
						title={title}
						heading={heading}
						text={text}
						cta={cta}
						style={sectionStyle}
					/>
				</div>
			</Wrapper>
		</>
	)
}

export default CenteredText
