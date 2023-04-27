import classNames from 'classnames'

import { urlForImage } from '@/lib/sanity.image'
import { CenteredTextType } from '@/lib/types'

import CtaLink from '../shared/CtaLink'
import { CustomPortableText } from '../shared/CustomPortableText'
import { SectionTitle } from '../shared/Typography'

const CenteredText = ({ title, text, cta, sectionStyle }: CenteredTextType) => {
	const bgColour = sectionStyle.selectedStyle === 'colour'
	const bgImage = sectionStyle.selectedStyle === 'image'
	return (
		<>
			<section
				style={{
					backgroundColor: bgColour ? sectionStyle.backgroundColour : null,
					backgroundImage: bgImage
						? `url(${urlForImage(sectionStyle.backgroundImage).url()})`
						: 'none',
				}}
				className={classNames('py-24 md:py-24', {
					'bg-[#000000] bg-opacity-50 bg-cover bg-center bg-no-repeat bg-blend-multiply':
						bgImage,
				})}
			>
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
			</section>
		</>
	)
}

export default CenteredText
