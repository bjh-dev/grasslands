import { PortableTextBlock } from 'sanity'

import SectionHeader from '@/components/shared/SectionHeader'
import Wrapper from '@/components/shared/Wrapper'
import { CtaType, StyleType } from '@/lib/types'

type CenteredTextProps = {
	_type: 'centeredText'
	_key: string
	title: string
	text: PortableTextBlock[]
	sectionStyle: StyleType
	cta?: CtaType
}

const CenteredText = (props: CenteredTextProps) => {
	const { title, text, cta, sectionStyle } = props
	// console.log('CenteredText: ', props)
	return (
		<>
			<Wrapper style={sectionStyle} title={title ? title : null} center>
				<div className='container relative max-w-3xl'>
					<SectionHeader
						title={title}
						heading={null}
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
