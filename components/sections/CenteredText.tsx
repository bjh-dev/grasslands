import CtaLink from '@/components/shared/CtaLink'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { SectionHeading } from '@/components/shared/Typography'
import Wrapper from '@/components/shared/Wrapper'
import { CenteredTextType } from '@/lib/types'

const CenteredText = ({ title, text, cta, sectionStyle }: CenteredTextType) => {
	return (
		<>
			<Wrapper style={sectionStyle}>
				<div className='container'>
					<div className='flex flex-col space-y-12 text-center'>
						<div className='mx-auto max-w-lg'>
							<SectionHeading heading={title} />
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
