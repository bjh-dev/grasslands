import { CenteredTextType } from '@/lib/types'

import CtaLink from '../shared/CtaLink'
import { CustomPortableText } from '../shared/CustomPortableText'
import { SectionTitle } from '../shared/Typography'
import Wrapper from '../shared/Wrapper'

const CenteredText = ({ title, text, cta, sectionStyle }: CenteredTextType) => {
	return (
		<>
			<Wrapper style={sectionStyle}>
				<div className='container'>
					<div className='flex flex-col space-y-12 text-center'>
						<div className='mx-auto max-w-lg'>
							<SectionTitle title={title} />
						</div>
						<div className='mx-auto max-w-4xl'>
							<CustomPortableText value={text} />
						</div>
						{cta && (
							<div>
								<CtaLink {...cta} />
							</div>
						)}
					</div>
				</div>
			</Wrapper>
		</>
	)
}

export default CenteredText
