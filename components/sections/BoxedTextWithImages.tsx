import SectionHeader from '@/components/shared/SectionHeader'
import Wrapper from '@/components/shared/Wrapper'

const BoxedTextWithImages = (props) => {
	const { title, text, cta, sectionStyle } = props
	return (
		<Wrapper style={sectionStyle}>
			<div className='container mt-12'>
				<div className='flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-12'>
					<div className='col-span-1'>Image</div>
					<div className='col-span-1'>
						<div className='bg-axolotl-800 py-12 text-satin-linen-100'>
							<SectionHeader title={title} text={text} />
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default BoxedTextWithImages
